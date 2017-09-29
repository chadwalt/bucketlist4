import React from "react"
import Buckets from "../components/buckets"
import renderer from "react-test-renderer";
// import moxios from "moxios";
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { StaticRouter } from "react-router";
import Dashboard from "../containers/Dashboard"
import "./setup"

import { shallow, mount } from "enzyme"

describe("Testing the Dashboard container", () => {
	const mock = MockAdapter(axios)

	const dashboard = mount(
		<StaticRouter context={{}}>
			<Dashboard />
		</StaticRouter>
	)
	

	// beforeEach(() => {
	//  moxios.install(axios)
	// })
	// afterEach(() => {
	//  moxios.uninstall(axios)
	// })

	it("It calls the onclick event for the edit of the bucket.", () => {
		expect(dashboard).toHaveLength(1)
	})

	it("can delete bucket list", () => {
		// moxios.wait(() => {
		//  const request = moxios.requests.mostRecent()
		//  request.respondWith({
		//      status: 200,
		//      data: { success: true}
		//  })
		// })
		mock.onDelete("/bucketlists/1").reply(200,{success: true})

		// axios.onDelete("/bucketlists/1")

		// dashboard.deleteBucket()
		expect(dashboard.state.alert_type).toEqual("success")
	})

})