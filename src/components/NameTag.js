import React, { Component } from 'react';

class NameTag extends Component {
  render() {
    return (
      <div className="tag">
        <p>
          <span className="name">{`${this.props.name}`}</span>
        </p>
        <p>
          <span className="expertise">{`${this.props.expertise}`}</span>
        </p>
      </div>
    );
  }
}

export default NameTag;
