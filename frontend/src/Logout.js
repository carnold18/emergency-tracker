import React, { Component } from 'react';
import './App.css';

class Logout extends Component {

    render() {
        return(
            <button onClick={event => this.props.logOut()}>Logout</button>
        )
    }
}

export default Logout;