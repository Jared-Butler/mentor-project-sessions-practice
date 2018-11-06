import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <input 
          value={this.state.username}
          type="text" 
          placeholder="Username"
          onChange={(e) => {this.setState({username: e.target.value})}}/>
        <br/>
        <input 
          value={this.state.password}
          type="text" 
          placeholder="Password"
          onChange={(e) => {this.setState({password: e.target.value})}}/>
        <br/>
        <button>Login</button>
        <button>Logout</button>
        <div>
          <button>Only works if logged in</button>
        </div>
      </div>
    );
  }
}

export default App;
