import React, { Component } from 'react';

class UserTypeButton extends Component {

    submitAdminRequest = () => {
        console.log('Request Submitted')
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.submitAdminRequest}>Request Admin Status</button>
            </div>
        )
    }

}

export default UserTypeButton;