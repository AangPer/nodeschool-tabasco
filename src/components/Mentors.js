import React from 'react';
import MentorCard from './MentorCard';
import hexagon from '../assets/img/parallax-hexagon.svg';
import { Parallax } from 'react-scroll-parallax';


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
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </div>
      </div>
      <Parallax y={[-20, 20]} tagOuter="div" tagInner="div" className="parallaxHexagon parallaxHexagon--3">
        <div className="parallaxHexagon__contain">
          <img src={hexagon} alt="" className="parallaxHexagon__img" />
        </div>
      </Parallax>
      <Parallax y={[-50, 50]} tagOuter="div" tagInner="div" className="parallaxHexagon parallaxHexagon--4">
        <div className="parallaxHexagon__contain">
          <img src={hexagon} alt="" className="parallaxHexagon__img" />
        </div>
      </Parallax>
      <Parallax y={[-50, 50]} tagOuter="div" tagInner="div" className="parallaxHexagon parallaxHexagon--7">
        <div className="parallaxHexagon__contain">
          <img src={hexagon} alt="" className="parallaxHexagon__img" />
        </div>
      </Parallax>
      <Parallax y={[-50, 50]} tagOuter="div" tagInner="div" className="parallaxHexagon parallaxHexagon--8">
        <div className="parallaxHexagon__contain">
          <img src={hexagon} alt="" className="parallaxHexagon__img" />
        </div>
      </Parallax>
      <Parallax y={[-50, 50]} tagOuter="div" tagInner="div" className="parallaxHexagon parallaxHexagon--9">
        <div className="parallaxHexagon__contain">
          <img src={hexagon} alt="" className="parallaxHexagon__img" />
        </div>
      </Parallax>
    </section >
  )
}

export default Mentors;