import React from "react"
import "./static/login.css" // Load the css

const SignupForm = (props) => (
	<div>
		<button id="findpass">Bucket List App</button>
		<div className="form signupForm">
			<form action="/create_account" method="POST">
				<div className="forceColor"></div>
				<div className="topbar">
					<div className="spanColor"></div>
					<input type="text" className="input" name="first_name" onChange={props.onInput} id="first_name" placeholder="First Name" />
				</div>
				<div className="topbar">
					<div className="spanColor"></div>
					<input type="text" className="input" id="sur_name" onChange={props.onInput} name="sur_name" placeholder="SurName" />
				</div>
				<div className="topbar">
					<div className="spanColor"></div>
					<input type="text" className="input" name="username" onChange={props.onInput} id="username" placeholder="Username" />
				</div>
				<div className="topbar">
					<div className="spanColor"></div>
					<input type="password" className="input" name="password" onChange={props.onInput} id="password" placeholder="Password" />
				</div>
				<div className="topbar">
					<div className="spanColor"></div>
					<input type="email" className="input" name="email" id="email" onChange={props.onInput} placeholder="Email" />
				</div>
				<button className="submit" type="submit" onClick={props.onSubmit} id="submit">Create Account</button>
				<br />
				<button className="submit" onClick={props.onLogin} id="loginBtn">Already have an Account!</button>
			</form>
		</div>
	</div>
)

export default SignupForm