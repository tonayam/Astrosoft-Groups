import React, { useEffect, useRef } from 'react';
import { reviews } from '../../../data/data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const JourneyReviews = () => {
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
          // end: `1000 top`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 0.5,
        },
      }
    );

    return () => pin.kill();
  });

  return (
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
  );
};

export default JourneyReviews;
