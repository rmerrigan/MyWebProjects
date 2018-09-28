import React, { Component } from 'react';
import LandingBody from './body/LandingBody';
import LandingFooter from './footer/LandingFooter';
import LandingHeader from './header/LandingHeader';

class Landing extends Component {
  render() {
    return (
      <div>
        <LandingHeader />
        <LandingBody />
        <LandingFooter />
      </div>
    );
  }
}

export default Landing;
