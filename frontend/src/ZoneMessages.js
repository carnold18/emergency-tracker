import React, { Component } from 'react';

class ZoneMessages extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        let zonePosts = []

        fetch("http://localhost:3000/posts", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
      .then(response => response.json())
      .then(posts => (
          posts.forEach(post => 
              this.props.currentUser.zone_id === post.zone_id ?
              zonePosts.push(post) : null
          )
      ))
        
      this.setState({
          posts: zonePosts
      })

    }

    render() {
        console.log(this.state.posts)
        return (
            <div>
                {this.state.posts.map(
                    post =>
                    <p>${post.message}</p>
                )
                }
            </div>
        )
    }
}

export default ZoneMessages;