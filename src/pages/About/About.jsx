import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import aboutUs1 from '../../assets/about-us-1.jpg';
import aboutUs2 from '../../assets/about-us-2.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reviews } from '../../data/data';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const reviewsWrapperHeight = `${reviews.length * 50}vh`;
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateY: 0 },
      {
        translateY: `-${reviews.length * 50 - 50}vh`,
        ease: `none`,
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `top top`,
          end: `1000 top`,
          pin: true,
          scrub: 0.6,
        },
      }
    );

    return () => pin.kill();
  });

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

      {/* THE JOURNEY/REVIEWS SECTION */}
      <section ref={triggerRef} className='journey-reviews'>
        {/* the journey */}
        <div className='journey'>
          <h5 className='sub-title'>SINCE FROM 2008</h5>
          <h2>
            <span>Keep pushing forward. </span>
            <span> We've got your back.</span>
          </h2>
          <p>
            Things go wrong have questions. We've understand. So we have people
          </p>
          <div className='divider'></div>
          <div className='stats'>
            <div className='stat'>
              <h3>12K</h3>
              <p>
                <span>Happy Users</span>
                <span>Around World</span>
              </p>
            </div>
            <div className='stat'>
              <h3>12K</h3>
              <p>
                <span>Happy Users</span>
                <span>Around World</span>
              </p>
            </div>
          </div>
        </div>

        {/* reviews */}
        <div className='reviews'>
          <div
            ref={sectionRef}
            style={{ height: reviewsWrapperHeight }}
            className='wrapper'
          >
            {reviews.map((review, reviewIndex) => {
              const {
                comment,
                reviewerName,
                reviewerPhoto,
                reviewerPosition,
                stars,
              } = review;

              return (
                <div className='review' key={reviewIndex}>
                  <div className='stars'>
                    {stars.map((star, starIndex) => {
                      return <div key={starIndex}>{star}</div>;
                    })}
                  </div>
                  <p>{comment}</p>
                  <div className='reviewer'>
                    <div className='profile'>
                      <img src={reviewerPhoto} alt={reviewerName} />
                    </div>
                    <div className='info'>
                      <h4>{reviewerName}</h4>
                      <h6>{reviewerPosition}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
