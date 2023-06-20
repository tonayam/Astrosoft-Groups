import React from 'react';
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className='footer'>
      <button className='btn'>
        <h2>
          <span>Let's </span>
          <span className='stroke'>Discuss</span> <BsArrowUpRight />
        </h2>
      </button>
      <div className='grid'>
        {/* COMPANY ADDRESS */}
        <div className='item'>
          <h4>Address</h4>
          <p>
            Green Villa Road, by Isaac Boro Expressway, Yenegoa, Bayelsa state,
            NIgeria
          </p>
        </div>

        {/* COMPANY CONTACT */}
        <div className='item'>
          <h4>Say Hello</h4>
          <p>astrosoftgroups@gmail.com</p>
          <h4 className='num'>+23481818181</h4>
        </div>

        {/* COMPANY SOCIAL MEDIA ACCOUNTS */}
        <div className='item'>
          <h4>Socials</h4>
          <ul>
            <li>
              <a href='#d' target='_blank'>
                Facebook
              </a>
            </li>
            <li>
              <a href='#d' target='_blank'>
                Twitter
              </a>
            </li>
            <li>
              <a href='#d' target='_blank'>
                Instagram
              </a>
            </li>
            <li>
              <a href='#d' target='_blank'>
                Linkendin
              </a>
            </li>
          </ul>
        </div>

        {/* COMPANY NEWSLETTER */}
        <div className='item'>
          <h4>Newsletter</h4>
          <div className='input-container'>
            <input type='text' />
            <BsArrowRight />
          </div>
        </div>
      </div>
    </footer>
  );
};

export const MiniFooter = () => {
  return (
    <div className='mini-footer'>
      <div className='logo'></div>
      <div className='copyright'>
        <p>&copy; {new Date().getFullYear()} Astrosoft Groups</p>
      </div>
    </div>
  );
};
