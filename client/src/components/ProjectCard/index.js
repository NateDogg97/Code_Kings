import "./style.css";
import React from 'react';
import { Link } from 'react-router-dom';
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
    className="project-card"
  >
    <PushpinFilled style={{color:'red',fontSize:'24px'}} />
    <Meta
      title={<Link to="/project">
              Project 1
            </Link>}
      description="$200 Bounty"
    />
  </Card>
  <Card
    hoverable="true"
    actions={[
      <ArrowRightOutlined key="arrow"/>
    ]}
    className="project-card"
  >
    <PushpinFilled style={{color:'red',fontSize:'24px'}}/>
    <Meta
      title={<Link to="/project">
              Project 2
            </Link>}
      description="$50 Bounty"
    />
  </Card>  
  <Card
    hoverable="true"
    actions={[
      <ArrowRightOutlined key="arrow"/>
    ]}
    className="project-card"
  >
    <PushpinFilled style={{color:'red',fontSize:'24px'}} />
    <Meta
      title={<Link to="/project">
              Project 3
            </Link>}
      description="$100 Bounty"
    />
  </Card>
  </div>
  
);
export default ProjectCard;