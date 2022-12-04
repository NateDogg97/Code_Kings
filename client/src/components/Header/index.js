import React from 'react';
import { Link } from "react-router-dom";
import Navigation from '../Navigation';
import logo from '../../assets/logo-1-1.svg';
import './style.css';

const Header = () => {


  return (
    <header>
      <div className='container'>
        <div className='logo-img'>
          <Link to="/">
            <img src={logo} alt="Code Kings Logo"></img>
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
