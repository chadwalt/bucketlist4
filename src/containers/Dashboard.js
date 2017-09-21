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
			redirect: "",
		}

		this.logout = this.logout.bind(this)
		this.addBucket = this.addBucket.bind(this)
		
	}

	logout(e) {
		e.preventDefault()

		// Delete the token in the session Storage.
		sessionStorage.removeItem("auth_token")

		this.setState({ redirect: "logout" })
	}

	addBucket() {

	}

	render() {
		const { redirect } = this.state

		if (redirect === "logout") {
			return (<Redirect to="/" />) // Redirect to login.
		} else if (redirect === "" || sessionStorage.token) {
			return (
				<Buckets
					{...this.state}
					onLogout={this.logout}
					onAddBucket={this.addBucket}
				/>
			)
		}


	}
}



export default Dashboard
