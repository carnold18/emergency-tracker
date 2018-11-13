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
        userZones: [],
        zipCodes: [],
        zoneShow: false,
        checkedArray: [],
        newUserArrayList: 0
    }
    

    // handleChange = async (selectedZone) => {
    //     // debugger
    //     await this.props.allZones.forEach( zone => 
    //         ( zone.zip_code === selectedZone.innerText ? 
    //             this.setState({
    //                 userZones: [zone, ...this.state.userZones],
    //                 selectedZone: selectedZone.innerText,
    //                 selectedZones: [selectedZone.innerText, ...this.state.selectedZones]
    //             }) : null ) )
    //     // console.log(`Zone selected:`, selectedZone.innerText)
    //     // console.log(this.state.userZones)

    //      await this.createUserZone()

    //      await this.getZoneUsers()
    //     // this.props.getZoneUsers(selectedZone)
    // }

    handleChange = async (e) => {
        // debugger
        await this.props.allZones.forEach( zone => 
            ( zone.zip_code === e.target.name 
                // && this.state.selectedZones.includes(e.target.name) !== true
                ? 
                this.setState({
                    userZones: [zone, ...this.state.userZones],
                    selectedZone: e.target.name,
                    selectedZones: this.state.checkedArray
                }) : null ) )
        // console.log(`Zone selected:`, e.target.name)
        // console.log(this.state.userZones)

         await this.createUserZone()
            
         await this.getZoneUsers()
        // this.props.getZoneUsers(selectedZone)
    }

    // updateZoneUsers = () => {
    //     this.state.checkedArray.includes()
    // }

    //use a filter to filter out all zones that do not match the id of the selected zone, when un-rendering.

    createUserZone = () => {
        console.log(this.props.currentUser.id)
        console.log(this.state.userZones[0].id)
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
        const currentZones = this.state.userZones.map( zone => {
            return zone.id
        });
        const id = this.state.userZones[0].id;
        const currentUsers = this.state.zoneUsers.flat().map( user => {
            return user.id
        });
        const userList = this.state.zoneUsers.flat();

        console.log(`Current Zone List:`, currentZones)

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
                .then(users => {
                    // console.log(`Includes user?`, currentUsers.includes(users[0].id))
                    if (users.length > 0 && currentUsers.includes(users[0].id)) {
                        this.setState({
                            zoneUsers: userList.filter(userObj => !users.find(userObj2 => userObj.id === userObj2.id))
                        })
                    }
                    else {
                        this.setState({
                            zoneUsers: [users, ...this.state.zoneUsers]
                        })
                    }
                })
    }

    checkBoxDetails = async () => {
        // console.log(this.props.allZones)
        const zipCodes = await this.props.allZones.map( zone => {
             return { name:zone.zip_code, key: zone.zip_code, label: zone.zip_code }
         })
        
        await this.setState({
            zipCodes: zipCodes,
            zoneShow: !this.state.zoneShow
        })
    }

    handleChecks = (e) => {

        const item = e.target.name;
        const index = this.state.checkedArray.indexOf(item);

        this.handleChange(e);

        this.state.checkedArray.includes(item) ? (
            this.state.checkedArray.splice(index, 1)
              ) : (
                this.state.checkedArray.push(item)
          )
        //   console.log(this.state.checkedArray)
    }
    

    render() {
        // console.log(this.state.zipCodes)
        console.log(`UserZones:`, this.state.userZones)
        console.log(`ZoneUsers:`, this.state.zoneUsers)
        // console.log(this.props.currentUser.id)
        // console.log(this.props.currentUser.user_type)
        // console.log(this.props.currentUser.zone_id)

        return (
            
            <div>
                { this.props.currentUser.user_type > 0 ? (
                    <div>
                        <NavBar currentUser={this.props.currentUser} logOut={this.props.logOut} />
                        
                        <button onClick={this.checkBoxDetails}>Select Zones:</button>

                        { this.state.zoneShow ? 
                            
                            ( <ZipCodeSelectorNew checkedItems={this.state.checkedItems} handleChecks={this.handleChecks} allZones={this.props.allZones} currentUser={this.props.currentUser} handleChange={this.handleChange} zipCodes={this.state.zipCodes} /> )
                            : null

                        }
                        
                        <Map zoneUsers={this.state.zoneUsers} googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        />
                        <MessagePost currentUser={this.props.currentUser} zipCodes={this.state.zipCodes} selectedZones={this.state.selectedZones} />
                    </div>
                ) : null}
            </div>
        )
    }
}

export default AdminContainer;