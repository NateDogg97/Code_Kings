
import './App.css';
import AppHeader from "./components/common/header";
import AppList from "./components/home/projectList";
import AvatarApp from "./components/home/avatar";
import AppFooter from "./components/common/footer";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>

        <AppHeader />
        <div className="container-avatar">
          <AvatarApp />
        </div>
      </Header>

      <Content>

        <div className="container-list">
          <AppList />
        </div>

      </Content>
<Footer>
  <AppFooter />
</Footer>
    </Layout>
  );
}

export default App;
