/* This is going to render the login page.
* *****************************************/

import React, { Component } from 'react';


class Login extends Component{
  render(
    return(
      <button>Bucket List App</button>
      <div className="form">
      <form action="/login"method="POST"                                                                                                                                                                     git >
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
        </form>
        <br>
        <button className="submit" id="signupAccount">Create Account</button>

      </div>
    </form>
    );
  );
}

export default Login;
