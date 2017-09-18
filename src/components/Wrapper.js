import React, { Component } from "react"

const Wrapper = ({ children }) => (
	<div id="wrapper">
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

		<div className="row">
			<div className="col-md-2">
				<div>
					<nav className="navigation" >
						<div className="navbar-default sidebar" role="navigation">
							<div>
								<div className="sidebar-nav navbar-collapse">
									<ul className="nav" id="side-menu">
										<li className="sidebar-search">
											<div className="input-group custom-search-form">
												<input type="text" className="form-control" placeholder="Search..." />
												<span className="input-group-btn">
													<button className="btn btn-default" type="button">
														<i className="fa fa-search"></i>
													</button>
												</span>
											</div>
										</li>
										<li>
											<a href="/dashboard"><i className="fa fa-dashboard"></i> Dashboard</a>
										</li>
										<li>
										</li>
										<li>
											<a href="/logout"><i className="fa fa-lock"></i> Logout</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</nav>
				</div>



				<div>
					{children}
				</div>


			</div>
		</div>
	</div>
)

