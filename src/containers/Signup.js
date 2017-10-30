import React, { Component } from "react"
import axios from "axios"
import SignupForm from "../components/signup_form"
import { Redirect } from "react-router"
import BaseUrl from "../config"
import wallpaper from "../imgs/city-wallpaper-18.jpg"

class Signup extends Component {
	state = {
		first_name: "",
		sur_name: "",
		username: "",
		password: "",
		email: "",
		redirect: false,
		alert_type: "primary",
		visible: false,
		message: ""
	}

	/* This will handle getting input from the form.
	* @param event => Event fired when the input is changed in the form.
	********************************************************************/
	handle_input = (event) => {
		const name = event.target.name
		const value = event.target.value
		this.setState({ [name]: value })
	}

	/* This will handle creating the account for the user.
	* @param e => Event, the event fired when the button is clicked.
	* *******************************************************************/
	create_account = (e) => {
		e.preventDefault()

		var params = new URLSearchParams() // Using the x-www-form-urlencoded.
		params.append("first_name", this.state.first_name)
		params.append("sur_name", this.state.sur_name)
		params.append("username", this.state.username)
		params.append("password", this.state.password)
		params.append("email", this.state.email)

		if (this.state.username === "" || this.state.password === "" || this.state.first_name === "" || this.state.sur_name === "") {
			// Update the state to show the error.
			this.setState({
				visible: true,
				message: "Please provide all the required fields.",
				alert_type: "danger"
			})
			return
		}

		axios.post(BaseUrl + "auth/register", params).then(function (response) {
			let data = response.data
			if (data.success) {
				this.setState({
					visible: true,
					alert_type: "primary",
					message: data.msg,
					redirect: true
				})
			} else {
				this.setState({
					visible: true,
					message: data.msg,
					alert_type: "danger"
				})
			}
		}.bind(this))
	}

	/* Dismiss the model for alert from the interface.
	* *************************************************/
	onDismiss = () => {
		this.setState({ visible: false })
	}

	/* This will handle navigating the user to the login page.
	* @param e => Event, the event fired when the button is clicked.
	* *******************************************************************/
	login = (e) => {
		e.preventDefault()

		this.setState({
			redirect: true
		})
	}

	componentDidMount() {
		// Set the background image.
		document.body.style.backgroundImage = `url(${wallpaper}`
	}

	componentWillUnmount() {
		document.body.style.backgroundImage = "";
	}

	render() {
		const { redirect } = this.state

		if (redirect) {
			return (<Redirect to="/" />)
		}

		return (
			<SignupForm
				{...this.state}
				onInput={this.handle_input}
				onSubmit={this.create_account}
				onLogin={this.login}
				onDismissModal={this.onDismiss}
			/>
		)
	}

}

export default Signup
