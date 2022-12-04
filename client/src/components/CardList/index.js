import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { ArrowRightOutlined,PushpinFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const CardList = ({
  projects
}) => {
  if (!projects.length) {
    return <h3>no open bounties</h3>;
  }

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <div key={project._id} className="cards">
          <Card
            hoverable="true"
            actions={[
      <ArrowRightOutlined  key="arrow"/>
    ]}
    className="project-card"
  >
    <PushpinFilled style={{color:'red',fontSize:'24px'}} />
    <Meta
      title={<Link to={`/projects/${project._id}`}>
              {project.name}
            </Link>}
    />
    <div className="price" style={{color:'grey'}}>${project.price} Bounty </div>
  </Card>
          </div>
        ))}
    </div>
  );
};

export default CardList;