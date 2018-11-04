import React, { Component } from 'react';
import Select from 'react-select';

class ZipCodeSelector extends Component {

    render() {

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]

        return (
        <div>
            <Select options={options} onChange={this.props.getZones()}/>
        </div>
        )
    }
}

export default ZipCodeSelector;