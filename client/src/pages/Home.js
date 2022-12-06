import React from "react";
import { Layout, Button } from "antd";
import Auth from '../utils/auth';
import ProfileIcon from "../components/ProfileIcon";
import ProjectCard from "../components/ProjectCard";
import { redirect } from "react-router-dom";

const { Sider, Content } = Layout;


function Home() {
  const handleProjectButton = () => {
    Auth.loggedIn ? (
      window.location.replace('/newproject')
    ) : (
      window.location.replace('/login')
    )
  }
  return (
    <Layout className="mainLayout">
      <Sider
        breakpoint="lg"
        style={{backgroundColor:'transparent'}}
        collapsedWidth="0"
      >
        <div className="icon-projPage">
          <Button 
            className="create-new-proj" 
            type="primary" 
            onClick={handleProjectButton}
            style={{backgroundColor:'navy',color:'white'}}>
            Create A Project
          </Button>
        </div>
      </Sider>
      <Content>
        <div className="container-list">
          <ProjectCard />
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
