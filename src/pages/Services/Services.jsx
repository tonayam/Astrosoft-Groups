import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { subsidiaries } from '../../data/data';
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: `-300vw`,
        ease: `none`,
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `top top`,
          end: `2000 top`,
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => pin.kill();
  }, []);

  return (
    <main className='services-page'>
      <header>
        <div className='top'>
          <ul>
            <li>WHAT CAN WE DO ?</li>
          </ul>
          <h1>
            <span>We combine our passion</span>
            <span>for design and code.</span>
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
        <span>SERVICES</span>
        <span className='stroke'>SERVICES</span>
        <span>SERVICES</span>
        <span className='stroke'>SERVICES</span>
      </Marquee>

      {/* OUR SERVICES SECTION */}
      <section className='our-services'>
        <div className='title'>
          <h4 className='rounder-bd'>FEATURED SERVICES</h4>
          <h2>Our Services</h2>
        </div>
        <div className='services'>
          <div className='service'>
            <div className='icon'></div>
            <h4 className='service-title'>Brand Strategy & Art Direction</h4>
            <p>
              Creating a higher spacing and how people move through a unique.
            </p>
          </div>
          <div className='service'>
            <div className='icon'></div>
            <h4 className='service-title'>Brand Strategy & Art Direction</h4>
            <p>
              Creating a higher spacing and how people move through a unique.
            </p>
          </div>
          <div className='service'>
            <div className='icon'></div>
            <h4 className='service-title'>Brand Strategy & Art Direction</h4>
            <p>
              Creating a higher spacing and how people move through a unique.
            </p>
          </div>
        </div>
      </section>

      {/* SUBSIDIARIES SECTION */}
      <div ref={triggerRef} className='subsidiaries'>
        <div ref={sectionRef} className='wrapper'>
          {subsidiaries.map((subsidiary, subIndex) => {
            const { subBranch, subImg, subInfo, subName, subPoints } =
              subsidiary;
            return (
              <div className='sub' key={subIndex}>
                <div className='img'>
                  <img src={subImg} alt={subName} />
                </div>
                <div className='text'>
                  <h5>{subBranch}</h5>
                  <h2>{subName}</h2>
                  <p>{subInfo}</p>
                  <ul>
                    {subPoints.map((point, pointIndex) => {
                      return <li key={pointIndex}>{point}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Services;
