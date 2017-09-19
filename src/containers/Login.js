/* This is going to render the login page.
* *****************************************/

import React, { Component } from "react"
import axios from "axios"
import LoginForm from "../components/login_form"
import { Redirect } from "react-router"

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: "",
			redirect: false
		}
		this.create_account = this.create_account.bind(this)
		this.handle_input = this.handle_input.bind(this)
		this.login = this.login.bind(this)
	}

	handle_input(event) {
		const name = event.target.name
		const value = event.target.value
		this.setState({ [name]: value })
	}

	render() {
		const { redirect } = this.state

		if (redirect) {
			return (<Redirect to="/signup" />)
		}

		return (
			<LoginForm
				{...this.props}
				onInput={this.handle_input}
				onSubmit={this.login}
				onSignup={this.create_account}
			/>
		)
	}

	/* This will handle loggin the user.
	* @param e => Event, the event fired when the button is clicked.
	* *******************************************************************/
	login(e) {
		e.preventDefault()

		var params = new URLSearchParams() // Using the x-www-form-urlencoded.
		params.append("username", this.state.username)
		params.append("password", this.state.password)

		if (this.state.username === "" || this.state.password === "") {
			alert("Please provide all fields.")
			return
		}

		axios.post("https://mybucketlist-api.herokuapp.com/auth/login", params).then(function (response) {
			let data = response.data
			if (data.success) {
				//console.log(response.data)
			} else {
				alert(data.message)
			}
		})
	}
	/* This will handle navigating the user to the signup page.
	* @param e => Event, the event fired when the button is clicked.
	* *******************************************************************/
	create_account(e) {
		e.preventDefault()

		this.setState({
			redirect: true
		})
	}
}

export default Login