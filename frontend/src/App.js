import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import LoginForm from './LoginForm';
import UserContainer from './UserContainer';
import AdminContainer from './AdminContainer';

class App extends Component {

  state = {
    email: "",
    password: "",
    currentUser: {},
    isLoggedIn: false,
    allZones: []
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

    fetch("http://localhost:3000/zones", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(zones => {
          this.setState({
            allZones: zones
          })
      })

  }

  // getZones = (event) => {
  //   event.preventDefault();
  //   fetch("http://localhost:3000/zones", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.token}`
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(zones => {
  //         this.setState({
  //           allZones: zones
  //         })
  //     })
  // }

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
    this.setState({
      email: "",
      password: "",
      currentUser: {},
      isLoggedIn: !this.state.isLoggedIn
    })
    localStorage.token = "";
  }

  changeStatus0 = () => {
    // console.log(this.state.currentUser.id)
    fetch("http://localhost:3000/users/"+this.state.currentUser.id, {
      method: "PATCH",
      body: JSON.stringify({
        status: 0
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
  }

  changeStatus1 = () => {
    fetch("http://localhost:3000/users/"+this.state.currentUser.id, {
      method: "PATCH",
      body: JSON.stringify({
        status: 1
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
  }

  changeStatus2 = () => {
    fetch("http://localhost:3000/users/"+this.state.currentUser.id, {
      method: "PATCH",
      body: JSON.stringify({
        status: 2
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header logOut={this.logOut}/>
        <LoginForm logIn={this.logIn} handleChange={this.handleChange} />
        <UserContainer changeStatus0={this.changeStatus0} changeStatus1={this.changeStatus1} changeStatus2={this.changeStatus2}/>
        <AdminContainer allZones={this.state.allZones} />
      </div>
    );
  }
}

export default App;
