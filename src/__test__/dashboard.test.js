import React from "react"
import Buckets from "../components/buckets"
import renderer from "react-test-renderer"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { StaticRouter } from "react-router"
import Dashboard from "../containers/Dashboard"
import "./setup"
import BaseUrl from "../config"

import { shallow, mount } from "enzyme"
const mock = new MockAdapter(axios)

mock.onGet(BaseUrl + "bucketlists/?page=1&rows=8").reply(200, {})
mock.onPost(BaseUrl + "auth/logout").reply(200, { success: true })
mock.onDelete(BaseUrl + "bucketlists/1").reply(200, { success: true })
mock.onGet(BaseUrl + "bucketlists/?q=Climbing&page=1&rows=8").reply(200, { success: true })
mock.onGet(BaseUrl + "bucketlists/?page=1&rows=8").reply(200, {
	buckets: {
		id: 3,
		name: "Visiting USA."
	}
})

describe("Testing the Dashboard container", () => {

	const mockFunction = jest.fn()
	//let wrapper

	const props = {
		displayTable: "buckets",
		onLogout: mockFunction,
		modelId: "#myModal",
		onEdit: mockFunction,
		onAdd: mockFunction,
		onAddBucket: mockFunction,
		onOpenDelete: mockFunction,
		onSearch: mockFunction,
		pagination: mockFunction,
		onMovePage: mockFunction,
		dismissAlert: mockFunction
	}

	// afterEach(() => {
	// 	wrapper = shallow(<Dashboard {...props} />)
	// 	wrapper.setState({ bucket_name: "Joining the navy" })
	// 	sessionStorage.setItem("auth_token", "382283jjdjasdfadfa")
	// 	mock.onPost(BaseUrl + "bucketlists", wrapper.state().bucket_name).reply(200, { success: true })
	// })

	it("It calls the onclick event for the edit of the bucket.", () => {
		const dashboard = mount(
			<StaticRouter context={{}}>
				<Dashboard {...props} />
			</StaticRouter>
		)
		expect(dashboard).toHaveLength(1)
	})

	it("renders correctly", () => {
		const rendered = renderer.create(
			<StaticRouter context={{}}>
				<Dashboard {...props} />
			</StaticRouter>)
		expect(rendered.toJSON()).toMatchSnapshot()
	})

	it("It should check change state", () => {
		const wrapper = shallow(<Dashboard {...props} />)

		sessionStorage.setItem("auth_token", "382283jjdjasdfadfa")
		wrapper.instance().checkLoggedStatus()
		expect(wrapper.state().isLoggedIn).toEqual(true)

		wrapper.instance().onDismiss()
		expect(wrapper.state().visible).toEqual(false)

		wrapper.instance().editBucket("Edit Bucket", 1)
		expect(wrapper.state().model_title).toEqual("Edit Bucket")

		wrapper.instance().addBucket()
		expect(wrapper.state().model_title).toEqual("Add Bucket")

		wrapper.instance().openDeleteBucket("Climbing", 1)
		expect(wrapper.state().bucket_name).toEqual("Climbing")

		wrapper.instance().componentDidMount()
	})

	it("it should logout user", () => {
		const wrapper = shallow(<Dashboard {...props} />)
		const event = {
			preventDefault: () => { }
		}

		wrapper.instance().logout(event)
		expect(wrapper.state().redirect).toEqual("logout")
	})

	it("It should update state on form input.", () => {
		const wrapper = shallow(<Dashboard {...props} />)
		const event = {
			preventDefault: () => { },
			target: {
				name: "buckets",
				value: "Climbing"
			}
		}

		wrapper.instance().handleInput(event)
		expect(wrapper.state().buckets).toEqual("Climbing")
	})

	it("It should delete bucket.", () => {	
		const wrapper = shallow(<Dashboard />)
		sessionStorage.setItem("auth_token", "382283jjdjasdfadfa")	

		wrapper.setState({bucket_id: 1})
		wrapper.instance().deleteBucket()
		expect(wrapper.state().buckets.length).toEqual(0)
	})

	it("It should move to next page.", () => {	
		const wrapper = shallow(<Dashboard {...props} />)
		sessionStorage.setItem("auth_token", "382283jjdjasdfadfa")	

		wrapper.instance().movePage(1)
		expect(wrapper.state().buckets.length).toEqual(0)
	})

	it("It should search through the buckets.", () => {	
		const wrapper = shallow(<Dashboard {...props} />)
		sessionStorage.setItem("auth_token", "382283jjdjasdfadfa")	

		const event = {
			preventDefault: () => { },
			target: {
				value: "Climbing"
			}
		}

		wrapper.instance().searchBucket(event)
		expect(wrapper.state().buckets.length).toEqual(0)
	})

})
