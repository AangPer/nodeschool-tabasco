import React from 'react';
import Foto from '../assets/img/photo-3.jpg';

const EventCard = () => {
  return (
    <div className="card card__previous-event">
      <img src={Foto} alt="" className="card__previous-event__img" />
      <div className="card card__previous-event__box-text">
        <h2 className="heading-tertiary heading-tertiary--main u-align-center">
          Git-It
          </h2>
        <h2 className="heading-tertiary heading-tertiary--sub u-align-center">
          20 Octubre 2019
            </h2>
      </div>
    </div>
  )
}

export default EventCard;