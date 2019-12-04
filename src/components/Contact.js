import React from 'react';
import logo from '../assets/img/logo-NodeSchoolTabasco.png';
import { GitHub, Twitter, Facebook } from 'react-feather';

const Contact = () => {
  return (
    <section className="section-contact">
      <div className="section-contact__wrapper">
        <div className="contact contact__text-box">
          <h2 className="heading-secondary">
            Contacto
          </h2>
          <p className="paragraph">
            NodeSchool es un grupo de voluntarios que apoyan a las demás personas a aprender y escribir código JavaScript
          </p>
          <p className="paragraph">
            Si tienes alguna duda puedes contactarnos en NodeSchoolTabasco
          </p>
          <p className="paragraph">
            Pedimos a todos los participantes, patrocinadores y ponentes que se guíen por nuestro código de conducta.
          </p>
        </div>
        <div className="contact contact__img-box">
          <img className="contact__img" src={logo} alt="" />
          <div className="contact__social-media u-margin-top-small">
            <button className="btn btn__icon-link btn__icon-link--dark-white">
              <Twitter size={30} />
            </button>
            <button className="btn btn__icon-link btn__icon-link--dark-white">
              <Facebook size={30} />
            </button>
            <button className="btn btn__icon-link btn__icon-link--dark-white">
              <GitHub size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact;