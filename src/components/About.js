import React from 'react';
import console from '../assets/img/Terminal.gif';
import hexagon from '../assets/img/parallax-hexagon.svg';
import hexagons from '../assets/img/parallax-hexagons.svg';
import { Parallax } from 'react-scroll-parallax';


const About = () => {
  return (
    <section className="section-about">
      <div className="section-about__wrapper">
        <div className="section-about__text-box">
          <h2 className="heading-secondary">
            Estas a un <span className="u-underline">npm</span>&nbsp; <span className="u-underline">install</span> de aprender cualquier cosa
        </h2>
          <p className="paragraph">
            <strong className="u-strong"> NodeSchool </strong> es el lugar donde puedes comenzar en el increíble camino de <strong className="u-strong">JavaScript </strong> y <strong className="u-strong">Node.js </strong> y donde estudiantes y mentores comparten lo que han aprendido juntos, tanto mentores como alumnos están dispuestos a ayudar a progresar a la comunidad de <strong className="u-strong">NodeSchool</strong>.
        </p>
        </div>
        <div className="section-about__console-box">
          <img src={console} className="section-about__console" srcset="" alt="Logo" />
        </div>
      </div>
      <Parallax y={[-20, 20]} tagOuter="div" tagInner="div" className="parallaxHexagon parallaxHexagon--1">
        <div className="parallaxHexagon__contain parallaxHexagon__contain--bunch">
          <img src={hexagons} alt="" className="parallaxHexagon__img" />
        </div>
      </Parallax>
      <Parallax y={[-60, 60]} tagOuter="div" tagInner="div" className="parallaxHexagon parallaxHexagon--5">
        <div className="parallaxHexagon__contain">
          <img src={hexagon} alt="" className="parallaxHexagon__img" />
        </div>
      </Parallax>
      <Parallax y={[-50, 50]} tagOuter="div" tagInner="div" className="parallaxHexagon parallaxHexagon--6">
        <div className="parallaxHexagon__contain">
          <img src={hexagon} alt="" className="parallaxHexagon__img" />
        </div>
      </Parallax>
    </section>
  )
}

export default About;