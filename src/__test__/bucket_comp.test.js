import React from "react"
import Buckets from "../components/buckets"
import "./setup"
import renderer from 'react-test-renderer';

import { shallow, mount } from "enzyme"

const props = {
	displayTable: "buckets",
	pagination: {
		"next_url": "",
		"page": 1,
		"pages": 0,
		"prev_url": "",
	},
	buckets: [{
		date_created: "Fri, 22 Sep 2017 11:09:55 GMT",
		id: 30,
		name: "Traveling to mombosa",
		user_id: 38
	}]
}

const itemsProps = {
	displayTable: "bucketItems",
	pagination: {
		"next_url": "",
		"page": 1,
		"pages": 0,
		"prev_url": "",
	},
	buckets: [{
		date_created: "Fri, 22 Sep 2017 11:09:55 GMT",
		id: 30,
		name: "Going to every place in mombosa",
		user_id: 38,
		description: "mkop",
		bucket_id: 3,
	}]
}

const bucket_comp = shallow(<Buckets {...props} />)

const bucketitems_comp = shallow(<Buckets {...itemsProps} />)

describe("It should render the Buckets component", () => {

	it("It has 20 divs and renders the bucket list.", () => {
		expect(bucket_comp.find("div").length).toEqual(20)
	})

	it("It has 20 divs and renders the bucketlist items list.", () => {
		expect(bucketitems_comp.find("div").length).toEqual(20)
	})

	it("Should be able to click edit and delete bucket button", () => {
		const mockFunction = jest.fn()
		const element = mount(<Buckets {...props} onEdit={mockFunction} onOpenDelete={mockFunction}/>)
		element.find("#editBucket").simulate("click")
		element.find("#deleteBucket").simulate("click")
		expect(mockFunction).toHaveBeenCalled()
	})

	it("Should be able to click edit bucket button", () => {
		const mockFunction = jest.fn()
		const element = mount(<Buckets {...itemsProps} onEdit={mockFunction} onOpenDelete={mockFunction}/>)
		element.find("#editBucketItem").simulate("click")
		element.find("#deleteBucketItem").simulate("click")
		expect(mockFunction).toHaveBeenCalled()
	})
})