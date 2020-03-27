import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { router } from '../../routes';

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState('Todo');
  const location = useLocation();

  useEffect(() => {
    const matchRoute = router.find((route) => route.router === location.pathname);
    if (matchRoute) setSelectedMenu(matchRoute.name);
  }, [location]);

  const handleClick = (e) => {
    if (e.key !== undefined) {
      setSelectedMenu(e.key);
    }
  };

  return (
    <Layout.Sider width={200}>
      <Menu theme="dark" selectedKeys={[selectedMenu]} onClick={handleClick}>
        {router.map((route) => (
          <Menu.Item key={route.name}>
            <Link to={route.router}>{route.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
