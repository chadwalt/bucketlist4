/*
* This page will hold the bucketlists.
* *******************************************/

import React from "react"

const Buckets = (props) => (
	<div id="wrapper">
		<div className="row">
			<nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
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
							<li><a href="/logout" onClick={props.onLogout}><i className="fa fa-sign-out fa-fw"></i> Logout</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
		<div className="row">
			<div className="col-md-2">

				<div className="navbar-default sidebar" role="navigation" style={{ marginTop: 0 }}>
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
								<a href="/logout" onClick={props.onLogout}><i className="fa fa-lock"></i> Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-md-12">
				<div id="page-wrapper">
					<div className="row">
						<div className="col-md-12">
							<h1 className="page-header">
								Bucket List
								<button style={{ marginLeft: 100 }} type="button" id="add_bucket" data-toggle="modal" data-target="#myModal" className="btn btn-primary">
									<i className="fa fa-edit"></i> Add
								</button>
							</h1>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">

							

							<div className="panel panel-default">
								<div className="panel-heading">
									<i className="fa fa-clock-o fa-fw"></i> Listing
								</div>
								<div className="panel-body">
									<div className="row">
										<div className="col-lg-12">
											<div className="table-responsive">
												<table className="table table-bordered table-hover table-striped">
													<thead>
														<tr>
															<th>#</th>
															<th>Title</th>
															<th colSpan="2">Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
)

export default Buckets
