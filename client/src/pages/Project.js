import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_PROJECTS } from '../utils/queries';
import { UploadOutlined } from '@ant-design/icons';
import { Card, Space, Layout, Button, Empty, message, Upload} from 'antd';
import Icon from '../components/ProfileIcon';

const { Sider, Content } = Layout;

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

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

  const { _id: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_PROJECTS, {
    variables: { _id: userParam }
  });

  let project;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data) {
    project = data.projects;
  }

  return (
    <Layout>
      <Sider>
        <div className='icon-projPage'>
          <Icon/>
          <Card className='price-projCard' title='Price' size='small'>
            <p>{project.price}</p>
          </Card>
          <Button className='claim-projCard' type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
            Claim Project
          </Button>
          <Button className='delete-projCard' type="primary" loading={loadings[1]} onClick={() => enterLoading(1)} danger>
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
            width: '100%',
            padding: '16px',
          }}
          >
          <div className='row-1'>
            <Card title="Card" className='title-projCard'>
              <p>{project.title}</p>
            </Card>
          </div>
          <div className='row-2'>
            <Card title="Owner" className='owner-projCard'>
              <p>{project.owner}</p>
            </Card>
            <Card title="Developers" className='developers-projCard'>
              {project.map((developer) => {
                <p>{developer.firstName} {developer.lastName}</p>
              })}
              
            </Card>
          </div>
          <div className='row-3'>
            <Card title="Description" className='description-projCard'>
              <p>{project.description}</p>
            </Card>
          </div>
          <div className='row-4'>
            <Card 
              title="Resources" 
              className='resources-projCard' 
              extra={
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              }>
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Card>
            <Card title="Details" className='details-projCard'>
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Card>
          </div>
        </Space>
      </Content>
      <Sider>Sider</Sider>
    </Layout>
  )
};

export default App