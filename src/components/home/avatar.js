import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const AvatarApp = () => (
  <>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
    </div>
  </>
);
export default AvatarApp;