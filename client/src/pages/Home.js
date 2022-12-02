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
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="icon-projPage">
          <ProfileIcon />
          <Button className="create-new-proj" type="primary">
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
