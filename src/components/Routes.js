/* This script is going to handle routing of components
* ******************************************************/

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Routes = () => {
  <Switch>
    <Route exact path='/' component={Login}/>
    <Route exact path='/Signup' component={Signup}/>
  </Switch>
}

export default Routes;
