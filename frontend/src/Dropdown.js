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
                        <li className="low">Low</li>
                        <li className="medium">Potential Danger</li>
                        <li className="high">Extreme Danger</li>
                    </ul>
                ) : null
                }
            </div>
        )
    }
}

export default Dropdown;