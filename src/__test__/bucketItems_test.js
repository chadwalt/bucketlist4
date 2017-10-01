import React from "react"
import renderer from "react-test-renderer"
import ReactDOM from 'react-dom';
import BucketItems from "../containers/BucketItems"
import "./setup"

describe("Buckets interface Snapshot", () => {
	it("renders correctly", ()=> {
		const rendered = renderer.create(<BucketItems/>)
		expect(rendered.toJSON()).toMatchSnapshot()
	})

})