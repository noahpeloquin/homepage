import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <a href="https://labs.chiedo.com/page/about/">ABOUT US</a>
          </li>
          <li>
            <a href="https://labs.chiedo.com/case-studies/">PORTFOLIO</a>
          </li>
          <li>
            <a href="">WHAT WE DO</a>
          </li>
          <li>
            <a href="">WHO WE SERVE</a>
          </li>
          <li>
            <a href="https://labs.chiedo.com/page/contact/">CONTACT US</a>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default Nav;
