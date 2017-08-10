/* This is going to render the login page.
* *****************************************/

import React, { Component } from 'react';
import './login.css'; // Import the login css script.
import { link } from 'react-dom';
import Signup from './Signup'

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.create_account = this.create_account.bind(this);
    this.handle_input = this.handle_input.bind(this);
  }

  handle_input(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value})
  }

  render(){
    return(
      <div>
        <button id="findpass">Bucket List App</button>
        <div className="form">
          <form action="login"method="POST">
            <div className="forceColor"></div>
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="text" className="input" onChange={this.handle_input} name="username" id="username" placeholder="Username" />
            </div>

            <div className="topbar">
             <div className="spanColor"></div>
             <input type="password" className="input" onChange={this.handle_input} id="password" placeholder="Password" name="password"/>
           </div>
            <button className="submit" name="submit" type="submit" id="submit">Login</button>
            <br/>
            <button className="submit" id="signupAccount" onClick={this.create_account}>Create Account</button>
        </form>
       </div>
      </div>
    );
  };

  create_account (e){
    e.preventDefault();
    console.log('Button working');
    console.log(this.state.username, this.state.password);
  }
}

export default Login;
