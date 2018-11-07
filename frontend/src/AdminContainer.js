import React, { Component } from 'react';
import Map from './Map';
import ZipCodeSelector from './ZipCodeSelector';
import NavBar from './NavBar';
import MessagePost from './MessagePost';

class AdminContainer extends Component {

    state = {
        id: null
    }
    // componentDidMount() {
    //     console.log('where the hell am i')
    getUserZones = () => {

        fetch("http://localhost:3000/user_zones/"+this.state.id, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(console.log)
    }
    // }

    render() {
        console.log(this.props.currentUser.id)
        console.log(this.props.currentUser.user_type)

        return (
            
            <div>
                { this.props.currentUser.user_type > 0 ? (
                    <div>
                        <NavBar currentUser={this.props.currentUser} logOut={this.props.logOut} />
                        <ZipCodeSelector allZones={this.props.allZones} currentUser={this.props.currentUser}/>
                        <Map googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        />
                        <MessagePost currentUser={this.props.currentUser} />
                    </div>
                ) : null }
            </div>
        )
    }
}

export default AdminContainer;