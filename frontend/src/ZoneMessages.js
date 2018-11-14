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
            <div class="highlights">
                <section>
                    <div class="content">
                        <header>
                            <a href="#" class="icon fa-envelope-o"><span class="label">Icon</span></a>
                            <h3>Feugiat consequat</h3>
                        </header>
                        { this.state.postsCreated ? this.state.posts.map(post => {
                            return <p>{post.message}</p>
                            }) : <p>Currently no messages.</p>
                        }
                    </div>
                </section>
            </div>
                
        )
    }
}

export default ZoneMessages;