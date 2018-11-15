import React, { Component } from 'react';

class ZoneMessages extends Component {

    state = {
        posts: [],
        postsCreated: false
    }

    componentDidMount() {

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

    render() {
        console.log(this.state.posts)
        return (
            <div>
            <h2>Messages for {this.props.currentUser.zip_code}</h2>
            <div class="highlights">
                
                { this.state.postsCreated ? this.state.posts.map(post => (
                    <div >
                        <section>
                            <div class="content">
                                <header>
                                    <a href="#" class="icon fa-envelope-o"><span class="label">Icon</span></a>
                                    <h3>{post.message}</h3>
                                    <h3>Date Posted: {post.created_at.split("").splice(0,10).join("")}</h3>
                                </header>
                            </div>
                        </section>
                    </div>
                    )) : <p>Currently no messages.</p>
                }
            </div>
            </div>
        )
    }
}

export default ZoneMessages;