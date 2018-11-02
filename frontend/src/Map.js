import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from 'react';


class Map extends Component {

    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}>
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(Map));