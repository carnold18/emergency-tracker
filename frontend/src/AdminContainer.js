import React, { Component } from 'react';
import Map from './Map';
// import ZipCodeSelector from './ZipCodeSelector';
import ZipCodeSelectorNew from './ZipCodeSelectorNew';
import NavBar from './NavBar';
import MessagePost from './MessagePost';

class AdminContainer extends Component {

    state = {
        zoneUsers: [],
        selectedZone: null,
        selectedZones: [],
        userZones: []
    }

    handleChange = async (selectedZone) => {
        // debugger
        await this.props.allZones.forEach( zone => 
            ( zone.zip_code === selectedZone.innerText ? 
                this.setState({
                    userZones: [zone, ...this.state.userZones],
                    selectedZone: selectedZone.innerText,
                    selectedZones: [selectedZone.innerText, ...this.state.selectedZones]
                }) : null ) )
        console.log(`Zone selected:`, selectedZone.innerText)
        console.log(this.state.userZones)

         await this.createUserZone()

         await this.getZoneUsers()
        // this.props.getZoneUsers(selectedZone)
    }

    //use a filter to filter out all zones that do not match the id of the selected zone, when un-rendering.

    createUserZone = () => {
        // debugger
        // console.log(this.props.currentUser.id)
        // console.log(this.state.userZones[0].id)
        fetch("http://localhost:3000/user_zones", {
                method: "POST",
                body: JSON.stringify({
                    user_id: this.props.currentUser.id,
                    zone_id: this.state.userZones[0].id
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.token}`
                  }
            })
            // console.log('post sent to backend to create UserZone')
    }

    getZoneUsers = () => {

        const id = parseInt(this.state.selectedZone.split("").slice(2).join(""))
        // console.log(id)
        // debugger
        fetch("http://localhost:3000/zoneUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
          id: id
        })
      })
      .then(response => response.json())
    //   .then(console.log)
      .then(zones => {
          this.setState({
            zoneUsers: [zones, ...this.state.zoneUsers]
          })
      })
    }

    render() {

        // console.log(this.props.currentUser.id)
        // console.log(this.props.currentUser.user_type)
        // console.log(this.props.currentUser.zone_id)

        return (
            
            <div>
                { this.props.currentUser.user_type > 0 ? (
                    <div>
                        <NavBar currentUser={this.props.currentUser} logOut={this.props.logOut} />
                        {/* <ZipCodeSelector allZones={this.props.allZones} currentUser={this.props.currentUser} getZoneUsers={this.getZoneUsers} handleChange={this.handleChange} /> */}
                        <ZipCodeSelectorNew allZones={this.props.allZones} currentUser={this.props.currentUser} handleChange={this.handleChange} />
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