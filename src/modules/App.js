import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import ProductList from '@bit/hahayang.react-ui.product-list';
import Routes from '../routes';
import Sidebar from '../components/Sidebar';

const { Header, Content } = Layout;

function AppContainer() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <h1>TODO</h1>
      </Header>
      <Layout>
        <BrowserRouter>
          <Sidebar />
          <ProductList />
          <div id="anchor">testing</div>
          <Content>
            <Routes style={{ height: '100vh' }} />
          </Content>
        </BrowserRouter>
      </Layout>
    </Layout>
  );
}

export default AppContainer;
