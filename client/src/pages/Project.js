import React from 'react';
import { Card, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      display: 'flex',
    }}
  >
    <Card title="Card" size="small"
      style={{width: '100%',}}>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);
export default App;