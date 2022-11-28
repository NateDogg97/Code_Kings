import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div className='container'>
        <div className='logo-img'>
          <Link>
            <img src='#'></img>
          </Link>
        </div>
        <div className='nav-bar'>
          {Auth.loggedIn() ? (
            <>
              <Link className="profile-link" to="/profile">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="login-btn" to="/login">
                Login
              </Link>
              <Link className="signup-btn" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header;
