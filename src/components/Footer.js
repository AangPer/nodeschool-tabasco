import React, { Fragment } from 'react';
import ExpectreLabsLogo from '../assets/img/logo-XpectreLabs.png';
import HashersLogo from '../assets/img/logo-Hashger.png';
import Pyschook from '../assets/img/logo-Pyschool.png';
import Ykeky from '../assets/img/logo-Ykeky.png';
import Venzee from '../assets/img/logo-Venzee.png';
import { GitHub, Twitter, Facebook } from 'react-feather';

const Footer = () => {

  return (
    <Fragment>
      <div className="footer">
        <div className="footer__wrapper u-margin-top-big">
          <div className="footer__box">
            <div className="footer__text-box u-margin-bottom-medium">
              <h2 className="heading-secondary heading-secondary--white u-align-center">
                NodeSchool Tabasco es organizado por:
          </h2>
            </div>
          </div>
          <div className="community u-margin-bottom-big">
            <div className="community__box">
              <div className="community__img-box">
                <img className="community__img" style={{ color: '#FFD900' }} src={ExpectreLabsLogo} alt="" />
              </div>
              <div className="community__img-box">
                <img className="community__img" style={{ color: '#0759AA' }} src={HashersLogo} alt="" />
              </div>
              <div className="community__img-box">
                <img className="community__img" style={{ color: 'white' }} src={Pyschook} alt="" />
              </div>
              <div className="community__img-box">
                <img className="community__img" style={{ color: '#FFD900' }} src={Ykeky} alt="" />
              </div>
              <div className="community__img-box">
                <img className="community__img" style={{ color: '#5A2D84' }} src={Venzee} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="designedby u-margin-bottom-small u-margin-top-small">
        <p className="paragraph paragraph--dark u-margin-bottom-small">
          Designed by XpectreLabs
          </p>
        <div className="designedby__social-media">
          <button className="btn btn__icon-link btn__icon-link--dark">
            <Twitter size={20} />
          </button>
          <button className="btn btn__icon-link btn__icon-link--dark">
            <Facebook size={20} />
          </button>
          <button className="btn btn__icon-link btn__icon-link--dark">
            <GitHub size={20} />
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer;