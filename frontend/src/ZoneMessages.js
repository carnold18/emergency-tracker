import React, { Component } from 'react';

class ZoneMessages extends Component {

    state = {
        posts: [],
        postsCreated: false
    }

    componentDidMount() {
    // getPosts = () => {
        

        fetch("http://localhost:3000/posts", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
      .then(response => response.json())
      .then(posts => {
          this.setState({
            posts: posts,
            postsCreated: true
        })
      })
        
     
      
    }
    // }

    render() {
        console.log(this.state.posts)
        return (
            <div>
                { this.state.postsCreated ? this.state.posts.map(post => {
                    return <p>{post.message}</p>
                }) : <p>Currently no messages.</p>
                }
            </div>
        )
    }
}

export default ZoneMessages;