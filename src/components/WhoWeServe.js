import React, { Component } from 'react';
import Link from 'next/link';

export class WhoWeServe extends Component {
  render() {
    return (
      <div className="whatitdo">
        <div className="left-split">
          <div className="text-container">
            <h2>
              <span className="m-red">WHO</span>{' '}
              <span className="m-thin">WE SERVE</span>
            </h2>
            <p>
              <span className="bold-red">IT Directors</span> hire us to improve
              their web application development capabilities so they can stay
              ahead of their backlog, consistently deliver stable applications,
              and innovate for their customers.
            </p>
            <p>
              <span className="bold-red">Executives</span> hire us to kick it to
              them straight without the tech jargon so together we can create a
              strategy and roadmap around their web and mobile application
              ambitions.
            </p>
            <Link href="https://labs.chiedo.com/page/contact/">
              <a>
                <button>LEARN MORE</button>
              </a>
            </Link>
          </div>
        </div>
        <div className="right-split">
          <img src="https://urlzs.com/aCzm1" alt="nerd" />
        </div>
      </div>
    );
  }
}
