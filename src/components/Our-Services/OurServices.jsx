import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const OurServices = () => {
  return (
    <section className='our-services-section'>
      <div className='title'>
        <h4 className='rounder-bd'>FEATURED SERVICES</h4>
        <h2>Our Services</h2>
      </div>
      <div className='services'>
        <div className='service'>
          <div className='icon'></div>
          <h4 className='service-title'>Brand Strategy & Art Direction</h4>
          <p>Creating a higher spacing and how people move through a unique.</p>
          <a href='#a' target='_blank'>
            Learn more <BsArrowUpRight />
          </a>
        </div>
        <div className='service'>
          <div className='icon'></div>
          <h4 className='service-title'>Brand Strategy & Art Direction</h4>
          <p>Creating a higher spacing and how people move through a unique.</p>
          <a href='#a' target='_blank'>
            Learn more <BsArrowUpRight />
          </a>
        </div>
        <div className='service'>
          <div className='icon'></div>
          <h4 className='service-title'>Brand Strategy & Art Direction</h4>
          <p>Creating a higher spacing and how people move through a unique.</p>
          <a href='#a' target='_blank'>
            Learn more <BsArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
