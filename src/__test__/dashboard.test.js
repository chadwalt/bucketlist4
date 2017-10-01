import React from "react"
import Buckets from "../components/buckets"
import renderer from "react-test-renderer";
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { StaticRouter } from "react-router";
import Dashboard from "../containers/Dashboard"
import "./setup"

import { shallow, mount } from "enzyme"

describe("Testing the Dashboard container", () => {
	it("It calls the onclick event for the edit of the bucket.", () => {
		const mock = MockAdapter(axios)

		const dashboard = mount(
			<StaticRouter context={{}}>
				<Dashboard />
			</StaticRouter>
		)
		expect(dashboard).toHaveLength(1)
	})

	it("renders correctly", () => {
		const rendered = renderer.create(<Dashboard />)
		expect(rendered.toJSON()).toMatchSnapshot()
	})


})