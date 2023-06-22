import React from 'react';
import Marquee from 'react-fast-marquee';
import { teamMembers } from '../../data/data';

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
    </main>
  );
};

export default OurTeam;
