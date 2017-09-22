/* This is going to render the login page.
* *****************************************/

import React, { Component } from "react"
import axios from "axios"
import LoginForm from "../components/login_form"
import { Redirect } from "react-router"
import BaseUrl from "../config"

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: "",
			redirect: ""
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

		if (redirect === "signup") {
			return (<Redirect to="/signup" />)
		} else if (redirect === "dashboard") {
			return (<Redirect to="/dashboard" />)
		}

		return (
			<LoginForm
				{...this.state}
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

		axios.post(BaseUrl + "auth/login", params).then(function (response) {
			let data = response.data
			if (data.success) {
				sessionStorage.setItem("auth_token", data.auth_token)
				this.setState({
					redirect: "dashboard"
				})
			} else {
				alert(data.message)
			}
		}.bind(this))
	}
	/* This will handle navigating the user to the signup page.
	* @param e => Event, the event fired when the button is clicked.
	* *******************************************************************/
	create_account(e) {
		e.preventDefault()

		this.setState({
			redirect: "signup"
		})
	}
}

export default Login
