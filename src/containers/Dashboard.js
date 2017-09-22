/*
* This page will hold the bucketlists.
* *******************************************/

import React, { Component } from "react"
import Buckets from "../components/buckets"
import { Redirect } from "react-router"
import { AddBucketModal, DeleteModel } from "../components/add_bucket_model"
import BaseUrl from "../config"
import axios from "axios"
import _ from "lodash"

class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = { // Set the current state of this prop.
			bucket_id: "",
			bucket_name: "",
			redirect: "",
			model_title: "Add Bucket!",
			page: 1,
			rows: 10,
			buckets: [],
			model_message: "",
			isLoggedIn: false
		}

		this.logout = this.logout.bind(this)
		this.saveBucket = this.saveBucket.bind(this)
		this.handleInput = this.handleInput.bind(this)
		this.editBucket = this.editBucket.bind(this)
		this.addBucket = this.addBucket.bind(this)
		this.openDeleteBucket = this.openDeleteBucket.bind(this)
		this.deleteBucket = this.deleteBucket.bind(this)
		this.checkLoggedStatus = this.checkLoggedStatus.bind(this)
	}

	componentWillMount(){
		this.checkLoggedStatus()
	}

	/* Set the isLoggedIn to true if the token has been set.
	* *******************************************************/
	checkLoggedStatus(){
		if (sessionStorage.auth_token){
			this.setState({
				isLoggedIn: true
			})
		}
	}

	/* Get all the users buckets after the dom has rendered.
	* ************************************************************** **/
	componentDidMount() {
		let auth_token = sessionStorage.auth_token // Get the auth_token from the session storage.

		axios({
			method: "GET",
			url: BaseUrl + "bucketlists/?page=" + this.state.page + "&rows=" + this.state.rows,
			headers: { "Authorization": auth_token }
		}).then(function (response) {
			this.setState({
				buckets: response.data
			})
		}.bind(this))
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
		let auth_token = sessionStorage.auth_token // Get the auth_token from the session storage.

		axios({
			method: "POST",
			url: BaseUrl + "auth/logout",
			headers: { "Authorization": auth_token }
		}).then(function (response) {
			var data = response.data
			if (data.success) {
				// Delete the token in the session Storage.
				sessionStorage.removeItem("auth_token")
			}
		})

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
		let req_method = "POST"
		let end_point = "bucketlists/"

		var params = new URLSearchParams() // Using the x-www-form-urlencoded.
		params.append("name", this.state.bucket_name)

		// Check if save or edit basing on the emptiness of the id in the state.
		if (this.state.bucket_id) {
			req_method = "PUT"
			end_point = "bucketlists/" + this.state.bucket_id
		}

		axios({
			method: req_method,
			url: BaseUrl + end_point,
			data: params,
			headers: { "Authorization": auth_token }
		}).then(function (response) {
			var data = response.data
			if (data.success) {
				alert("Bucketlist Saved successfully")

				let buckets = this.state.buckets
				let obj = {
					id: data.id,
					name: data.name,
					date_created: data.date_created,
					user_id: ""
				}

				if (req_method === "PUT") {
					// On editing the bucket, remove it then replace it with the updated one.
					_.remove(buckets, {
						id: data.id
					})
				}

				buckets.push(obj)
				this.setState({
					buckets: buckets
				})
			}
		}.bind(this))
	}

	/* Edit the bucket. 
	* @param name => String. This holds the name of the bucket
	* @param id => Int. This holds the id of the bucket.
	* ******************************************************** */
	editBucket(name, id) {
		this.setState({
			model_title: "Edit Bucket",
			bucket_name: name,
			bucket_id: id
		})
	}

	/* Add the bucket. This clears the form and sets the Modal title
	* ******************************************************** */
	addBucket() {
		this.setState({
			model_title: "Add Bucket",
			bucket_name: "",
			bucket_id: ""
		})
	}

	/* This will set the message the message for the model, title, id.
	* @param name => String. This holds the name of the bucket.
	* @param id => Int. This holds the id of the bucket.
	* ************************************************************ */
	openDeleteBucket(name, id) {
		let message = "Are you sure you want to delete " + name + "?"

		this.setState({
			model_message: message,
			bucket_id: id,
			bucket_name: name,
			model_title: "Delete Bucket!"
		})
	}

	/* Delete the bucket from the application.
	* ************************************* *****/
	deleteBucket() {

		let auth_token = sessionStorage.auth_token // Get the auth_token from the session storage.

		axios({
			method: "DELETE",
			url: BaseUrl + "bucketlists/" + this.state.bucket_id,
			headers: { "Authorization": auth_token }
		}).then(function (response) {
			var data = response.data
			if (data.success) {
				alert(data.msg)

				let buckets = this.state.buckets
				_.remove(buckets, {
					"id": this.state.bucket_id
				})

				this.setState({
					buckets: buckets
				})
			}
		}.bind(this))
	}

	render() {
		const { redirect } = this.state

		if (!this.state.isLoggedIn){
			return (<Redirect to="/" />) // Redirect to login.
		}

		if (redirect === "logout") {
			return (<Redirect to="/" />) // Redirect to login.
		} else if (redirect === "" || sessionStorage.token) {
			return (
				<div>
					<Buckets
						{...this.state}
						buckets={this.state.buckets}
						onLogout={this.logout}
						onEdit={this.editBucket}
						onAdd={this.addBucket}
						onAddBucket={this.addBucket}
						onOpenDelete={this.openDeleteBucket}
					/>

					<AddBucketModal title={this.state.model_title} bucketName={this.state.bucket_name}
						onSaveBucket={this.saveBucket}
						onInput={this.handleInput}
					/>

					<DeleteModel title={this.state.model_title} bucketName={this.state.bucket_name} message={this.state.model_message}
						onDeleteBucket={this.deleteBucket}
					/>
				</div>

			)
		}


	}
}



export default Dashboard
