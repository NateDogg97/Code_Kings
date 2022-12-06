import React, { useState } from "react";
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import "../index.css";
import ProfileIcon from "../components/ProfileIcon";
import ProjectCard from "../components/ProjectCard";
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProjectOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

const Profile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { _id: userParam } = useParams();
  const { data } = useQuery(QUERY_ME, {
    variables: { _id: userParam },
  });

  const me = data?.me || {}

  if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
    return <Navigate to="/me" />;
  }

  if (!me?._id) {
    return (
      <h4>
        Login or create an account first
      </h4>
    );
  }

  return (
    <Layout>
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
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <ProjectOutlined />,
              label: <Link to="/newproject">Create a Project</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div className="wrapper">
            <div className="content-profile">
              <div style={{textAlign:"center",marginBottom:'25px',fontWeight:"bolder", fontSize:"24px"}}>
                <ProfileIcon />
                {me.firstName} {me.lastName}
              </div>
              <div>
                <div className="section half">
                  <h2>Created Projects</h2>
                  <hr style={{ border: "1px solid grey" }} />
                  {me.createdProjects.map((project) => (
                    project.name
                  ))}
                </div>
                <div className="section half">
                  <h2>Developer Projects</h2>
                  <hr style={{ border: "1px solid grey" }} />
                  <div className="break">
                  {me.developingProjects.map((project) => (
                    project.name
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
