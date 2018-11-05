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
        })
        console.log(`Zone selected:`, selectedZone);
    }



    render() {
        const options = []
        this.props.allZones.map(zone => (
            options.push({ value: `${zone.zip_code}`, label: `${zone.zip_code}` })
        ))
        console.log(options) 

        return (
            <Select value={this.state.selectedZone} options={options} onChange={this.handleChange} />
        )
    }
}

export default ZipCodeSelector;