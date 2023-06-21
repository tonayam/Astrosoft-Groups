import React from 'react';

const Header = () => {
  return (
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
  );
};

export default Header;
