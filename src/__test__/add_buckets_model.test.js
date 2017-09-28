import React from "react"
import { AddBucketModal, AlertModel, DeleteModel, AddBucketItemModal } from "../components/add_bucket_model"
import { configure } from "enzyme"

import "./setup"

import { shallow } from "enzyme"

const props = {
	title: "Add Buckets",
	bucketName: "Going to the moon",
}
const bucket_modal = shallow(<AddBucketModal {...props} />)

const alert_modal = shallow(<AlertModel {...props} />)

const delete_modal = shallow(<DeleteModel {...props} />)

const bucketItem_modal = shallow(<AddBucketItemModal {...props} />)

describe("Test for <AddBucketModal /> component", () => {
	it("It should render 6 divs for the add buckets", () => {
		expect(bucket_modal.find("div").length).toEqual(6)
	})

	it ("It should render 6 divs for the alert model", () => {
		expect(alert_modal.find("div").length).toEqual(6)
	})

	it ("It should render 6 divs for the Delete model", () => {
		expect(delete_modal.find("div").length).toEqual(6)
	})

	it ("It should render 8 divs for the AddBucketlist model", () => {
		expect(bucketItem_modal.find("div").length).toEqual(8)
	})

})

