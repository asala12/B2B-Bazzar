import Avvvatars from 'avvvatars-react';
import authService from '../features/auth/authServices';
import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import { SiBrandfolder } from "react-icons/si";
import {BiCategoryAlt, BiLogoBlogger, BiSolidAddToQueue} from 'react-icons/bi'
import {LiaUsersSolid} from 'react-icons/lia'
import { AiOutlineShoppingCart, AiOutlineBgColors} from 'react-icons/ai'
import {MdOutlineCategory} from 'react-icons/md'
import {TbBrandAppgallery} from 'react-icons/tb'
import {RxDashboard} from 'react-icons/rx'
import {ImBlog} from 'react-icons/im'
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import {FaClipboardList} from 'react-icons/fa'
import {BsCartPlus, BsCardChecklist, BsListStars } from 'react-icons/bs'
import {RiDashboardLine, RiCouponLine} from 'react-icons/ri'
import {HiOutlineBookOpen} from 'react-icons/hi'
import { useNavigate, Outlet,Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Layout, Menu,  theme } from 'antd';
const { Header, Sider, Content } = Layout;
const ProviderMainLayout = () => {
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
              key: 'catalog',
              icon: <HiOutlineBookOpen className="fs-5"/>,
              label: 'Catalog',
              children: [{
                key: 'product',
              icon: <BsCartPlus/>,
              label: 'Add Product',
              },
              {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="fs-6" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <TbBrandAppgallery className="fs-6" />,
                  label: "Add Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="fs-6" />,
                  label: "Brand List ",
                },
                {
                  key: "category",
                  icon: <MdOutlineCategory className="fs-6" />,
                  label: "Add Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-6" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-6" />,
                  label: "Add Color",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className="fs-6" />,
                  label: "Color List",
                },
            ]
            },
            {
              key: 'orders',
              icon: <BsCardChecklist className="fs-5"/>,
              label: 'Orders',
            },
              {
              key: "marketing",
              icon: <RiCouponLine className="fs-4" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: 'blogs',
              icon: <BiLogoBlogger className="fs-5"/>,
              label: 'Blogs',
              children: [
                {
                  key: "add-blog",
                  icon: <BiSolidAddToQueue className="fs-6" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <BsListStars className="fs-6" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <RxDashboard className="fs-6" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <RiDashboardLine className="fs-6" />,
                  label: "Blog Category List",
                },
              ],
            },
             {
              key: "enquiries",
              icon: <FaClipboardList className="fs-5" />,
              label: "Enquiries",
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
export default ProviderMainLayout;