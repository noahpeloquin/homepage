/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Link from 'next/link';

export class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="links">
          <h2>
            <span className="l-red">MORE LINKS</span>
          </h2>
          <Link href="https://labs.chiedo.com/blog">
            <a>
              <p>Blog</p>
            </a>
          </Link>
          <Link href="http://chie.do/apply">
            <a>
              <p>Join the Team</p>
            </a>
          </Link>
          <Link href="https://www.facebook.com/ChiedoLabs">
            <a>
              <p>Facebook</p>
            </a>
          </Link>
          <Link href="https://twitter.com/chiedolabs">
            <a>
              <p>Twitter</p>
            </a>
          </Link>{' '}
          <p>
            CHIE<span className="s-red">DO</span> LABS
          </p>
        </div>
        <div className="accelerate-wrapper">
          <div className="accelerate">
            <div id="accelerate-img">
              <img
                src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/chiedo-sitting-small.png"
                alt="chiedo"
              />
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
