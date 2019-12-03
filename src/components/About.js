import React from 'react';
import console from '../assets/img/Terminal.gif';

const About = () => {
  return (
    <div className="section-about">
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
  )
}

export default About;