import React, { Component } from 'react';
import './App.css';

class Header extends Component {

    render() {
        return(
            <div className="header">
                <h1>MobileEyes</h1>
                <h2>Houston</h2>
                {/* <button onClick={event => this.props.logOut()}>Logout</button> */}
            </div>
        )
    }
}

export default Header;