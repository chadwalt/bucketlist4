import React from "react"
import renderer from "react-test-renderer"
import ReactDOM from 'react-dom';
import BucketItems from "../containers/BucketItems"
import { StaticRouter } from "react-router"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import "./setup"
import BaseUrl from "../config"
import { shallow, mount } from "enzyme"


// console.log('-----+++++------')
// const mock = new MockAdapter(axios)
// mock.onGet(BaseUrl + "bucketlists/1/items/?page=1&rows=8").reply(200,{})
// describe("Buckets interface Snapshot", () => {
// 	it("renders correctly", () => {
// 		const buckets = mount(
// 			<StaticRouter context={{}}>
// 				<BucketItems />
// 			</StaticRouter>
// 		)
// 		expect(buckets).toHaveLength(1)
// 	})

// })
