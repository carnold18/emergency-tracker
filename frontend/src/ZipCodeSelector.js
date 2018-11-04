import React, { Component } from 'react';
import Select from 'react-select';

class ZipCodeSelector extends Component {

    state = {
        selectedZones: []
    }

    render() {

        this.props.allZones.map(zone => (
            value: ${zone.zip_code}, label: 'Chocolate'
        ))

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]

        return (
        <div>
            <Select options={options} onChange={this.props.getZones()} addZone={this.addZone}/>
        </div>
        )
    }
}

export default ZipCodeSelector;