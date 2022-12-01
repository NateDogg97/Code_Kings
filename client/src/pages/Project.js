import React, { useState } from 'react';
import { Card, Space, Layout, Button} from 'antd';
import Icon from '../components/ProfileIcon';

const { Sider, Content } = Layout;

const App = () => {

  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Layout>
      <Sider>
        <div className='icon-projPage'>
          <Icon/>
          <Card className='price-projCard' title='Price' size='small'>
            <p></p>
          </Card>
          <Button className='claim-projCard' type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
            Claim Project
          </Button>
          <Button className='delete-projCard' type="primary" loading={loadings[0]} onClick={() => enterLoading(0)} danger>
            Delete Project
          </Button>
        </div>
      </Sider>
      <Content>
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: 'flex',
            gap: '16px',
            width: '100%',
            padding: '16px',
          }}
          >
          <div className='row-1'>
            <Card title="Card" className='title-projCard'>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className='row-2'>
            <Card title="Owner" className='owner-projCard'>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Developers" className='developers-projCard'>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className='row-3'>
            <Card title="Description" className='description-projCard'>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className='row-4'>
            <Card title="Resources" className='resources-projCard'>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Details" className='details-projCard'>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </Space>
      </Content>
      <Sider>Sider</Sider>
    </Layout>
  )
};

export default App