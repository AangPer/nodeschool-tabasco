import React, { Fragment } from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Events from '../../components/Events';
import Mentors from '../../components/Mentors';
import Contact from '../../components/Contact';

function Home() {
  return (
    <Fragment>
      <Header />
      <About />
      <Events />
      <Mentors />
      <Contact />
    </Fragment>
  );
}

export default Home;