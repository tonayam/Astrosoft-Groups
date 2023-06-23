import React from 'react';
import Marquee from 'react-fast-marquee';
import ceoImg from '../../assets/ceo-img.png';
import quote from '../../assets/quote.png';
import { BsFillStarFill } from 'react-icons/bs';

const Home = () => {
  return (
    <main className='home-page'>
      {/* MARQUEE */}
      <Marquee className='home-marquee'>
        <h5>
          <span>UI-UX Experience</span>
          <span className='stroke'>*</span>
        </h5>
        <h5>
          <span>Web Development</span>
          <span className='stroke'>*</span>
        </h5>
        <h5>
          <span>Digital Marketing</span>
          <span className='stroke'>*</span>
        </h5>
        <h5>
          <span>Product Design</span>
          <span className='stroke'>*</span>
        </h5>
        <h5>
          <span>Mobile Solutions</span>
          <span className='stroke'>*</span>
        </h5>
      </Marquee>

      {/* COMPANY STATS */}
      <section className='company-stats'></section>

      {/* TESTIMONIAL SECTION */}
      <div className='testimonial'>
        <div className='bg'></div>
        <div className='left'>
          <img src={ceoImg} alt='ceo' />
        </div>
        <div className='right'>
          <div className='stars'>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <p>
            I have been hiring people in this space for a number of years and I
            have never seen this level of professionalism. It really feels like
            you are working with a team that can get the job done.
          </p>

          <div className='divider'>
            <div className='img'>
              <img src={quote} alt='quote' />
            </div>
          </div>

          <div className='ceo'>
            <h6>Leonard Heiser</h6>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
