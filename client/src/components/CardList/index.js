import React from 'react';
import "./style.css";
import { Link,useNavigate} from 'react-router-dom';
import { ArrowRightOutlined,PushpinFilled } from '@ant-design/icons';
import { Avatar, Card, Typography} from 'antd';
const { Meta } = Card;
const { Title } = Typography

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
          <Link to={`/projects/${project._id}`} key={project._id}>
          <div  className="cards">
          <Card hoverable="true" className="project-card">
            <PushpinFilled style={{color:'red',fontSize:'24px'}} />

            <Meta title={project.name}/>

              <div className="price" style={{color:'grey'}}>${project.price} Bounty </div>
          </Card>
            </div> </Link>
        ))}
    </div>
  );
};

export default CardList;
