import React from 'react';
import Marquee from 'react-fast-marquee';
import aboutUs1 from '../../assets/about-us-1.jpg';
import aboutUs2 from '../../assets/about-us-2.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <main className='about-page'>
      <header>
        <div className='top'>
          <ul>
            <li>WHO WE ARE ?</li>
          </ul>
          <h1>
            <span>We're a digital agency</span>
            <span>based in Valencia.</span>
          </h1>
        </div>
        <div className='bottom'>
          <p>
            We help our clients succeed by creating brand identities, digital
            experiences, and print materials that communicate clearly, achieve
            marketing goals, and look fantastic.
          </p>
        </div>
      </header>

      {/* MARQUEE */}
      <Marquee className='marquee'>
        <span>ABOUT US</span>
        <span className='stroke'>ABOUT US</span>
        <span>ABOUT US</span>
        <span className='stroke'>ABOUT US</span>
      </Marquee>

      {/* OUR STORY SECTION */}
      <section className='our-story'>
        <div className='imgs'>
          <div className='left img'>
            <img src={aboutUs1} alt='Astrosoft staff' />
          </div>
          <div className='right img'>
            <img src={aboutUs2} alt='Astrosoft staff' />
          </div>
        </div>
        <div className='info'>
          <div className='left'>
            <h5 className='sub-title'>OUR STORY.</h5>
          </div>
          <div className='right'>
            <p>
              GeekFolio are digital marketing experts and can partner with you
              to implement tactical campaigns which engage and connect audiences
              whilst driving ROI for your brand. We are SEO and SEM
              professionals and have implemented successful search campaigns for
              clients which drive super-charge improvements in organic rankings,
              increase visits and grow revenue.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
