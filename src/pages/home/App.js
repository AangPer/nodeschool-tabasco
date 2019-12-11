import React from 'react';
import Home from './Home';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
  );
}

export default App;
