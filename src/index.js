import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./containers/Login"
import Signup from "./containers/Signup"
import Dashboard from "./containers/Dashboard"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render((
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login}/>
			<Route path="/signup" component={Signup}/>		
			<Route path="/dashboard" component={Dashboard}/>			
		</Switch>
	</BrowserRouter>), document.getElementById("root"))
registerServiceWorker()
