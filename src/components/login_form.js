import React from "react"
import "./static/login.css" // Load the css

const LoginForm = (props) => (
	<div>
		<button id="findpass">Bucket List App</button>
		<div className="form">
			<form action="login" method="POST">
				<div className="forceColor"></div>
				<div className="topbar">
					<div className="spanColor"></div>
					<input type="text" className="input" onChange={props.onInput} name="username" id="username" placeholder="Username" />
				</div>

				<div className="topbar">
					<div className="spanColor"></div>
					<input type="password" className="input" onChange={props.onInput} id="password" placeholder="Password" name="password" />
				</div>
				<button className="submit" name="submit" onClick={props.onSubmit} id="submit">Login</button>
				<br />
				<div>
					<button className="submit" onClick={props.onSignup} id="submit">Create Account</button>

				</div>
			</form>
		</div>
	</div>
)

export default LoginForm