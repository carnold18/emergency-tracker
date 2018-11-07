import React, { Component } from 'react';
import EditUserForm from './EditUserForm';

class UserInformation extends Component {

    state = {
        editUser: false
    }

    changeEditState = () => {
        console.log("hey")
        this.setState({
            editUser: !this.state.editUser
        })
    }

    render() {
        return(
            <div className="userinformation">
                {/* <h2>Welcome, {this.props.currentUser.first_name}</h2> */}
                <h3>Your current status is: {this.props.currentUser.status}</h3>
                <div>
                    <p>{this.props.currentUser.address_line_1}</p>
                    <p>{this.props.currentUser.address_line_2}</p>
                    <p>{this.props.currentUser.city}, {this.props.currentUser.state} {this.props.currentUser.zip_code}</p>
                    <p>{this.props.currentUser.phone_number}</p>
                </div>
                <button onClick={this.changeEditState}>Edit?</button>
                { this.state.editUser ? 
                    ( <EditUserForm currentUser={this.props.currentUser} /> )
                    : null
                }
            </div>
        )
    }
}

export default UserInformation;