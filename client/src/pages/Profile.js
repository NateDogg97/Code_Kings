import React, { useState } from "react";
import "../index.css";
import ProfileIcon from "../components/ProfileIcon";
import ProjectCard from "../components/ProjectCard";
// import Calendar from "../components/Calendar";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProjectOutlined,
  HomeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

const Profile = () => {
  const [collapsed, setCollapsed] = useState(false);

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
              icon: <ProjectOutlined />,
              label: "Create A Project",
            },
            {
              key: "2",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "3",
              icon: <CalendarOutlined />,
              label: "Calendar",
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
              <div className="section">
                <ProfileIcon />
              </div>
              <div className="break">
                <div className="section half">
                  <h2>Owner</h2>
                  <hr style={{ border: "1px solid grey" }} />
                  <div className="break">
                    <h4>My Open Projects</h4>
                  </div>
                  <div className="break">
                    <h4>Pending Projects</h4>
                  </div>
                </div>
                <div className="section half">
                  <h2>Developer</h2>
                  <hr style={{ border: "1px solid grey" }} />
                  <div className="break">
                    <h4>Working On</h4>
                  </div>
                  <div className="break">
                    <h4>Completed Projects</h4>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="break">
                  <div className="section half">
                    <h2>Recommended Projects</h2>
                    <hr style={{ border: "1px solid grey" }} />
                    <div className="break">
                      <ProjectCard />
                    </div>
                    <div className="break"></div>
                  </div>
                  <div className="section half">
                    <h2>Calendar</h2>
                    <hr style={{ border: "1px solid grey" }} />
                    <div className="break">{/* <Calendar /> */}</div>
                    <div className="break"></div>
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
