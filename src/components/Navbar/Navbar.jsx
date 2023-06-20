import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const Navbar = () => {
  const { showNav, setShowNav } = useGlobalContext();

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <nav className='navbar'>
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
          <Link to='our-team'> OurTeam</Link>
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
