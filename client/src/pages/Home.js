import React from "react";
import { Layout, Button } from "antd";
import ProfileIcon from "../components/ProfileIcon";
import ProjectCard from "../components/ProjectCard";

const { Sider, Content } = Layout;

function Home() {
  return (
    <Layout className="mainLayout">
      <Sider
        breakpoint="lg"
        style={{backgroundColor:'transparent'}}
        collapsedWidth="0"
      >
        <div className="icon-projPage">
          <Button className="create-new-proj" type="primary" style={{backgroundColor:'navy',color:'white'}}>
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
