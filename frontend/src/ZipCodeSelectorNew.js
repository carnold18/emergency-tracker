import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import './App.css';

export default class ZipCodeSelectorNew extends Component {
  // constructor() {
  //   super();
    
  //   this.state = {
  //     // showMenu: false,
  //     selectedValue: undefined,
  //     radioOptions: this.props.zipCodes
  //   }

  //   // this.showMenu = this.showMenu.bind(this);
  //   // this.closeMenu = this.closeMenu.bind(this);
  // }

  constructor(props) {
      super(props);
      this.state = {
          checkedItems: new Map(),
          checkedArray: []
      }
      this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));

    this.props.handleChecks(e);

  }

  render() {
    // console.log(this.state.checkedItems)
    return (
      <div>
        {
          this.props.zipCodes.map(item => (
            <label key={item.key}>
              {item.name}
              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
            </label>
          ))
        }
      </div>
    );
  }
}
