import React from 'react';

import { AboutUs, Ferme, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Ferme />
    <Intro />
    
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
