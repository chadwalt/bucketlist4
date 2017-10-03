import React from "react"
import renderer from "react-test-renderer"
import Signup from "../containers/Signup"
import "./setup"
import BaseUrl from "../config"

import { shallow, mount } from "enzyme"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
const mock = new MockAdapter(axios)

describe("Login Snapshot", () => {
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

})