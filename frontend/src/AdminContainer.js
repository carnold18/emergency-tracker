import React, { Component } from 'react';
import Map from './Map';
import ZipCodeSelector from './ZipCodeSelector';

class AdminContainer extends Component {
    render() {
        return (
            <div>
                <Map googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
                <ZipCodeSelector />
            </div>
        )
    }
}

export default AdminContainer;