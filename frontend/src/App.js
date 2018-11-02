import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import LoginForm from './LoginForm';


class App extends Component {

  state = {
    email: "",
    password: "",
    currentUser: {},
    isLoggedIn: false
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

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
            currentUser: data.user,
            isLoggedIn: !this.state.isLoggedIn
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
      currentUser: {},
      isLoggedIn: !this.state.isLoggedIn
    })
    localStorage.token = "";
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm logIn={this.logIn} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
