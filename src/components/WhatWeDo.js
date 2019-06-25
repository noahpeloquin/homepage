import React, { Component } from 'react';
import Link from 'next/link';

export class WhatWeDo extends Component {
  render() {
    return (
      <div className="whatitdo">
        <div className="left-split">
          <img src="https://urlzs.com/BUA3Q" alt="nerd" />
        </div>
        <div className="right-split">
          <div className="text-container">
            <h2>
              <span className="m-red">WHAT</span>{' '}
              <span className="m-thin">WE DO</span>
            </h2>
            <p>
              <span className="underline">Consulting</span> with IT directors
              and executives on web application development and innovation
            </p>
            <p>
              <span className="underline">Development</span> of web and mobile
              apps using technolog such as NodeJS, Ruby on Rails, PHP, MySQL,
              AWS, and Heroku.
            </p>
            <p>
              <span className="underline">Training</span> for IT teams on the
              lastest web application development technologies and processes for
              innovation.
            </p>
            <Link href="https://labs.chiedo.com/page/contact/">
              <a>
                <button>LEARN MORE</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
