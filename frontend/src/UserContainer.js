import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import UserTypeButton from './UserTypeButton';

class UserContainer extends Component {

    

    render() {
        return(
            <div className="user">
                <UserTypeButton />
                <Dropdown changeStatus0={this.props.changeStatus0} changeStatus1={this.props.changeStatus1} changeStatus2={this.props.changeStatus2} />
                <p>This is where Zone Alerts will be posted from the Admin Account.</p>
            </div>
        );
    }
}

export default UserContainer;