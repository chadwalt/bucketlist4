/* This is going to render the login page.
* *****************************************/

import React, { Component } from 'react';
import axios from 'axios';
import './login.css'; // Import the login css script.
import { Link } from 'react-router-dom';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      showSignup: false
    }
    this.create_account = this.create_account.bind(this);
    this.handle_input = this.handle_input.bind(this);
    this.login = this.login.bind(this);
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
            <button className="submit" name="submit" onClick={this.login} id="submit">Login</button>
            <br/>
            <div>
            <button className="submit" onClick={this.create_account} id="submit">Create Account</button>

            </div>
        </form>
       </div>
      </div>
    );
  };

  /* This will handle loggin the user.
  * @param e => Event, the event fired when the button is clicked.
  * *******************************************************************/
  login (e){
    e.preventDefault();

    var params = new URLSearchParams(); // Using the x-www-form-urlencoded.
    params.append('username', this.state.username);
    params.append('password', this.state.password);

    if (this.state.username === '' || this.state.password === ''){
      alert('Please provide all fields.');
      return;
    }

    axios.post('https://mybucketlist-api.herokuapp.com/auth/login', params).then(function(response){
      console.log(response.data);
      let data = response.data;
      if (data.success){

      } else {
        alert(data.message);
      }
    });
  }
  /* This will handle navigating the user to the signup page.
  * @param e => Event, the event fired when the button is clicked.
  * *******************************************************************/
  create_account (e){
    e.preventDefault();
    window.location.href = '/signup'

  }
}

export default Login;
