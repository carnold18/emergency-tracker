import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import UserTypeButton from './UserTypeButton';
import ZoneMessages from './ZoneMessages';
import UserInformation from './UserInformation';
import NavBar from './NavBar';

class UserContainer extends Component {

    render() {
        return(
            <div className="user">
                <NavBar currentUser={this.props.currentUser} logOut={this.props.logOut} />
                <Dropdown changeStatus0={this.props.changeStatus0} changeStatus1={this.props.changeStatus1} changeStatus2={this.props.changeStatus2} />
                <ZoneMessages currentUser={this.props.currentUser} />
                <UserInformation currentUser={this.props.currentUser} />
                <UserTypeButton />
            </div>
        );
    }
}

export default UserContainer;