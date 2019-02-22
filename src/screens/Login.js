import React, { Component } from 'react';
import '../App.css';

class Login extends Component {

  state = {}

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });

  }

  handleSubmit = (event) => {
    this.props.login();
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <div className='login-form'>

          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={this.handleSubmit}>
            <label>
              Username
            <input name="username" type="text" onChange={this.handleInputChange} />
            </label>
            <label>
              Password
            <input name="password" type="password" onChange={this.handleInputChange} />
            </label>
            <button type="submit" >Login</button>
          </form>

        </div>

      </div>
    );
  }
}

export default Login;
