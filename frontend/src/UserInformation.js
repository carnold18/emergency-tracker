import React, { Component } from 'react';
import EditUserForm from './EditUserForm';
import UserTypeButton from './UserTypeButton';
import UserStatusButton from './UserStatusButton';

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
                <div>
                    {/* <h2>Welcome, {this.props.currentUser.first_name}</h2> */}
                    <div>
                        <UserStatusButton currentUser={this.props.currentUser} />
                    </div>
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
            </div>
        )
    }
}

export default UserInformation;