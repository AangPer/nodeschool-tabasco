import React from 'react';
import logo from '../assets/img/logo-NodeSchoolTabasco.png';
import Foto from '../assets/img/slide-1.jpg';

const Slide = () => {
  return (
    <header className="header">
      <div className="header header__wrapper">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">¡Asiste, aprende y comparte!</span>
            <span className="heading-primary--sub">NodeSchoool es el lugar donde puedes conocer a la comunidad de developers en Tabasco.</span>
          </h1>
        </div>
        <div className="header__logo-box">
          <img src={logo} className="header__logo" srcSet="" alt="Logo" />
        </div>
      </div>
      <div className="header__slider">
        <img src={Foto} alt="" className="header__slider__img" />
      </div>
    </header>
  )
}

export default Slide;