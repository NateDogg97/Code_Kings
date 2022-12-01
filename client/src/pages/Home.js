import React from "react";
import { Layout } from "antd";
import NewsFeed from "../components/NewsFeed";
import ProfileIcon from "../components/ProfileIcon";
import ProjectCard from "../components/ProjectCard";


const { Sider, Content } = Layout;


function Home() {
  return(
    <Layout className="mainLayout">
      <Sider>
      <div className='icon-projPage'>
        <ProfileIcon />
      </div>
      </Sider>
      <Content>
      <div className="container-list"> 
        <NewsFeed />
        <ProjectCard />
      </div>
      </Content>
    </Layout>
  )
}

export default Home;