import React, { Component } from 'react';

class EditUserForm extends Component {

    editUser = () => {
        fetch("http://localhost:3000/users/"+this.state.currentUser.id, {
          method: "PATCH",
          body: JSON.stringify({
            status: 1
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
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="last_name"
                            name="last_name"
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="address_line_1"
                            name="address_line_1"
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="address_line_2"
                            name="address_line_2"
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="city"
                            name="city"
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="state"
                            name="state"
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="zip_code"
                            name="zip_code"
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="country"
                            name="country"
                        />
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="email"
                            name="email"
                        />
                        <input
                            type="password"
                            onChange={this.props.handleChange}
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

export default EditUserForm;