import React from "react"

const SignupForm = (props) => (
	<div className="container">
		<div className="row">
			<div className="col-md-4 col-md-offset-4">
				<div className="login-panel panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Sign Up</h3>
					</div>
					<div className="panel-body">
						<form role="form">
							<fieldset>
								<div className="form-group">
									<input className="form-control" placeholder="First Name" onChange={props.onInput} name="first_name" type="text" autoFocus />
								</div>
								<div className="form-group">
									<input className="form-control" placeholder="Surname" onChange={props.onInput} name="sur_name" type="text"  />
								</div>
								<div className="form-group">
									<input className="form-control" placeholder="Username" onChange={props.onInput} name="username" type="text"  />
								</div>
								<div className="form-group">
									<input className="form-control" placeholder="Password" onChange={props.onInput} name="password" type="password"  />
								</div>
								<div className="form-group">
									<input className="form-control" placeholder="E-mail" onChange={props.onInput} name="email" type="email"  />
								</div>
								<a href="index.html" className="btn btn-lg btn-primary btn-block"  onClick={props.onSubmit} >Create Account</a>
								<a href="index.html" className="btn btn-lg btn-primary btn-block" onClick={props.onLogin}>Already have an Account!</a>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default SignupForm