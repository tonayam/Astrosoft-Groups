import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const Navbar = () => {
  const { showNav, setShowNav } = useGlobalContext();
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const scroll = window.addEventListener(`scroll`, () =>
      setScrollHeight(window.scrollY)
    );

    return () => window.removeEventListener(`scroll`, scroll);
  });

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <nav className={`navbar ${scrollHeight > 200 ? `bg` : null}`}>
      <div className='logo'></div>
      <ul className={`links ${showNav ? `show` : null}`}>
        <li onClick={closeNav}>
          <Link to='/'>Home</Link>
        </li>
        <li onClick={closeNav}>
          <Link to='/about'>About</Link>
        </li>
        <li onClick={closeNav}>
          <Link to='services'>Services</Link>
        </li>
        <li onClick={closeNav}>
          <Link to='our-team'> Our Team</Link>
        </li>
        <li onClick={closeNav}>
          <Link to='contact-us'>Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={() => setShowNav(!showNav)}>
        <span className={showNav ? `clicked` : null}></span>
      </div>
    </nav>
  );
};

export default Navbar;
