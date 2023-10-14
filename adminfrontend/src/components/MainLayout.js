import Avvvatars from 'avvvatars-react';
import authService from '../features/auth/authServices';
import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import {LiaUsersSolid} from 'react-icons/lia'
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsListStars } from 'react-icons/bs'
import { BiSolidAddToQueue } from 'react-icons/bi'
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { useNavigate, Outlet,Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Layout, Menu,  theme } from 'antd';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className='logo'>Bazzar</span>
          
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
           onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: 'dashboard',
              icon: <MdOutlineDashboardCustomize className="fs-4"/>,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <LiaUsersSolid className="fs-5"/>,
              label: 'Customers',
            },
             {
              key: 'providers',
              icon: <MdOutlineDashboardCustomize className="fs-4"/>,
              label: 'Providers',
              children: [{
                key: 'add-provider',
              icon: <BiSolidAddToQueue/>,
              label: ' Add Provider',
              },{
                key: 'provider-list',
              icon: <BsListStars/>,
              label: 'Provider list',
              },
              
            ]
            },
           
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header  className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoMdNotificationsOutline className="fs-4" />
              <span className="badge bg-danger rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
              
                 <Avvvatars value={user.firstname} />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                 <h5 className="mb-0">ِ{user.firstname} {user.lastname}</h5>
                <p className="mb-0">{user.email}</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
      </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;