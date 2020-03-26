import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const Sidebar = ({ history, match }) => {
  const menuList = [
    { name: 'Todo', router: '/' },
    { name: 'About', router: '/about' },
    { name: 'Done', router: '/done' },
  ];
  const [selectedMenu, setSelectedMenu] = useState('Todo');

  useEffect(() => {
    // const currRoute = match.url;
    console.log({ match, history });
    // setSelectedMenu(menuList.find((menu) => menu.router === currRoute).name);
  }, [history, match]);

  const handleClick = (e) => {
    if (e.key !== undefined) {
      setSelectedMenu(e.key);
      const matchRoute = menuList.find((menu) => menu.key === e.key);
      if (matchRoute) history.push(matchRoute.path);
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
