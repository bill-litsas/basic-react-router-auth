import React, { Component } from 'react';
import '../App.css';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button onClick={() => this.props.logout()}>Logout</button>
      </div>
    );
  }
}

export default Home;
