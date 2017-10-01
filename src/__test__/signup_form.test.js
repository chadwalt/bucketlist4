import React from "react"
import renderer from "react-test-renderer"
import SignupForm from "../components/signup_form"

describe("It renders the Signup form", () => {
	it("It renders correctly", () => {
		const rendered = renderer.create(<SignupForm/>)
		expect(rendered.toJSON()).toMatchSnapshot()
	})
})