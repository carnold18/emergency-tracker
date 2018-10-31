import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    email: "",
    password: "",
    currentUser: {}
  }

  componentDidMount() {
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          this.setState({
            currentUser: data
          })
        }
    })
      // console.log(localStorage.token)
  }

  logIn = event => {
    event.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.token = data.token;
          this.setState({
            currentUser: data.user
          });
        } else {
          this.setState({
            loginError: data.error
          });
        }
      });
  };

  logOut = () => {
    // event.preventDefault();
    // debugger
    this.setState({
      email: "",
      password: "",
      currentUser: {}
    })

    localStorage.token = "";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
