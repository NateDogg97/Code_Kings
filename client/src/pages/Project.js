import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_PROJECT } from '../utils/queries';
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

  const { projectId } = useParams();
  const { data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { projectId: projectId }
  });
  const project = data?.project || {};

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
      <Sider        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
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
            <Card title={project.name} className='title-projCard'>

            </Card>
          </div>
          <div className='row-2'>
            <Card title="Owner" className='owner-projCard'>
              <p>{project.owner}</p>
            </Card>
            <Card title="Developers" className='developers-projCard'>
              {project.developers ? (
                <p>{project.developers.firstName} {project.developers.lastName}</p>
              ) : (
                <p>This project has not been claimed by any developers</p>
              )}
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
      <Sider         breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >Sider</Sider>
    </Layout>
  )
};

export default App