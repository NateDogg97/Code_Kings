import React from 'react';
import { Menu } from 'antd';

function AppHeader() {
    return (
        <div className="container-fluid">
            <div className ="header">
            <div className="logo">
          <i className="fas fa-crown"></i>
          <a href="http://google.com">   E-Commerce Site</a>
        </div>
                <Menu mode="horizontal">
                <Menu.Item key="1">Homepage</Menu.Item>
                <Menu.Item key="1">Calendar</Menu.Item>
                <Menu.Item key="1">Settings</Menu.Item>
                </Menu>
            </div>
            </div>
    )
}

export default AppHeader;