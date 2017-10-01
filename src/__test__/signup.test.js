import React from "react"
import renderer from "react-test-renderer"
import Signup from "../containers/Signup"

describe("Login Snapshot", () => {
	it("renders correctly", ()=> {
		const rendered = renderer.create(<Signup/>)
		expect(rendered.toJSON()).toMatchSnapshot()
	})

})