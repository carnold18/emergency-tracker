import React, { Component } from 'react';

class Signup extends Component {

    state = {
        email: null,
        password: null,
        first_name: null,
        last_name: null,
        house_number: null,
        street_name: null,
        street_type: null,
        city: null,
        state: null,
        zip_code: null,
        geocode: {}
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    getGeoCoords = async (event) => {
        event.preventDefault();

        const address = this.state.house_number +this.state.street_name +this.state.street_type +this.state.city+this.state.state +this.state.zip_code
        const API_KEY = 'AIzaSyBgD94pDBzhU0p1Ea6JZMO556STxpVAskg'
        const URL = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.state.house_number+'+'+this.state.street_name+'+'+this.state.street_type+',+'+this.state.city+',+'+this.state.state+'&key='+API_KEY
        console.log(address)
        console.log(API_KEY)
        console.log(URL)

        await fetch(URL)
        .then(res => res.json())
        .then(address => {
             this.setState({
                geocode: address.results[0].geometry.location
            })
        })

        await this.signUp()
    }

    signUp =  () => {
        debugger
    
        const zone = parseInt(this.state.zip_code.split("").slice(2).join(""))
        console.log(zone)

        await fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            phone_number: null,
            first_name: this.state.first_name.toUpperCase(),
            last_name: this.state.last_name.toUpperCase(),
            address_line_1: this.state.house_number+this.state.street_name.toUpperCase()+this.state.street_type.toUpperCase(),
            address_line_2: this.state.address_line_2,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code,
            country: this.state.country,
            lat: 
            lng:
            user_type: 0,
            status: 0,
            zone_id: zone
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
    
    }

    render() {
        return (
            <div className="header">
                <h4 className="align-center">Create an account:</h4>
                <div className="login">
                    <form onSubmit={event => this.getGeoCoords(event)} >
                    <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Arnie"
                            name="first_name"
                        />
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Arnold"
                            name="last_name"
                        />
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="708"
                            name="house_number"
                        />
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Main"
                            name="street_name"
                        />
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Street"
                            name="street_type"
                        />
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Houston"
                            name="city"
                        />
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="TX"
                            name="state"
                        />
                        
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="77008"
                            name="zip_code"
                        />
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="arnie@example.com"
                            name="email"
                        />
                        <input
                            type="password"
                            onChange={this.handleChange}
                            placeholder="password"
                            name="password"
                        />
                        <input type="submit" className="button small special align-center"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;