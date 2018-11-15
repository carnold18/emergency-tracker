import React, { Component } from 'react';

class EditUserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.currentUser.email || '',
            password: this.props.currentUser.password,
            phone_number: this.props.phone_number,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            address_line_1: this.props.currentUser.house_number+this.props.currentUser.street_name+this.props.currentUser.street_type,
            address_line_2: null,
            city: this.props.currentUser.city,
            state: this.props.currentUser.state,
            zip_code: this.props.currentUser.zip_code,
            country: null,
            lat: this.props.currentUser.lat,
            lng: this.props.currentUser.lng,
            user_type: 0,
            status: 0,
            zone_id: this.props.currentUser.zone
        }
    }
    

    editUser = () => {
        fetch("http://localhost:3000/users/"+this.state.currentUser.id, {
          method: "PATCH",
          body: JSON.stringify({
            email: this.props.currentUser.email,
            password: this.props.currentUser.password,
            phone_number: this.props.phone_number,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            address_line_1: this.props.currentUser.house_number+this.props.currentUser.street_name+this.props.currentUser.street_type,
            address_line_2: null,
            city: this.props.currentUser.city,
            state: this.props.currentUser.state,
            zip_code: this.props.currentUser.zip_code,
            country: null
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
          }
        })
    }

    render() {
        return (
            <div className="header">
                <h4 className="align-center">Edit Account Information:</h4>
                <div className="login">
                    <form onSubmit={this.editUser}>
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="first_name"
                            name="first_name"
                            value={this.state.first_name}
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="last_name"
                            name="last_name"
                            value={this.state.last_name}
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="address_line_1"
                            name="address_line_1"
                            value={this.state.address_line_1}
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="address_line_2"
                            name="address_line_2"
                            value={this.state.address_line_2}
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="city"
                            name="city"
                            value={this.state.city}
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="state"
                            name="state"
                            value={this.state.state}
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="zip_code"
                            name="zip_code"
                            value={this.state.zip_code}
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="country"
                            name="country"
                            value={this.state.country}
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="email"
                            name="email"
                            value={this.state.email}
                        />
                        <input
                            type="password"
                            onChange={this.props.handleChange}
                            placeholder="password"
                            name="password"
                        /><br />
                        <input type="submit" className="button small special align-center"/>
                        <button>Delete Account</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditUserForm;