import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from 'react';

class Map extends Component {
    
    createMarkers = () => {
        this.props.zoneUsers.map(zone => {
            return <p>{zone.lat}</p>
        })
    }

    render() {
        return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: 29.7604, lng: -95.3698 }}>
                <Marker position={{ lat: 29.7604, lng: -95.3698 }} 
                    
                />
            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(Map));