import React from "react"
import renderer from "react-test-renderer"
import Signup from "../containers/Signup"
import "./setup"
import BaseUrl from "../config"

import { shallow, mount } from "enzyme"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import "url-search-params-polyfill"
const mock = new MockAdapter(axios)

mock.onPost(BaseUrl + "auth/register").reply(200, {success: true})

describe("Login Snapshot", () => {
	let params = {
		first_name: "Timothy",
		sur_name: "Kyadondo",
		username: "chad",
		password: "123",
		email: "chadwalt@outlook.com"
	}

	it("renders correctly", ()=> {
		const rendered = renderer.create(<Signup/>)
		expect(rendered.toJSON()).toMatchSnapshot()
	})

	it("It should check change state", () => {
		const wrapper = shallow(<Signup />)
		const event = {
			preventDefault: () => { },
		}
		wrapper.instance().login(event)
		expect(wrapper.state().redirect).toEqual(true)
	})

	it("It should update state on form input.", () => {
		const wrapper = shallow(<Signup />)
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

	it("It should register the user.", () => {
		const wrapper = shallow(<Signup />)
		const event = {
			preventDefault: () => { },
			target: {
				name: "username",
				value: "chad"
			}
		}
		wrapper.instance().create_account(event)
		wrapper.setState(params)
		wrapper.instance().create_account(event)
		expect(wrapper.state().redirect).toEqual(false)
	})

})