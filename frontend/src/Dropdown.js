import React, { Component } from 'react';
import './App.css';

class Dropdown extends Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        }

        this.showDropdownMenu = this.showDropdownMenu.bind(this)
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this)

    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu)
        })
    }

    hideDropdownMenu(event) {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu)
        })
    }

    render() {
        return (
            <div className='dropdown' style={{background:"red",width:"200px"}} >
                <div className="dropdown-button" onClick={this.showDropdownMenu}>Emergency Status</div>
                {this.state.displayMenu ? (
                    <ul>
                        <li className="low" onClick={this.props.changeStatus0}>Low</li>
                        <li className="medium" onClick={this.props.changeStatus1}>Potential Danger</li>
                        <li className="high" onClick={this.props.changeStatus2}>Extreme Danger</li>
                    </ul>
                ) : null
                }
            </div>
        );
    }
}

export default Dropdown;