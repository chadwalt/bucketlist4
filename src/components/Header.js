import React, { Component } from "react"
import "./static/main_app/vendor/bootstrap/css/bootstrap.min.css"
import "./static/main_app/vendor/metisMenu/metisMenu.min.css"
import "./static/main_app/dist/css/sb-admin-2.css"
import "./static/main_app/vendor/font-awesome/css/font-awesome.min.css"

import "./static/main_app/vendor/bootstrap/js/bootstrap.min.js"
import "./static/main_app/vendor/metisMenu/metisMenu.min.js"
import "./static/main_app/dist/js/sb-admin-2.js"



class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		<div className="row">
			<nav className="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="index.html">Bucket List App</a>
				</div>

				<ul className="nav navbar-top-links navbar-right">
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown" href="#">
							<i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
						</a>
						<ul className="dropdown-menu dropdown-user">
							<li className="divider"></li>
							<li><a href="/logout"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
			
	}
}

export default Header
