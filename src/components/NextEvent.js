import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/es-us';

const NextEvent = (props) => {
  let nombre = "";
  let descripcion = "";
  let lugar = "";
  let hora = "";
  if (props.datos.length > 0) {
    const { name, description, place, start_time } = props.datos[0];
    nombre = name;
    hora = start_time;
    descripcion = description;
    lugar = place.name;
  }
  return (
    <div className="card card__next-event">
      <h2 className="heading-secondary heading-secondary--white u-align-center u-margin-bottom-small">
        {/* Hacktoberfest 2019 */}
        {nombre}
        <span className="heading-secondary heading-secondary--yellow">
          {/* 20 de Octubre */}
          <Moment format="LL">{hora}</Moment>
        </span>
      </h2>
      {/* Los apartados siguientes deverian ser dinamicos y sacados de los eventos de facebook */}
      <p className="paragraph">
        <span className="paragraph--yellow u-bold">¿Cuando? </span><span className="paragraph--white"> <Moment locale="es-us" format = "LLLL">{hora}</Moment>
        </span>
      </p>
      <p className="paragraph">
        <span className="paragraph--yellow u-bold">¿Donde? </span><span className="paragraph--white">{lugar}<button className="btn btn__link btn__link--yellow">[mapa]</button>
        </span>
      </p>
      <p className="paragraph">
        <span className="paragraph--yellow u-bold">¿De que tratara? </span><span className="paragraph--white" role="img" aria-label="Subject">{descripcion}</span>
      </p>
    </div>
  )
}

export default NextEvent;