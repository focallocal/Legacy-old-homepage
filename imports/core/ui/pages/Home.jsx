import React, { PureComponent } from 'react';

import { Header } from '../components/Header';
import { Top } from '../components/Top';
import { About } from '../components/About';
import { Adventures } from '../components/Adventures';
import { Mission } from '../components/Mission';
import { MoreLinks } from '../components/MoreLinks';
import { Footer } from '../components/Footer';

export default class Home extends PureComponent {
  render() {
    return (
      <div id="home">
        <Header />
        <Top />
        <About />
        <Adventures />
        <Mission />
        <MoreLinks />
        <Footer />
      </div>
    );
  }
}
