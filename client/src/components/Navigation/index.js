import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Button } from 'antd';
import Auth from '../../utils/auth';

import './style.css';

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const loggedInItems = [
    {
      label: 'Profile',
      key: 'SubMenu',
      children: [
        {
          label: <Link to="/me">
                  My Profile
                 </Link>,
          key: 'my-profile'
        },
        {
          label: 'Settings',
          key: 'settings'
        },
        {
          label: <Button type="link" onClick={logout}>Logout</Button>,
          key: 'logout-btn',
        }
      ],
      // type: 'loggedIn'
    },
  ];

  const loggedOutItems = [
    {
      label: <Link to='/login'>
               Login
             </Link>,
      key: 'login',
      // type: 'loggedOut'
    }
  ];

const Nav = () => {

  const [current, setCurrent] = useState();
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
    {Auth.loggedIn() ? (
    <Menu 
      mode="horizontal" 
      onClick={onClick}
      items={loggedInItems} 
      current={[current]}
    />
    ) : (
      <Menu 
      mode="horizontal" 
      onClick={onClick}
      items={loggedOutItems} 
      current={[current]}
    />
    )}
    </div>
    )
}

export default Nav;