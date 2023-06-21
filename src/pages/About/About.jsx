import React from 'react';
import Marquee from 'react-fast-marquee';
import Header from './native-components/Header';
import OurStory from './native-components/OurStory';
import JourneyReviews from './native-components/JourneyReviews';
import Team from './native-components/Team';

const About = () => {
  return (
    <main className='about-page'>
      <Header />
      <Marquee className='marquee'>
        <span>ABOUT US</span>
        <span className='stroke'>ABOUT US</span>
        <span>ABOUT US</span>
        <span className='stroke'>ABOUT US</span>
      </Marquee>
      <OurStory />
      <JourneyReviews />
      <Team />
    </main>
  );
};

export default About;
