import React, { Component } from 'react';
import Map from './Map';
import ZipCodeSelector from './ZipCodeSelector';
import NavBar from './NavBar';
import MessagePost from './MessagePost';

class AdminContainer extends Component {

    state = {
        zoneUsers: []
    }

    getZoneUsers = () => {
        fetch("http://localhost:3000/zoneUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
          id: this.props.currentUser.zone_id
        })
      })
      .then(response => response.json())
      .then(console.log)
      .then(zones => {
          this.setState({
            zoneUsers: zones
          })
      })
    }

    render() {

        console.log(this.props.currentUser.id)
        console.log(this.props.currentUser.user_type)
        console.log(this.props.currentUser.zone_id)

        return (
            
            <div>
                { this.props.currentUser.user_type > 0 ? (
                    <div onPointerOver={() => this.getZoneUsers()}>
                        <NavBar currentUser={this.props.currentUser} logOut={this.props.logOut} />
                        <ZipCodeSelector allZones={this.props.allZones} currentUser={this.props.currentUser}/>
                        <Map zoneUsers={this.state.zoneUsers} googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        />
                        <MessagePost currentUser={this.props.currentUser} />
                    </div>
                ) : null}
            </div>
        )
    }
}

export default AdminContainer;