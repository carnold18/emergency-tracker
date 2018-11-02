import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';

class UserContainer extends Component {

    render() {
        return(
            <div className="user">
                <Dropdown />
                <p>This is where Zone Alerts will be posted from the Admin Account.</p>
            </div>
        )
    }
}

export default UserContainer;