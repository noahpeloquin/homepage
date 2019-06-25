import React, { Component } from 'react';
import Link from 'next/link';

export class StartUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      title: ''
    };
  }

  componentWillMount() {
    return fetch(`https://labs.chiedo.com/wp-json/wp/v2/posts`)
      .then(response => response.json())
      .then(responseJson => {
        let src = responseJson[0].link;
        let title = responseJson[0].title.rendered;
        this.setState({ src, title });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="startup-wrapper">
        <div className="startup">
          <div id="startup-img">
            <img
              src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/img-ricardo-monicle.jpg"
              alt="ricardoooooooooOoooooooooooooOOooooooo"
            />
          </div>
          <div id="startup-info">
            <h1>
              Start-up Innovation,
              <br /> Corporate Results
            </h1>
            <p>
              We create an atmosphere that fosters creativity and
              professionalism. In this way, we allow our team to hone your
              vision with our digital strategy and build realities that will
              take your business to the next level.
            </p>
            <Link href="https://labs.chiedo.com/page/contact/">
              <a>
                <button>LEARN MORE</button>
              </a>
            </Link>
          </div>
        </div>
        <div className="post">
          <h2>
            <span className="l-red">FEATURED</span>{' '}
            <span className="l-thin">Post</span>
          </h2>
          <div className="post-title-wrapper">
            <Link href={`${this.state.src}`}>
              <a>
                <div className="post-title">
                  <p>{`${this.state.title}`}</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
