import React from "react"
import renderer from "react-test-renderer"
import Login from "../containers/Login"
import "./setup"
import BaseUrl from "../config"

import { shallow, mount } from "enzyme"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import "url-search-params-polyfill"
const mock = new MockAdapter(axios)

mock.onPost(BaseUrl + "auth/login").reply(200, { success: true })

describe("Login Snapshot", () => {
	let params = {
		username: "chadwalt",
		password: "123",
		redirect: "",
		visible: false
	}
	it("renders correctly", ()=> {
		const rendered = renderer.create(<Login/>)
		expect(rendered.toJSON()).toMatchSnapshot()
	})

	it("It should check change state", () => {
		const wrapper = shallow(<Login />)

		wrapper.instance().onDismiss()
		expect(wrapper.state().visible).toEqual(false)

		const event = {
			preventDefault: () => { },
			target: {
				name: "username",
				value: "chad"
			}
		}
		wrapper.instance().create_account(event)
		expect(wrapper.state().redirect).toEqual("signup")
	})

	it("It should update state on form input.", () => {
		const wrapper = shallow(<Login />)
		const event = {
			preventDefault: () => { },
			target: {
				name: "username",
				value: "chad"
			}
		}

		wrapper.instance().handle_input(event)
		expect(wrapper.state().username).toEqual("chad")
	})

	it("It should be to login user", () =>{
		const wrapper = shallow(<Login />)
		const event = {
			preventDefault: () => { },
		}

		wrapper.instance().login(event)
		wrapper.setState(params)
		wrapper.instance().login(event)
		expect(wrapper.state().alert_type).toEqual("danger")
	})

})