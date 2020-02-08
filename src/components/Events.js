import React from 'react';
import NextEvent from './NextEvent';
import EventCard from './EventCard';
import hexagon from '../assets/img/parallax-hexagon.svg';
import { Parallax } from 'react-scroll-parallax';

const Events = (props) => {
  return (
    <section className="section-events">
      <div className="section-events__wrapper">
        <Parallax y={[-50, 50]} tagOuter="div" tagInner="div" className="parallaxHexagon parallaxHexagon--2">
          <div className="parallaxHexagon__contain">
            <img src={hexagon} alt="" className="parallaxHexagon__img" />
          </div>
        </Parallax>
        <div className="section-events__next-event u-margin-top-big">
          <h2 className="heading-secondary u-align-center">
            Proximo evento
        </h2>
          <NextEvent datos={props.dato} />
        </div>
        <div className="section-events__previous-events u-margin-top-big">
          <h2 className="heading-secondary u-align-center">
            Eventos anteriores
        </h2>
          <div className="section-events__event-gallery">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events;