import React, { Component } from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';

class App extends Component {

  state = {
    loggedIn: false
  }

  componentDidMount() {
    //
    this.state.loggedIn ?
      this.props.history.push('/') :
      this.props.history.push('/login')
  }

  login = () => {
    this.setState({ loggedIn: true });
    this.props.history.push('/');
  }

  logout = () => {
    this.setState({ loggedIn: false })
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">
        {
          this.state.loggedIn ?
            <Route
              path="/"
              render={(props) => <Home {...props} logout={this.logout} />}
            />
            :
            <Route
              path="/login"
              render={(props) => <Login {...props} login={this.login} />}
            />
        }
      </div>
    );
  }
}

export default withRouter(App);
