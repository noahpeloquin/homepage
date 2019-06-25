import React, { Component } from 'react';
import NameTag from './NameTag';

class Daboi extends Component {
  render() {
    return (
      <div>
        <div className="daboi-wrapper">
          <img
            className="daboi-image"
            src={`${this.props.imgurl}`}
            alt="dabois_picture"
          />
          <div className="nametag">
            <NameTag
              name={`${this.props.name}`}
              expertise={`${this.props.expertise}`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Daboi;
