import React from 'react';
import MentorCard from './MentorCard';


const Mentors = () => {
  return (
    <section className="section-mentors">
      <div className="section-mentors__wrapper">
        <h2 className="heading-secondary heading-secondary--white u-align-center u-margin-top-big u-margin-bottom-big">
          Mentores
        </h2>
        <div className="section-mentors__box">
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </div>
      </div>
    </section >
  )
}

export default Mentors;