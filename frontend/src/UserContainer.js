import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import UserTypeButton from './UserTypeButton';
import ZoneMessages from './ZoneMessages';
import UserInformation from './UserInformation';
import NavBar from './NavBar';
import Header from './Header';

class UserContainer extends Component {

    render() {
        return(
            this.props.currentUser ? (
            <div className="user">
                <NavBar {...this.props} currentUser={this.props.currentUser} logOut={this.props.logOut} />
                <Header />
                <div>
                    <Dropdown changeStatus0={this.props.changeStatus0} changeStatus1={this.props.changeStatus1} changeStatus2={this.props.changeStatus2} />
                    <UserInformation currentUser={this.props.currentUser} />
                </div>
                <ZoneMessages currentUser={this.props.currentUser} />
                <UserTypeButton currentUser={this.props.currentUser} />
            </div>
            ) : (null)
        );
    }
}

export default UserContainer;