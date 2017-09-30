import React from "react"
import renderer from "react-test-renderer"
import Pagination from "../components/pagination"
import { StaticRouter } from "react-router"
import { shallow, mount } from "enzyme"
import "./setup"

describe("Login Snapshot", () => {
	it("renders correctly", () => {
		const props = {
			paginate: {
				prev_url: "",
				pages: 3,
				next_url: ""
			}
		}
		const paginate = renderer.create(<Pagination {...props} />)
		expect(paginate.toJSON()).toMatchSnapshot()
	})

	it("Should be able to click the prev button in pagination.", () => {
		const mockFunction = jest.fn()
		const props = {
			paginate: {
				prev_url: "/buckets/1",
				pages: 1,
				next_url: "/buckets/2"
			}
		}
		const element = mount(<Pagination {...props} onMovePage={mockFunction} />)
		element.find("#prev_page").simulate("click")
		element.find("#next_page").simulate("click")
		expect(mockFunction).toHaveBeenCalled()
	})

})