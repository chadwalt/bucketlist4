import React from "react"

const LoginForm = (props) => (
	<div className="container">
		<div className="row">
			<div className="col-md-4 col-md-offset-4">
				<div className="login-panel panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Sign In</h3>
					</div>
					<div className="panel-body">
						<form role="form">
							<fieldset>
								<div className="form-group">
									<input className="form-control" placeholder="Username" onChange={props.onInput} name="username" type="text" autoFocus />
								</div>
								<div className="form-group">
									<input className="form-control" placeholder="Password" onChange={props.onInput} name="password" type="password" />
								</div>
								<a href="index.html" className="btn btn-lg btn-primary btn-block" onClick={props.onSubmit} >Login</a>
								<a href="index.html" className="btn btn-lg btn-primary btn-block" onClick={props.onSignup}>Create Account</a>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default LoginForm