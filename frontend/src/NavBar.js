import React, { Component } from 'react';
import Logout from './Logout';

class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <h2>Welcome, {this.props.currentUser.first_name}.</h2>
                <h2>MobilEyes -> Houston</h2>
                <Logout logOut={this.props.logOut} />
            </div>
        )
    }
}

export default NavBar;