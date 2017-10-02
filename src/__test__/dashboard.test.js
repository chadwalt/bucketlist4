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
mock.onGet(BaseUrl+"bucketlists/?page=1&rows=8").reply(200,{})
describe("Testing the Dashboard container", () => {
	
	const mockFunction = jest.fn()
	// jest.mock("axios")
	const props = {
		displayTable:"buckets",
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

	it("It calls the onclick event for the edit of the bucket.", () => {
		const dashboard = mount(
			<StaticRouter context={{}}>
				<Dashboard {...props}/>
			</StaticRouter>
		)
		expect(dashboard).toHaveLength(1)
	})

	it("renders correctly", () => {
		const rendered = renderer.create(
			<StaticRouter context={{}}>
				<Dashboard {...props}/>
			</StaticRouter>)
		expect(rendered.toJSON()).toMatchSnapshot()
	})

})
