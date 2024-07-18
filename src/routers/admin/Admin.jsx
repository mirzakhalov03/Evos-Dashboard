import { MdFastfood } from "react-icons/md"; 
import { GiMeal } from "react-icons/gi"; 
import React, { useState } from 'react'


import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    UsergroupAddOutlined,
  } from '@ant-design/icons';

import { Button, Layout, Menu, theme, Input } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
  const { Search } = Input;
  const { Header, Sider, Content } = Layout;

const onSearch = (value, _e, info) => console.log(info?.source, value);


const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onSearchChange = (e) => setSearchQuery(e.target.value);

    return (
        <>
            <Layout>
                <Sider style={{minHeight: '100vh', backgroundColor: '#309b42'}} trigger={null} collapsible collapsed={collapsed}>
                    <div style={{ height: 30, marginTop: 16, marginBottom: 16, textAlign: 'center' }} className="demo-logo-vertical">
                        <svg width="86" height="20" viewBox="0 0 132 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.6943 2.95244H0V37.1855H23.0393V30.8861H7.48809V22.4742H21.6592V16.5566H7.48809V9.11185H22.6943V2.95244ZM127.4 0.878098C125.342 0.878098 123.669 2.54521 123.669 4.58138C123.669 6.63027 125.342 8.29739 127.4 8.29739C129.457 8.29739 131.118 6.63027 131.118 4.58138C131.118 2.54521 129.457 0.878098 127.4 0.878098ZM125.47 6.94843H126.71V5.19223H127.464C128.039 5.19223 128.256 5.39585 128.307 5.95579C128.345 6.27394 128.333 6.65573 128.448 6.94843H129.713C129.572 6.77026 129.572 6.56664 129.559 6.3503C129.495 5.66309 129.483 5.61219 129.406 5.35767C129.329 5.05224 129.112 4.84863 128.805 4.74682C129.291 4.53048 129.547 4.13597 129.547 3.58875C129.547 2.67247 128.831 2.22706 127.936 2.22706H125.47V6.94843ZM126.71 4.31413V3.18151H127.566C128.077 3.18151 128.32 3.35968 128.32 3.72873C128.32 4.22505 127.988 4.31413 127.579 4.31413H126.71ZM25.5311 2.95244L36.776 37.1855H45.3247L56.7613 2.95244H48.9409L41.1206 26.992L33.3897 2.95244H25.5311ZM74.3059 2.13798C64.0321 2.13798 57.2724 9.25184 57.2724 20.1199C57.2724 30.8352 64.0705 38 74.2676 38C84.3497 38 91.1605 30.7971 91.1605 20.1199C91.1605 9.39183 84.3497 2.13798 74.3059 2.13798ZM121.33 13.146C121.19 5.49766 115.618 2.22706 108.373 2.22706C100.361 2.22706 95.4285 6.27395 95.4285 12.4715C95.4285 19.4454 100.514 20.8326 106.111 22.4233C113.203 24.4468 115.248 24.9303 115.248 27.6155C115.248 30.4534 113.114 32.1842 109.152 32.1842C104.565 32.1842 101.805 30.3644 101.652 25.7448H94.1762C94.2656 33.4822 99.492 37.9618 108.807 37.9618C115.81 37.9618 122.685 34.9712 122.685 26.9029C122.685 21.1762 118.774 18.8091 112.641 17.0911C105.779 15.1567 102.674 14.9277 102.674 11.937C102.674 9.49364 104.463 8.04287 107.938 8.04287C111.951 8.04287 113.893 9.82451 114.187 13.146H121.33ZM74.2165 8.28466C79.9539 8.28466 83.5319 12.7642 83.5319 19.9672C83.5319 27.2847 80.005 31.8024 74.3059 31.8024C68.4662 31.7515 64.9011 27.3356 64.9011 19.9672C64.9011 12.8533 68.5173 8.28466 74.2165 8.28466ZM127.4 0C124.857 0 122.787 2.04889 122.787 4.58138C122.787 7.12659 124.857 9.17549 127.4 9.17549C129.943 9.17549 132 7.12659 132 4.58138C132 2.04889 129.943 0 127.4 0Z" fill="white"></path></svg>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        style={{backgroundColor: '#309b42', color: '#fff'}}
                        items={[
                            {
                                key: '1',
                                icon: <GiMeal />,
                                label: <NavLink to={'/admin/recipes'}>Recipes</NavLink>,
                            },
                            {
                                key: '2',
                                icon: <MdFastfood />,
                                label: <NavLink to={'/admin/menu'}>Menu</NavLink>,
                            },
                            {
                                key: '3',
                                icon: <UsergroupAddOutlined />,
                                label: <NavLink to={'/admin/employees'}>Employees</NavLink>,
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: '#309b42',
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                                color: 'white',
                            }}
                        />
                        <Search placeholder="Search in Evos" className='search' onChange={onSearchChange} enterButton />
                        <Menu
                            theme="dark"
                            mode="vertical"
                            style={{backgroundColor: '#309b42'}}
                            defaultSelectedKeys={['1']}
                            items={[
                                {
                                    key: '1',
                                    icon: <UserOutlined />,
                                    label: 'Manager',
                                },
                            ]}
                        />
                    </Header>
                    <Content style={{ height: '700px', overflowY: 'auto', margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG,}}>
                        <Outlet context={[searchQuery]} />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default Admin;
