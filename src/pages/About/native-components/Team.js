import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Marquee from 'react-fast-marquee';
import { teamMembers } from '../../../data/data';
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const teamTriggerRef = useRef(null);
  const teamSectionRef = useRef(null);

  useEffect(() => {
    const translate = gsap
      .timeline()
      .to(teamSectionRef.current, {
        translateY:
          window.innerWidth < 600
            ? `-80px`
            : window.innerWidth < 1200
            ? `-150px`
            : `-190px`,
        ease: `none`,
        duration: 2,
        scrollTrigger: {
          trigger: teamTriggerRef.current,
          start:
            window.innerWidth < 600
              ? `top center`
              : window.innerWidth < 1200
              ? `top 20%`
              : `top top`,
          end: `bottom bottom`,
          pin: true,
          scrub: 1,
          pinSpacer: false,
          pinSpacing: false,
        },
      })
      .to(
        teamTriggerRef.current,
        {
          opacity: 0.1,
          scrollTrigger: {
            trigger: teamTriggerRef.current,
            start:
              window.innerWidth < 600
                ? `top center`
                : window.innerWidth < 1200
                ? `top 20%`
                : `top top`,
            scrub: 0.4,
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
      <div ref={teamSectionRef} className='container'>
        <Swiper
          slidesPerView={
            window.innerWidth < 600 ? 1 : window.innerWidth < 1200 ? 2 : 4
          }
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          className='mySwiper members'
        >
          {teamMembers.map((teamMember, memberIndex) => {
            const { memberImg, memberName, memberPosition, extraClass } =
              teamMember;
            return (
              <SwiperSlide
                className={`member-slide ${extraClass}`}
                key={memberIndex}
              >
                <img src={memberImg} alt={memberName} />
                <Marquee speed={10} className='mini-marquee top'>
                  <span>{memberPosition}</span>
                  <span>{memberPosition}</span>
                  <span>{memberPosition}</span>
                  <span>{memberPosition}</span>
                  <span>{memberPosition}</span>
                </Marquee>
                <Marquee speed={10} className='mini-marquee bottom'>
                  <span>{memberName}</span>
                  <span>{memberName}</span>
                  <span>{memberName}</span>
                  <span>{memberName}</span>
                  <span>{memberName}</span>
                </Marquee>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
