import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const Sidebar = () => {
  const menuList = [
    { name: 'Todo', router: '/' },
    { name: 'About', router: '/about' },
    { name: 'Done', router: '/done' },
  ];
  const [selectedMenu, setSelectedMenu] = useState('Todo');
  const location = useLocation();

  useEffect(() => {
    setSelectedMenu(menuList.find((menu) => menu.router === location.pathname).name);
  }, [location]);

  const handleClick = (e) => {
    if (e.key !== undefined) {
      setSelectedMenu(e.key);
    }
  };

  return (
    <Layout.Sider width={200}>
      <Menu theme="dark" selectedKeys={[selectedMenu]} onClick={handleClick}>
        {menuList.map((menu) => (
          <Menu.Item key={menu.name}>
            <Link to={menu.router}>{menu.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
