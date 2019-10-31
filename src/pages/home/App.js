import React, { Fragment } from 'react';
import Home from './Home';
import Slide from '../../components/Slide'

function App() {
  return (
    <Fragment>
      <Home />
      <Slide />
      <Home />
    </Fragment>
  );
}

export default App;
