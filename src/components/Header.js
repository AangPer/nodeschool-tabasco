import React from 'react';
import logo from '../assets/img/logo-NodeSchoolTabasco.png';
import { Parallax } from 'react-scroll-parallax';
import Foto from '../assets/img/slide-1.jpg';

const Slide = () => {
  return (
    <header className="header">
      <div className="header header__wrapper">
        <Parallax className="header__text-box" y={[-50, 50]} tagOuter="figure">
          {/* <div className="header__text-box"> */}
          <h1 className="heading-primary">
            <span className="heading-primary--main">¡Asiste, aprende y comparte!</span>
            <span className="heading-primary--sub">NodeSchoool es el lugar donde puedes conocer a la comunidad de developers en Tabasco.</span>
          </h1>
          {/* </div> */}
        </Parallax>
        <Parallax className="header__logo-box" y={[-20, 20]} tagOuter="figure">
          {/* <div className="header__logo-box"> */}
          <img src={logo} className="header__logo" srcset="" alt="Logo" />
          {/* </div> */}
        </Parallax>
      </div>
      {/* <Parallax className="header__slider" y={[-20, 30]} tagOuter="figure"> */}
      <div className="header__slider">
        <div className="header__slider__img" />
      </div>
      {/* </Parallax> */}
    </header>
  )
}

export default Slide;