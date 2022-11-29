import React, { useState } from 'react';
// import AuthService from "../../utils/auth";
import Navigation from '../Navigation';
import { Link } from "react-router-dom";
import './style.css';

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   AuthService.logout();
  // };

  return (
    <header>
      <div className='container'>
        <div className='logo-img'>
          <Link to="/home">
            <img src='#'></img>
          </Link>
        </div>
        <div className='navigation'>
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header;
