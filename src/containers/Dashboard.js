/*
* This page will hold the bucketlists.
* *******************************************/

import React, { Component } from "react"
import Buckets from "../components/buckets"
import { Redirect } from "react-router"
import AddBucketModal from "../components/add_bucket_model"
import BaseUrl from "../config"

class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = { // Set the current state of this prop.
			bucket_name: "",
			redirect: "",
			model_title: "Add Bucket!"
		}

		this.logout = this.logout.bind(this)
		this.saveBucket = this.saveBucket.bind(this)
		this.handleInput = this.handleInput.bind(this)
		
	}

	/* This will handle getting input from the form.
	* @param event => Event fired when the input is changed in the form.
	********************************************************************/
	handleInput(event) {
		const name = event.target.name
		const value = event.target.value
		this.setState({ [name]: value })
	}

	logout(e) {
		e.preventDefault()

		// Delete the token in the session Storage.
		sessionStorage.removeItem("auth_token")

		this.setState({ redirect: "logout" })
	}

	saveBucket() {
		
	}

	render() {
		const { redirect } = this.state
		console.log(BaseUrl)

		if (redirect === "logout") {
			return (<Redirect to="/" />) // Redirect to login.
		} else if (redirect === "" || sessionStorage.token) {
			return (
				<div>
					<Buckets
						{...this.state}
						onLogout={this.logout}
						onAddBucket={this.addBucket}
					/>
					<AddBucketModal title={this.state.model_title} bucketName={this.state.bucket_name}
						onSaveBucket={this.saveBucket}
						onInput={this.handleInput}
					/>
				</div>
				
			)
		}


	}
}



export default Dashboard
