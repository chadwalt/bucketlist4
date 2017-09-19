import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./containers/Login"
import Signup from "./containers/Signup"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render((
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login}/>
			<Route path="/signup" component={Signup}/>			
		</Switch>
	</BrowserRouter>), document.getElementById("root"))
registerServiceWorker()
