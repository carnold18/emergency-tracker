import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from 'react';

class Map extends Component {

    render() {
        // console.log(this.props.zoneUsers.flat())
        const green = "http://maps.google.com/mapfiles/ms/icons/green.png"
        const yellow = "http://maps.google.com/mapfiles/ms/icons/yellow.png"
        const red = "http://maps.google.com/mapfiles/ms/icons/red.png"

    // can use .reduce to calculate the average lat and lng of of the user pins and the set this to 
    // the default center lat and lng below

        return (

            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: 29.7604, lng: -95.3698 }}>
                {  this.props.zoneUsers.flat().map(user => {
                        switch(user.status) {
                            case 0: 
                            return <Marker position={{ lat: user.lat, lng: user.lng }} 
                                                    opacity={0.7} 
                                                    icon={{ url: green }} /> 
                            break;
                            case 1: 
                            return <Marker position={{ lat: user.lat, lng: user.lng }} 
                                                    opacity={0.7} 
                                                    icon={{ url: yellow }} /> 
                            break;
                            case 2: 
                            return <Marker position={{ lat: user.lat, lng: user.lng }} 
                                                    opacity={0.7} 
                                                    icon={{ url: red }} /> 
                            break;
                            default: 
                            return null
                            break;
                        }
                    })
                } 
            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(Map));