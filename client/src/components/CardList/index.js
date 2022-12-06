import React from 'react';
import "./style.css";
import { Link,useNavigate} from 'react-router-dom';
import { ArrowRightOutlined,PushpinFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const CardList = ({
  projects
}) => {
  let navigate = useNavigate(); 
  const routeChange = (project) =>{ 
    let path = `/projects/${project._id}`; 
    navigate(path);
  }

  if (!projects.length) {
    return <h3>no open bounties</h3>;
  }

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <Link to={`/projects/${project._id}`}>
          <div key={project._id} className="cards" onClick={routeChange}>
          <Card
            hoverable="true"
            className="project-card"
  >
    <PushpinFilled style={{color:'red',fontSize:'24px'}} />
    <Meta
    
      title={<Link to={`/projects/${project._id}`}>{project.name}</Link>}
    />
    <div className="price" style={{color:'grey'}}>${project.price} Bounty </div>
  </Card>
          </div> </Link>
        ))}
    </div>
  );
};

export default CardList;
