import React, {Component} from "react"
import axios from "axios"
import SignupForm from "../components/signup_form"


class Signup extends Component{
	constructor(props){
		super(props)
		this.state = {
			first_name: "",
			sur_name: "",
			username: "",
			password: "",
			email: ""
		}
		this.create_account = this.create_account.bind(this)
		this.handle_input = this.handle_input.bind(this)
		this.login = this.login.bind(this)
	}

	/* This will handle getting input from the form.
	* @param event => Event fired when the input is changed in the form.
	********************************************************************/
	handle_input(event){
		const name = event.target.name
		const value = event.target.value
		this.setState({[name]: value})
	}

	render(){
		return(
			<SignupForm 
				{...this.props}
				onInput={this.handle_input}
				onSubmit={this.create_account}
				onLogin={this.login}
			/>
		)
	}

	/* This will handle creating the account for the user.
	* @param e => Event, the event fired when the button is clicked.
	* *******************************************************************/
	create_account (e){
		e.preventDefault()

		var params = new URLSearchParams() // Using the x-www-form-urlencoded.
		params.append("first_name", this.state.first_name)
		params.append("sur_name", this.state.sur_name)
		params.append("username", this.state.username)
		params.append("password", this.state.password)
		params.append("email", this.state.email)

		if (this.state.username === "" || this.state.password === "" || this.state.first_name === "" || this.state.sur_name === "" ){
			alert("Please provide all fields.")
			return
		}

		axios.post("https://mybucketlist-api.herokuapp.com/auth/register", params).then(function(response){
			let data = response.data
			if (data.success){
				window.location.href = "/"
			} else {
				alert(data.message)
			}
		})
	}

	/* This will handle navigating the user to the login page.
	* @param e => Event, the event fired when the button is clicked.
	* *******************************************************************/
	login(e){
		e.preventDefault()
		window.location.href = "/"
	}


}

export default Signup
