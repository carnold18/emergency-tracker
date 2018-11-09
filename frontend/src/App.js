import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import UserContainer from './UserContainer';
import AdminContainer from './AdminContainer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './Signup';

class App extends Component {

  state = {
    currentUser: {},
    isLoggedIn: false,
    allZones: [],
    isLoaded: false,
    email: "",
    password: "",
    loginError: "",
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
      // .then(console.log)
      .then(zones => {
          this.setState({
            allZones: zones,
            isLoaded: true
          })
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
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
        <Router>
        <div className="App">
            <Switch>
              <Route path="/login" render={() =>  
                <LoginForm logIn={this.logIn} handleChange={this.handleChange} />
              }/>
              <Route path="/signup" render={() =>  
                <Signup signUp={this.signUp} handleChange={this.handleChange} />
              }/>
              <Route path="/user" render={() =>  
                <UserContainer logOut={this.logOut} currentUser={this.state.currentUser} changeStatus0={this.changeStatus0} changeStatus1={this.changeStatus1} changeStatus2={this.changeStatus2}/>
              }/>
              <Route path="/admin" render={() =>  
                <AdminContainer logOut={this.logOut} allZones={this.state.allZones} currentUser={this.state.currentUser}/> 
              }/>
              <Route path="/" render={ () => {
                if(localStorage.token) {
                  switch(this.state.currentUser.user_type) {
                    case 0: 
                      return <Redirect to={{pathname:'/user'}} />
                    // break;
                    case 1:
                      return <Redirect to={{pathname:'/admin'}} />
                    // break;
                    default:
                      return null;
                  }
                } else {
                  return <Redirect to={{pathname:'/login'}} />
                }
              }} />
            </Switch>
        </div>
        </Router>
      )
  }
}

export default App;
