import React from 'react';
import NextEvent from './NextEvent';
import EventCard from './EventCard';

const Events = () => {
  return (
    <section className="section-events">
      <div className="section-events__wrapper">
        <div className="section-events__next-event u-margin-top-big">
          <h2 className="heading-secondary u-align-center">
            Proximo evento
        </h2>
          <NextEvent />
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