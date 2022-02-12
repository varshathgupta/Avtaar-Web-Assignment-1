import React from 'react'

import './navbar.css'
import logo from '../../images/logo.png'
const Navbar= () => {
  return (
      
      <container className="navbar">
      <img className="logo" src={logo} alt="log" />
      <a href="#" className="link1">
       ASSOCIATION  
      </a>
      <a href="#" className="link2">
       INTERNSHIP
      </a>
      <a href="#" className="link3">
       ABOUT US 
      </a>
      <a href="#" className="link4">
       CONTACT US  
      </a>      
      </container>

     
      
  );
}

export default Navbar;