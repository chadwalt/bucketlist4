import React, {Component} from 'react';
import './login.css'

class Signup extends Component{
  render(){
    return(
      <div>
        <button id="findpass">Bucket List App</button>
        <div className="form signupForm">
          <form action="/create_account" method="POST">
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="text" className="input" name="first_name" id="first_name" placeholder="First Name" />
            </div>
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="text" className="input" id="sur_name" name="sur_name" placeholder="SurName" />
            </div>
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="text" className="input"name="username" id="username" placeholder="Username" />
            </div>
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="password" className="input" name="password" id="password" placeholder="Password" />
            </div>
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="email" className="input" name="email" id="email" placeholder="Email" />
            </div>
            <button className="submit" type="submit" id="submit">Create Account</button>
            <br/>
            <button className="submit" id="loginBtn">Already have an Account!</button>
        </form>
       </div>
      </div>
    );
  };
}

export default Signup;
