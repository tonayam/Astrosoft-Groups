import React from 'react';
import Marquee from 'react-fast-marquee';
import { reviews, teamMembers } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const OurTeam = () => {
  return (
    <main className='our-team-page'>
      <header>
        <div className='top'>
          <ul>
            <li>OUR STAFF</li>
          </ul>
          <h1>
            <span>Talented team.</span>
          </h1>
        </div>
        <div className='bottom'>
          <p>
            We're a diverse team that works as fancies attention to details,
            enjoys beers on Friday nights and aspires to design the dent in the
            universe.
          </p>
        </div>
      </header>

      {/* MARQUEE */}
      <Marquee className='big-marquee'>
        <span>OUR TEAM</span>
        <span className='stroke'>OUR TEAM</span>
        <span>OUR TEAM</span>
        <span className='stroke'>OUR TEAM</span>
      </Marquee>

      {/* TEAM MEMBERS */}
      <section className='team-members'>
        {teamMembers.map((teamMember, memberIndex) => {
          const { memberImg, memberName, memberPosition } = teamMember;
          return (
            <div className='member' key={memberIndex}>
              <img src={memberImg} alt='team member' />{' '}
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
            </div>
          );
        })}
      </section>

      {/* TESTIMONIALS */}
      <section className='testimonials'>
        <div className='left'>
          <h4 className='sub-title'>WHAT CLIENTS SAYS?</h4>
          <h2>Testimonials</h2>
        </div>
        <div className='right'>
          <Swiper
            slidesPerView={
              window.innerWidth < 600 ? 1 : window.innerWidth < 1200 ? 1 : 2
            }
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper members'
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
                <SwiperSlide className={`testimony`} key={reviewIndex}>
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default OurTeam;
