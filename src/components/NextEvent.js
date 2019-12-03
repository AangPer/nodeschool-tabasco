import React from 'react';

const NextEvent = () => {
  return (
    <div className="card card__next-event">
      <h2 className="heading-secondary heading-secondary--white u-align-center u-margin-bottom-small">
        Hacktoberfest 2019
        <span className="heading-secondary heading-secondary--yellow">
          20 de Octubre
        </span>
      </h2>
      {/* Los apartados siguientes deverian ser dinamicos y sacados de los eventos de facebook */}
      <p className="paragraph">
        <span className="paragraph--yellow u-bold">¿Cuando? </span><span className="paragraph--white">Viernes, 20 de Octubre desde 6-8 PM
        </span>
      </p>
      <p className="paragraph">
        <span className="paragraph--yellow u-bold">¿Donde? </span><span className="paragraph--white">Galaxia Coworking Villahermosa, Mexico <a className="btn btn--yellow">[mapa]</a>
        </span>
      </p>
      <p className="paragraph">
        <span className="paragraph--yellow u-bold">¿De que tratara? </span><span className="paragraph--white"> Learning, mentoring, javascript bffs, and pizza 🍕
        </span>
      </p>
    </div>
  )
}

export default NextEvent;