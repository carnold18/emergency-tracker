import React, { Component } from 'react';

class Header extends Component {

    render() {
        return(
            <section id="banner">
				<div class="inner">
					<h1>MobilEyes Houston</h1>
					<p>A responsive business oriented template with a video background<br />
					designed by <a href="https://templated.co/">TEMPLATED</a> and released under the Creative Commons License.</p>
				</div>
				<video autoplay loop muted playsinline src="images/banner.mp4"></video>
			</section>
        )
    }
}

export default Header;