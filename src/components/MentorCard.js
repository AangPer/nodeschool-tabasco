import React from 'react';
import Foto from '../assets/img/mentor-giov.png';
import { GitHub, Twitter, Facebook } from 'react-feather';

const MentorCard = () => {
  return (
    <div className="card card__mentor">
      <div className="card card__mentor__box-img">
        <img src={Foto} alt="" className="card__mentor__img" />
      </div>
      <div className="card card__mentor__box-text">
        <h2 className="heading-tertiary heading-tertiary--main u-align-center">
          Giovanni Ortiz
        </h2>
        <div className="card card__mentor__social-media">
          <button className="card card__mentor__social-media-links">
            <Twitter size={20} />
          </button>
          <button className="card card__mentor__social-media-links">
            <Facebook size={20} />
          </button>
          <button className="card card__mentor__social-media-links">
            <GitHub size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MentorCard;