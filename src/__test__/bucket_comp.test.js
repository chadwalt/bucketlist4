import React from "react"
import Buckets from "../components/buckets"
import "./setup"

import { shallow } from "enzyme"

const props = {
	displayTable: "buckets",
	buckets: [{
		date_created: "Fri, 22 Sep 2017 11:09:55 GMT",
		id: 30,
		name: "Traveling to mombosa",
		user_id: 38
	}, {
		date_created: "Fri, 22 Sep 2017 18:09:55 GMT",
		id: 31,
		name: "Traveling to Usa",
		user_id: 38
	}]
}

const itemsProps = {
	displayTable: "bucketItems",
	buckets: [{
		date_created: "Fri, 22 Sep 2017 11:09:55 GMT",
		id: 30,
		name: "Going to every place in mombosa",
		user_id: 38,
		description: "mkop",
		bucket_id: 3
	}, {
		date_created: "Fri, 22 Sep 2017 18:09:55 GMT",
		id: 31,
		name: "Chilling in mombosa",
		user_id: 38,
		description: "mkop",
		bucket_id: 3
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
})