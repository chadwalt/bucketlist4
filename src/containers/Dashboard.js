/*
* This page will hold the bucketlists.
* *******************************************/

import React, { Component } from "react"
import Buckets from "../components/buckets"
import { Redirect } from "react-router"
import AddBucketModal from "../components/add_bucket_model"
import BaseUrl from "../config"
import axios from "axios"

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

	/* Save the bucket 
	* *****************/
	saveBucket() {

		if (!this.state.bucket_name) {
			alert("Please provide a name for the bucket.")
			return
		}
		let auth_token = sessionStorage.auth_token // Get the auth_token from the session storage.

		var params = new URLSearchParams() // Using the x-www-form-urlencoded.
		params.append("name", this.state.bucket_name)

		axios({
			method: "POST",
			url: BaseUrl + "bucketlists/",
			data: params,
			headers: { "Authorization": auth_token }
		}).then(function (response) {
			var data = response.data
			if (data.success) {
				alert("Bucketlist Saved successfully")
			}

		})


	}

	render() {
		const { redirect } = this.state

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
