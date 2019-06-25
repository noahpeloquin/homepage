import React, { Component } from 'react';

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      link: '',
      img: '',
      tech_keys: [],
      tech_values: [],
      service_keys: [],
      service_values: [],
      loading: true
    };
    this.renderTech = this.renderTech.bind(this);
    this.renderServices = this.renderServices.bind(this);
  }

  renderTech() {
    return this.state.tech_values.map((tech, index) => (
      <p key={index}>{tech}</p>
    ));
  }

  renderServices() {
    return this.state.service_values.map((service, index) => (
      <p key={index}>{service}</p>
    ));
  }

  componentWillMount() {
    return fetch(`https://labs.chiedo.com/wp-json/wp/v2/case-studies`)
      .then(response => response.json())
      .then(responseJson => {
        const json = responseJson[this.props.id];
        const title = json.title.rendered;
        const link = json.link;
        const tech_keys = json.technologies;
        const service_keys = json.services;
        this.setState({ title, link, tech_keys, service_keys });
        return fetch(`${json._links['wp:featuredmedia'][0].href}`);
      })
      .then(response => response.json())
      .then(responseJson => {
        let img = responseJson.source_url;
        this.setState({ img });
        return fetch('https://labs.chiedo.com/wp-json/wp/v2/services');
      })
      .then(response => response.json())
      .then(responseJson => {
        var i;
        for (i = 0; i < this.state.service_keys.length; i++) {
          let result = responseJson.find(
            // eslint-disable-next-line no-loop-func
            x => x.id === this.state.service_keys[i]
          );
          let service_values = this.state.service_values;
          service_values.push(result.name);
          this.setState({ service_values });
        }
        return fetch('https://labs.chiedo.com/wp-json/wp/v2/technologies');
      })
      .then(response => response.json())
      .then(responseJson => {
        var i;
        for (i = 0; i < this.state.tech_keys.length; i++) {
          let result = responseJson.find(
            // eslint-disable-next-line no-loop-func
            x => x.id === this.state.tech_keys[i]
          );
          let tech_values = this.state.tech_values;
          tech_values.push(result.name);
          this.setState({ tech_values });
        }
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    let hiddenContent;
    let content;

    if (this.state.loading) {
      hiddenContent = <h2>Loading title</h2>;
      content = <img src={this.state.img} alt="mia" />;
    } else {
      hiddenContent = (
        <div>
          <h2>{this.state.title}</h2>
          {this.renderTech()}
          {this.renderServices()}
        </div>
      );
      content = <img src={this.state.img} alt="mia" />;
    }
    return (
      <div className="post-wrapper">
        <div className="post-overlay">{hiddenContent}</div>
        <div className="post-picture">{content}</div>
      </div>
    );
  }
}
