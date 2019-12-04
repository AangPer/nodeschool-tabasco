import React from 'react';
import Foto from '../assets/img/mentor-giov.png';
import { GitHub, Twitter, Facebook } from 'react-feather';

const MentorCard = () => {
  const imgBackground = {
    backgroundImage: 'url(' + Foto + ')',
  };
  return (
    <div className="card card__mentor">
      <div className="card card__mentor__box-img" style={imgBackground}>
        <div className="card card__mentor__img" style={imgBackground}></div>
      </div>
      <div className="card card__mentor__box-text">
        <h2 className="heading-tertiary heading-tertiary--main u-margin-bottom-small">
          Giovanni
          </h2>
        <h2 className="heading-tertiary heading-tertiary--main">
          Ortiz
          </h2>
        <div className="card card__mentor__social-media">
          <button className="btn btn__icon-link btn__icon-link--yellow">
            <Twitter size={20} />
          </button>
          <button className="btn btn__icon-link btn__icon-link--yellow">
            <Facebook size={20} />
          </button>
          <button className="btn btn__icon-link btn__icon-link--yellow">
            <GitHub size={20} />
          </button>
        </div>
      </div>
    </div>





    // <div className="card card__mentor">
    //   <div className="card card__mentor__box-img">
    //     <img src={Foto} alt="" className="card__mentor__img" />
    //   </div>
    //   <div className="card card__mentor__box-text">
    //     <h2 className="heading-tertiary heading-tertiary--main u-align-center">
    //       Giovanni Ortiz
    //     </h2>
    //     <div className="card card__mentor__social-media">
    //       <button className="card card__mentor__social-media-links">
    //         <Twitter size={20} />
    //       </button>
    //       <button className="card card__mentor__social-media-links">
    //         <Facebook size={20} />
    //       </button>
    //       <button className="card card__mentor__social-media-links">
    //         <GitHub size={20} />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MentorCard;