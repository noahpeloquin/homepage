import React, { Component } from 'react';

export class SloganSection extends Component {
  render() {
    return (
      <div className="slogan-section">
        <div className="screen">
          <div className="slogan">
            <div className="slogan-wrapper">
              <h1 id="text">BUILD SPACESHIPS</h1>
              <img
                id="spaceship"
                alt="🚀"
                src="https://s.w.org/images/core/emoji/12.0.0-1/svg/1f680.svg"
              />
            </div>
            <p>
              Your passions are our passions when we partner up. So let's work
              together and fly futher.
            </p>
            <p>Consult with Chiedo Labs on your next web or mobile app.</p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <video autoPlay loop muted>
          <source
            data-src="https://labs.chiedo.com/wp-content/themes/chiedolabs/vid/promo.mp4?v=2"
            type="video/mp4"
            src="https://labs.chiedo.com/wp-content/themes/chiedolabs/vid/promo.mp4?v=2"
          />
        </video>
      </div>
    );
  }
}
