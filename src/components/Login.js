/* This is going to render the login page.
* *****************************************/

import React, { Component } from 'react';
import './login.css'; // Import the login css script.


class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.create_account = this.create_account.bind(this);
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
              <input type="text" className="input" name="username" id="username" placeholder="Username" />
            </div>

            <div className="topbar">
             <div className="spanColor"></div>
             <input type="password" className="input" id="password" placeholder="Password" name="password"/>
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
  }
}

export default Login;
