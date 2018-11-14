import React, { Component } from 'react';
import Logout from './Logout';

class NavBar extends Component {

    render() {
        return (
            <header id="header">
				<a class="logo" href="index.html">Welcome, {this.props.currentUser.first_name}</a>
                <Logout {...this.props} logOut={this.props.logOut} />
                {this.props.currentUser ?
                    (<button>Admin Stats</button>) : (null)
                }
				<nav>
					<a href="#menu">Menu</a>
				</nav>
			</header>
        )
    }
}

export default NavBar;