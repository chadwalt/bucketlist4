import React from "react"
import renderer from "react-test-renderer"
import LoginForm from "../components/login_form"

describe("Login Snapshot", () => {
	it("renders correctly", ()=> {
		const rendered = renderer.create(<LoginForm/>)
		expect(rendered.toJSON()).toMatchSnapshot()
	})

})