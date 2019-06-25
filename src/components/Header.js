/* eslint-disable jsx-a11y/anchor-is-valid */
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
