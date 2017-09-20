/*
* This page will hold the bucketlists.
* *******************************************/

import React, { Component } from "react"
import Buckets from "../components/buckets"
import { Redirect } from "react-router"

class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = { // Set the current state of this prop.
			bucket: "",
			redirect: ""
		}
	}

	render() {
		const { redirect } = this.state

		if (redirect === "logout") {
			// Delete the token in the session Storage.
			sessionStorage.removeItem("token")
			return (<Redirect to="/" />) // Redirect to login.
		} else if (redirect === "" || sessionStorage.token) {
			return (
				<Buckets />
			)
		}


	}
}



export default Dashboard
