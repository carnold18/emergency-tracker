import React, { Component } from 'react';
import Select from 'react-select';

class ZipCodeSelector extends Component {

    state = {
        selectedZone: null,
        selectedZones: []
    }

    handleChange = (selectedZone) => {
        this.setState({ 
            selectedZone: selectedZone,
            selectedZones: [selectedZone, ...this.state.selectedZones]
        });
        console.log(`Option selected:`, selectedZone);
    }

    render() {
        const zipCodes = []
        this.props.allZones.map(zone => {
           return zipCodes.push(`{ value: '${zone.zip_code}', label: '${zone.zip_code}' }`)
        })
            // .then(console.log(zipCodes))

        // const options = [
        //     { value: 'chocolate', label: 'Chocolate' },
        //     { value: 'strawberry', label: 'Strawberry' },
        //     { value: 'vanilla', label: 'Vanilla' }
        // ]

        return (
        <div>
            <Select value={this.state.selectedZone} zipCodes={zipCodes} onChange={this.handleChange} />
        </div>
        )
    }
}

export default ZipCodeSelector;