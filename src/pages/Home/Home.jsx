import React from 'react';
import Marquee from 'react-fast-marquee';
import ceoImg from '../../assets/ceo-img.png';
import quote from '../../assets/quote.png';
import clientLogo from '../../assets/client-img.png';
import value1 from '../../assets/values-1.png';
import value2 from '../../assets/values-2.png';

import { BsFillStarFill, BsArrowUpRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import { homeHeaderSlides } from '../../data/data';
import { Link } from 'react-router-dom';
import OurServices from '../../components/Our-Services/OurServices';

const Home = () => {
  return (
    <main className='home-page'>
      <header>
        <Swiper
          grabCursor={true}
          effect={'creative'}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className='mySwiper4'
        >
          {homeHeaderSlides.map((slide, slideIndex) => {
            const { btnLabel, btnLink, mainTitle, slideBg, subTitle } = slide;
            return (
              <SwiperSlide
                className='slide'
                style={{ backgroundImage: `url(${slideBg})` }}
                key={slideIndex}
              >
                <div className='container'>
                  <h4>
                    <span>
                      <BsArrowUpRight />
                    </span>
                    <span className='sub-title'>{subTitle}</span>
                  </h4>
                  <h1>{mainTitle}</h1>
                  <Link to={btnLink}>
                    {btnLabel} <BsArrowUpRight />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </header>

      {/* OUR SERVICES SECTION */}
      <OurServices />

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
      <section className='company-stats'>
        <div className='stat'>
          <h2 className='stroke'>16</h2>
          <p>Years of Experience</p>
        </div>
        <div className='stat'>
          <h2>4k</h2>
          <p>Projects Complated</p>
        </div>
        <div className='stat'>
          <h2 className='stroke'>9k</h2>
          <p>Happy Customers</p>
        </div>
        <div className='stat'>
          <h2>12</h2>
          <p>Awards Winning</p>
        </div>
      </section>

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

      {/* OUR REPUTATION SECTION */}
      <section className='our-reputation'>
        <div className='info'>
          <h3 className='sub-title'>CHECK OUT ALL</h3>
          <h2>Successful Our Reputation</h2>
          <div className='past-clients'>
            <div className='client'>
              <img src={clientLogo} alt='client name' />
            </div>
            <div className='client'>
              <img src={clientLogo} alt='client name' />
            </div>
            <div className='client'>
              <img src={clientLogo} alt='client name' />
            </div>
            <div className='client'>
              <img src={clientLogo} alt='client name' />
            </div>
          </div>
        </div>
        <div className='video'></div>
      </section>

      {/* OUR VALUES */}
      <section className='our-values'>
        <div className='left'>
          <div className='value'>
            <div className='img'>
              <img src={value1} alt='value 1' />
            </div>
            <div className='info'>
              <h3>High Standerd</h3>
              <p>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className='value'>
            <div className='img'>
              <img src={value2} alt='value 1' />
            </div>
            <div className='info'>
              <h3>Ease of Communication</h3>
              <p>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className='right'>
          <h4 className='sub-title'>OUR VALUE</h4>
          <h2>
            Watch the creative process behind our{' '}
            <span className='stroke'>digital marketing.</span>
          </h2>
          <div className='skills-box'>
            <div className='skill design'>
              <h3>UI / UX Design</h3>
              <div className='bar'></div>
            </div>
            <div className='skill dev'>
              <h3>Apps Development</h3>
              <div className='bar'></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
