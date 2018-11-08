import React, { Component } from 'react';

class ZipCodeSelectorNew extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {

    return (
      <div>
        <button onClick={this.showMenu}> Select Zip Codes </button>
        {
          this.state.showMenu ? (
              <div className="menu" ref={ (element) => { this.dropdownMenu = element } }>
                {
                    this.props.allZones.map(zone => (
                        <button onClick={(event) => this.props.handleChange(event.target)} zone_id={zone.id}>{zone.zip_code}</button>
                    ))
                }
              </div>
            ) : ( null )
        }
      </div>
    )
  }
}

export default ZipCodeSelectorNew;