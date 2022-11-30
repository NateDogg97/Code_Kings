import "./style.css";
import React from 'react';
import { ArrowRightOutlined,PushpinFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const ProjectCard = () => (
  <div className="cards">
  <Card
    hoverable="true"
    actions={[
      <ArrowRightOutlined  key="arrow"/>
    ]}
  >
    <PushpinFilled style={{color:'red',fontSize:'24px'}} />
    <Meta
      title="Project 3"
      description="$200 Bounty"
    />
  </Card>
  <Card
    hoverable="true"
    actions={[
      <ArrowRightOutlined key="arrow"/>
    ]}
  >
    <PushpinFilled style={{color:'red',fontSize:'24px'}}/>
    <Meta
      title="Project 2"
      description="$50 Bounty"
    />
  </Card>  
  <Card
    hoverable="true"
    actions={[
      <ArrowRightOutlined key="arrow"/>
    ]}
  >
    <PushpinFilled style={{color:'red',fontSize:'24px'}} />
    <Meta
      title="Project 3"
      description="$100 Bounty"
    />
  </Card>
  </div>
  
);
export default ProjectCard;