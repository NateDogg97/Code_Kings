import React, { useState } from 'react';
import Navigation from '../Navigation';
import { Link } from "react-router-dom";
import './style.css';

const Header = () => {


  return (
    <header>
      <div className='container'>
        <div className='logo-img'>
          <Link to="/">
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
