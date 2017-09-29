import React from "react"
import renderer from "react-test-renderer"
import Pagination from "../components/pagination"
import { StaticRouter } from "react-router"

describe("Login Snapshot", () => {
	it("renders correctly", () => {
		const props = {
			paginate: {
				prev_url: "",
				next_url: "",
				pages: 3
			}
		}
		const paginate = renderer.create(<Pagination {...props}/>)
		expect(paginate.toJSON()).toMatchSnapshot()
	})

})