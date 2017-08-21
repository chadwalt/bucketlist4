import React, {Component} from 'react';
import './login.css'
import axios from 'axios';

class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      sur_name: '',
      username: '',
      password: '',
    }
    this.create_account = this.create_account.bind(this);
    this.handle_input = this.handle_input.bind(this);
    this.login = this.login.bind(this);
  }

  /* This will handle getting input from the form.
  * @param event => Event fired when the input is changed in the form.
  ********************************************************************/
  handle_input(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value})
  }

  render(){
    return(
      <div>
        <button id="findpass">Bucket List App</button>
        <div className="form signupForm">
          <form action="/create_account" method="POST">
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="text" className="input" name="first_name" onChange={this.handle_input} id="first_name" placeholder="First Name" />
            </div>
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="text" className="input" id="sur_name" onChange={this.handle_input} name="sur_name" placeholder="SurName" />
            </div>
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="text" className="input"name="username" onChange={this.handle_input} id="username" placeholder="Username" />
            </div>
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="password" className="input" name="password" onChange={this.handle_input} id="password" placeholder="Password" />
            </div>
            <div className="topbar">
              <div className="spanColor"></div>
              <input type="email" className="input" name="email" id="email" placeholder="Email" />
            </div>
            <button className="submit" type="submit" onClick={this.create_account} id="submit">Create Account</button>
            <br/>
            <button className="submit" onClick={this.login} id="loginBtn">Already have an Account!</button>
        </form>
       </div>
      </div>
    );
  };

  /* This will handle creating the account for the user.
  * @param e => Event, the event fired when the button is clicked.
  * *******************************************************************/
  create_account (e){
    e.preventDefault();

    var params = new URLSearchParams(); // Using the x-www-form-urlencoded.
    params.append('first_name', this.state.first_name);
    params.append('sur_name', this.state.sur_name);
    params.append('username', this.state.username);
    params.append('password', this.state.password);

    if (this.state.username === '' || this.state.password === '' || this.state.first_name === '' || this.state.sur_name === '' ){
      alert('Please provide all fields.');
      return;
    }

    let obj = {
      first_name: this.state.first_name,
      sur_name: this.state.sur_name,
      username: this.state.username,
      password: this.state.password
    }

    console.log(obj);
    return;

    axios.post('https://mybucketlist-api.herokuapp.com/auth/login', params).then(function(response){
      console.log(response.data);
      let data = response.data;
      if (data.success){

      } else {
        alert(data.message);
      }
    });
  }

  /* This will handle navigating the user to the login page.
  * @param e => Event, the event fired when the button is clicked.
  * *******************************************************************/
  login(e){
    e.preventDefault();
    window.location.href = '/'
  }


}

export default Signup;
