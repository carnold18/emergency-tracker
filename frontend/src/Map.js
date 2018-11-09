import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from 'react';

class Map extends Component {

    render() {
        // console.log(this.props.zoneUsers.flat())
        return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: 29.7604, lng: -95.3698 }}>
                {
                    this.props.zoneUsers.flat().map(user => {
                       return <Marker position={{ lat: user.lat, lng: user.lng }} />
                    })
                }
                {/* <Marker position={{ lat: 29.7604, lng: -95.3698 }} /> */}
            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(Map));