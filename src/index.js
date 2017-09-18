import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Bucketlist from "./components/Bucketlist"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render((
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login}/>
			<Route path="/signup" component={Signup}/>
			<Route path="/dashboard" component={Bucketlist}/>
		</Switch>
	</BrowserRouter>), document.getElementById("root"))
registerServiceWorker()
