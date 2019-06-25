import Link from 'next/link';
import React, { Component } from 'react';
import logo from '../imgs/b-logo-white.png';
import Nav from './Nav';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: ''
    };
  }
  componentDidMount() {
    // Couldn't find the logo under any of the wp api calls
    // return fetch(`https://labs.chiedo.com/wp-json/wp/v2/pages`)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log(responseJson);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <a>
                <img src={logo} alt="logo" />
              </a>
            </Link>
          </div>
        </div>
        <Nav />
      </header>
    );
  }
}
