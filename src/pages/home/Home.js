import React from 'react';
import logo from '../../assets/img/logo-NodeSchoolTabasco.png'
function Home() {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">¡Asiste, aprende y comparte!</span>
          <span className="heading-primary--sub">NodeSchoool es el lugar donde puedes conocer a la comunidad de developers en Tabasco.</span>
        </h1>
      </div>
      <div className="header__logo-box">
        <img src={logo} className="header__logo" srcset="" alt="Logo" />
      </div>
    </header>
  );
}

export default Home;