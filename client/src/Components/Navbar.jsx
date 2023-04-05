import React, { useState } from "react";
import { Link } from 'react-scroll';
import logo from '../images/logo1.png';

function Navbar() {
  const [nav, setnav] =useState(false); 

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    }
    else {
      setnav(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='slider-container' className='logo' smooth={true} duration={1000}>
        <img src={logo} alt='' />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'> {/* changed 'for' to 'htmlFor' */}
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to='slider-container'smooth={true} duration={1000}>Home</Link></li>
        <li><Link to='about'smooth={true} duration={1000}>About</Link></li>
        <li><Link to='products'smooth={true} duration={1000}>Products</Link></li>
        <li><Link to='contact'smooth={true} duration={1000}>Contacts</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
    