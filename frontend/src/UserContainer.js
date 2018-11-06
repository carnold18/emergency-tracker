import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import UserTypeButton from './UserTypeButton';
import ZoneMessages from './ZoneMessages';
import UserInformation from './UserInformation';

class UserContainer extends Component {

    render() {
        return(
            <div className="user">
                <UserTypeButton />
                <UserInformation currentUser={this.props.currentUser}/>
                <Dropdown changeStatus0={this.props.changeStatus0} changeStatus1={this.props.changeStatus1} changeStatus2={this.props.changeStatus2} />
                <ZoneMessages />
            </div>
        );
    }
}

export default UserContainer;