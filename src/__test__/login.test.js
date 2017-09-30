import React from "react"
import renderer from "react-test-renderer"
import Login from "../containers/Login"

describe("Login Snapshot", () => {
	it("renders correctly", ()=> {
		const rendered = renderer.create(<Login/>)
		expect(rendered.toJSON()).toMatchSnapshot()
	})

})