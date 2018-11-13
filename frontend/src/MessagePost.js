import React, { Component } from 'react';

class MessagePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            zoneIds: []
        }
    }

    generateZones = () => {
        debugger

        const zoneIds = this.props.selectedZones.map( zone => {
            return parseInt(zone.split("").slice(2).join(""))
         })

        this.setState({
            zoneIds: zoneIds
        })

        console.log(this.state.zoneIds)
    }

    // grab array of all selected zones and iterate over each one to send a POST to create a 
    // zone-specific message

    submitPost = (event) => {

        event.preventDefault();

        this.generateZones();
        
        for (let i = 0; i < this.state.zoneIds.length; i++) {
            fetch("http://localhost:3000/posts", {
                method: "POST",
                body: JSON.stringify({
                    message: this.state.message,
                    status: 0,
                    zone_id: this.state.zoneIds[i]
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.token}`
                  }
            })
        }
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div className="header">
                <h4 className="align-center">Send Notifications to Users!</h4>
                <div className="login">
                    <form onSubmit={this.submitPost}>
                        <input
                            type="textarea"
                            onChange={this.handleChange}
                            placeholder="your message"
                            name="message"
                        />
                        <input type="submit" className="button small special align-center"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default MessagePost;