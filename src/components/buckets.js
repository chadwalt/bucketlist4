/*
* This page will hold the bucketlists.
* *******************************************/

import React from "react"
import Pagination from "./pagination"
import { Alert } from 'reactstrap';

const table_buckets = (props) => (
	props.buckets.map((value, index) => {
		let url = "bucketitems/" + value.id
		return (
			<tr key={value.id}>
				<td>{index + 1}</td>
				<td><a href={url} >{value.name}</a></td>
				<td><button type="button" onClick={() => props.onEdit(value.name, value.id)} data-toggle="modal" data-target={props.modelId} className="btn btn-primary">Edit</button></td>
				<td><button type="button" onClick={() => props.onOpenDelete(value.name, value.id)} className="btn btn-danger" data-toggle="modal" data-target="#myConfirmModal">Delete</button></td>
			</tr>
		)
	})
)

const table_items = (props) => (
	props.buckets.map((value, index) => {
		return (
			<tr key={value.id}>
				<td>{index + 1}</td>
				<td>{value.name}</td>
				<td>{value.description}</td>
				<td><button type="button" onClick={() => props.onEdit(value.name, value.id, value.description, value.buckect_id)} data-toggle="modal" data-target={props.modelId} className="btn btn-primary">Edit</button></td>
				<td><button type="button" onClick={() => props.onOpenDelete(value.name, value.id, value.buckect_id)} className="btn btn-danger" data-toggle="modal" data-target="#myConfirmModal">Delete</button></td>
			</tr>
		)
	})
)



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
									<input type="text" className="form-control" placeholder="Search..." onChange={props.onSearch} />
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
							<h1 className="page-header" style={{ fontSize: 32 }}>
								Bucket list
								<button style={{ marginLeft: 100 }} type="button" onClick={props.onAddBucket} id="add_bucket" data-toggle="modal" data-target={props.modelId} className="btn btn-primary">
									<i className="fa fa-edit"></i> Add
								</button>
							</h1>
							<Alert color={props.alert_type} isOpen={props.visible} toggle={props.dismissAlert}>
								{props.message}
							</Alert>
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
														{
															props.displayTable === "buckets" ? table_buckets(props) : table_items(props)
														}

													</tbody>
												</table>
											</div>
										</div>
									</div>

									<Pagination paginate={props.pagination} onMovePage={props.onMovePage}/>

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
