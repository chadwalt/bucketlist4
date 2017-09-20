/*
* This page will hold the bucketlists.
* *******************************************/

import React, { Component } from "react"
import Buckets from "../components/buckets"

class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = { // Set the current state of this prop.
			bucket: ""
		}
	}

	render() {
		return (
			<Buckets/>
		)
	}
}



export default Dashboard
