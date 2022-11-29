import "./style.css";
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const ProfileIcon = () => (
  <>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
    </div>
  </>
);
export default ProfileIcon;