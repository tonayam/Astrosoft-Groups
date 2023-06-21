import React from 'react';
import aboutUs1 from '../../../assets/about-us-1.jpg';
import aboutUs2 from '../../../assets/about-us-2.jpg';

const OurStory = () => {
  return (
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
            GeekFolio are digital marketing experts and can partner with you to
            implement tactical campaigns which engage and connect audiences
            whilst driving ROI for your brand. We are SEO and SEM professionals
            and have implemented successful search campaigns for clients which
            drive super-charge improvements in organic rankings, increase visits
            and grow revenue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
