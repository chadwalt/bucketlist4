/* This is going to render the login page.
* *****************************************/

import React, { Component } from "react"
import axios from "axios"
import LoginForm from "../components/login_form"
import { Redirect } from "react-router"
import BaseUrl from "../config"
import PropTypes from "prop-types"
import wallpaper from "../imgs/city-wallpaper-18.jpg"


class Login extends Component {
	state = {
		username: "",
		password: "",
		redirect: "",
		visible: false,
		alert_type: "primary"
	}

	/* This will handle inpput provided by the user.
	* @param e => Event, the event fired when the text is changed is clicked.
	* ***********************************************************************/
	handle_input = (event) => {
		const name = event.target.name
		const value = event.target.value
		this.setState({ [name]: value })
	}


	/* This will handle loggin the user.
	* @param e => Event, the event fired when the button is clicked.
	* *******************************************************************/
	login = (e) => {
		e.preventDefault()

		var params = new URLSearchParams() // Using the x-www-form-urlencoded.
		params.append("username", this.state.username)
		params.append("password", this.state.password)

		if (this.state.username == "" || this.state.password == "") {
			this.setState({
				visible: true,
				message: "Please provide all the required fields.",
				alert_type: "danger"
			})

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
				this.setState({
					visible: true,
					message: data.message,
					alert_type: "danger"
				})
			}
		}.bind(this))
	}

	/* This will handle navigating the user to the signup page.
	* @param e => Event, the event fired when the button is clicked.
	* *******************************************************************/
	create_account = (e) => {
		e.preventDefault()

		this.setState({
			redirect: "signup"
		})
	}

	onDismiss = () => {
		this.setState({ visible: false })
	}

	componentDidMount(){
		document.body.style.backgroundImage = `url('${wallpaper}')`
	}

	componentWillMount(){
		document.body.style.backgroundImage = `url('${wallpaper}')`
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
				onDismissModal={this.onDismiss}
			/>
		)
	}

}

// Define prop types for the props.
Login.PropTypes = {
	color: PropTypes.string,
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
	onInput: PropTypes.func,
	onSubmit: PropTypes.func,
	onSignup: PropTypes.func,
}

export default Login
