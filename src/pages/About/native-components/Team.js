import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const teamTriggerRef = useRef(null);
  const teamSectionRef = useRef(null);

  useEffect(() => {
    const translate = gsap
      .timeline()
      .to(teamSectionRef.current, {
        translateY: `-180px`,
        ease: `none`,
        duration: 1,
        scrollTrigger: {
          trigger: teamTriggerRef.current,
          start: `top top`,
          end: `500 bottom`,
          pin: true,
          scrub: 0.5,
          pinSpacer: false,
          pinSpacing: false,
        },
      })
      .to(
        teamTriggerRef.current,
        {
          opacity: 0.2,
          scrollTrigger: {
            trigger: teamTriggerRef.current,
            start: `top top`,
            scrub: 0.5,
          },
        },
        `<`
      );
    return () => translate.kill();
  });

  return (
    <section className='team'>
      <div ref={teamTriggerRef} className='title'>
        <h2>TEAM</h2>
      </div>
      <div ref={teamSectionRef} className='members'></div>
    </section>
  );
};

export default Team;
