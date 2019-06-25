import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/testAction';
import { Header } from './components/Header';
import { SloganSection } from './components/SloganSection';
import { Mission } from './components/Mission';
import { WhatWeDo } from './components/WhatWeDo';
import { Developers } from './components/Developers';
import { WhoWeServe } from './components/WhoWeServe';
import { StartUp } from './components/StartUp';
import { Footer } from './components/Footer';

import './sass/style.css';

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

const mapStateToProps = state => ({
  ...state
});

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    return (
      <div className="App">
        <Header />
        <SloganSection />
        <Mission />
        <WhatWeDo />
        <Developers />
        <WhoWeServe />
        <StartUp />
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
