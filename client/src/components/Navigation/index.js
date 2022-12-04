import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Button } from 'antd';
import Auth from '../../utils/auth';

import './style.css';

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const items = [
    {
      label: <Link to='/login'>
               Login
             </Link>,
      key: 'login',
      type: 'loggedOut'
    },
    {
      label: 'Profile',
      key: 'SubMenu',
      children: [
        {
          label: <Link to="/profiles/:profileId">
                  My Profile
                 </Link>,
          key: 'my-profile'
        },
        {
          label: 'Developing',
          key: 'developing'
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
      type: 'loggedIn'
    },
  ];

const Nav = () => {

  const [current, setCurrent] = useState();
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu 
      mode="horizontal" 
      onClick={onClick}
      items={items} 
      current={[current]}
    />
    )
}

export default Nav;