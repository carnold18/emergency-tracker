import React, { Component } from 'react';
import Logout from './Logout';

class NavBar extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Logout logOut={this.props.logOut} /></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;