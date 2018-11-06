import React, { Component } from 'react';

class Signup extends Component {

    render() {
        return (
            <div className="header">
                <h4 className="align-center">Create an account:</h4>
                <div className="login">
                    <form onSubmit={this.props.signUp}>
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

export default Signup;