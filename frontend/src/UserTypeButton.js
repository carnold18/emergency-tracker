import React, { Component } from 'react';

class UserTypeButton extends Component {

render() {
    return (
        <div>
            <button className="button" onClick={this.props.submitAdminRequest()}>Request Admin Status</button>
        </div>
    )
}

}

export default UserTypeButton;