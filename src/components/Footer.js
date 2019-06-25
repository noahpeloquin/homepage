import React, { Component } from 'react';
import Link from 'next/link';

export class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="links">
          <h2>MORE LINKS</h2>
        </div>
        <div className="accelerate-wrapper">
          <div className="accelerate">
            <div id="accelerate-img">
              <img alt="temp" />
            </div>
            <div id="accelerate-text">
              <h1>
                Accelerate <span className="l-red">Your Ideas.</span>
              </h1>
              <p>
                {' '}
                This year our founder is on a mission to catalyze more
                game-changing ideas into motion through joint ventures with
                entrepreneurs.
              </p>
              <Link href="https://labs.chiedo.com/rd">
                <a>
                  <button>LEARN MORE</button>
                </a>
              </Link>
            </div>
          </div>
          <div className="cc">
            <p>Copyright 2019 &copy; Chiedo Labs, LLC.</p>
          </div>
        </div>
      </div>
    );
  }
}
