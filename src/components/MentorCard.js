import React from 'react';
import { GitHub, Twitter, Facebook } from 'react-feather';
const img = require.context('../assets/img', true); // new context with require.context() for images route

const MentorCard = ({name, lastName, photo}) => {
  const imgsrc = img(`./${photo}`);
  const imgBackground = {
    backgroundImage: `url(${imgsrc})`,
  };
  return (
    <div className="card card__mentor">
      <div className="card card__mentor__box-img" style={imgBackground}>
        <div className="card card__mentor__img" style={imgBackground}></div>
      </div>
      <div className="card card__mentor__box-text">
        <h2 className="heading-tertiary heading-tertiary--main u-margin-bottom-small">
          {name}
          </h2>
        <h2 className="heading-tertiary heading-tertiary--main">
          {lastName}
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