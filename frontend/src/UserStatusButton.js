import React, { Component } from 'react';
import red from './red-circle-64.png';
import green from './green-circle-64.png';
import yellow from './yellow-circle-64.png';

class UserStatusButton extends Component {

    render() {
        return(
            <div>
            {this.props.currentUser.status === 0 ? (
                <img src={green} alt="no emergency" />
            ) : null }
            {this.props.currentUser.status === 1 ? (
                <img src={yellow} alt="mid emergency" />
            ) : null }
            {this.props.currentUser.status === 2 ? (
                <img src={red} alt="high emergency" />
            ) : null }
            </div>
        )
    }

}

export default UserStatusButton;