import React, { Component } from 'react';
import Logout from './Logout';

class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <h2>MobilEyes Houston</h2>
                <h2>Welcome, {this.props.currentUser.first_name}</h2>
                <Logout {...this.props} logOut={this.props.logOut} />
                {this.props.currentUser ?
                    (<button>Admin Stats</button>) : (null)
                }
                
            </div>
        )
    }
}

export default NavBar;