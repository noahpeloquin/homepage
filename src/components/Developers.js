import React, { Component } from 'react';
import Daboi from './Daboi';
import Link from 'next/link';

export class Developers extends Component {
  render() {
    return (
      <div className="foundingfathers">
        <h1>OUR FOUNDING WEB DEVELOPERS</h1>
        <div className="dev-container">
          <Daboi
            imgurl="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-chiedo-new.jpg"
            name="Chiedo"
            expertise="Founder, Solutions Architect"
          />
          <Daboi
            imgurl="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-ricardo-fearing.jpg"
            name="Ricardo"
            expertise="ReactJS / Front-End Master"
          />
          <Daboi
            imgurl="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-eric-duvon.jpg"
            name="Eric"
            expertise="Ruby on Rails / Back-End Pro"
          />
          <Daboi
            imgurl="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-don-townsend.jpg"
            name="Don"
            expertise="NodeJS / Full Stack Expert"
          />
        </div>
        <Link href="https://labs.chiedo.com/page/contact/">
          <a>
            <button className="grey-button">LEARN MORE</button>
          </a>
        </Link>
      </div>
    );
  }
}
