import React from "react"
import renderer from "react-test-renderer"
import ReactDOM from 'react-dom';
import BucketItems from "../containers/BucketItems"
import { StaticRouter, MemoryRouter } from "react-router"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import "./setup"
import BaseUrl from "../config"
import { shallow, mount } from "enzyme"
import { JSDOM } from 'jsdom'

const mock = new MockAdapter(axios)

mock.onGet(BaseUrl + "bucketlists/1/items/?page=1&rows=8").reply(200, {})
mock.onPost(BaseUrl + "auth/logout").reply(200, { success: true })
mock.onDelete(BaseUrl + "bucketlists/1/items/1").reply(200, { success: true })
mock.onGet(BaseUrl + "bucketlists/1/items/?page=1&rows=1").reply(200, { success: true })
mock.onGet(BaseUrl + "bucketlists/1/items/?q=Climbing&page=1&rows=8").reply(200, {
	bucketItems: {
		id: 3,
		name: "Visiting USA."
	}
})

describe("Testing the BucketItems container", () => {

	const mockFunction = jest.fn()

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
		dismissAlert: mockFunction,
		parent_id: 1,
		buckets: [{
			date_created: "Fri, 22 Sep 2017 11:09:55 GMT",
			id: 30,
			name: "Going to every place in mombosa",
			user_id: 38,
			description: "mkop",
			bucket_id: 3,
		}]
	}

	it("It should render the bucket items.", () => {
		const bucketItem = mount(
			<StaticRouter context={{}}>
				<BucketItems {...props} />
			</StaticRouter>
		)
		expect(bucketItem).toHaveLength(1)
	})

	it("renders correctly", () => {
		const rendered = renderer.create(
			<MemoryRouter initialEntries={[{ pathname: "/bucketitems/1" }]} initialIndex={1} >
				<BucketItems />
			</MemoryRouter>)
		expect(rendered.toJSON()).toMatchSnapshot()
	})

	it("It should check change state", () => {
		const wrapper = shallow(<BucketItems {...props} />)
		wrapper.setState({ parent_id: 1 })

		sessionStorage.setItem("auth_token", "382283jjdjasdfadfa")
		wrapper.instance().checkLoggedStatus()
		expect(wrapper.state().isLoggedIn).toEqual(true)

		wrapper.instance().onDismiss()
		expect(wrapper.state().visible).toEqual(false)

		wrapper.instance().editBucket("Working", 1, "Working Good.")
		expect(wrapper.state().bucket_name).toEqual("Working")

		wrapper.instance().addBucket()
		expect(wrapper.state().model_title).toEqual("Add Bucket")

		wrapper.instance().openDeleteBucket("Climbing", 1)
		expect(wrapper.state().bucket_name).toEqual("Climbing")

		wrapper.instance().componentDidMount()
	})

	it("it should logout user", () => {
		const wrapper = shallow(<BucketItems {...props} />)
		const event = {
			preventDefault: () => { }
		}

		wrapper.instance().logout(event)
		expect(wrapper.state().redirect).toEqual("logout")
	})

	it("It should update state on form input.", () => {
		const wrapper = shallow(<BucketItems {...props} />)
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
		const wrapper = shallow(<BucketItems />)
		sessionStorage.setItem("auth_token", "382283jjdjasdfadfa")

		wrapper.setState({ parent_id: 1, bucket_id: 1 })
		wrapper.instance().deleteBucket()
		expect(wrapper.state().bucketItems.length).toEqual(0)
	})

	it("It should move to next page.", () => {
		const wrapper = shallow(<BucketItems {...props} />)
		sessionStorage.setItem("auth_token", "382283jjdjasdfadfa")

		wrapper.instance().movePage(1)
		expect(wrapper.state().bucketItems.length).toEqual(0)
	})

	it("It should search through the bucket items.", () => {
		const wrapper = shallow(<BucketItems {...props} />)
		sessionStorage.setItem("auth_token", "382283jjdjasdfadfa")

		const event = {
			preventDefault: () => { },
			target: {
				value: "Climbing"
			}
		}

		wrapper.instance().searchBucket(event)
		expect(wrapper.state().bucketItems.length).toEqual(0)
	})

})

