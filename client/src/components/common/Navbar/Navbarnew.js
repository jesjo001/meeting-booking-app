import React, { useState, useEffect } from 'react';
import { Menu, Input, Space } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, ImportOutlined, DashboardOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import CreateModal from "../../modal/CreateModal"
import style from "./Navbar.css"

const { SubMenu } = Menu;
const { Search } = Input;
export default class Navbarnew extends React.Component {

    state = {
        current: 'mail',
        openCreate: false,
        meetDate: ""
    };

    styles = {
        nav: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'grey'
        }

    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    toggleCreateModal = () => {
        this.setState({ openCreate: !this.state.openCreate });
        // this.state.openCreate = !this.state.openCreate;
    }

    handleDateChange = (newValue) => {
        this.setState({ meetDate: newValue });
    };


    onSearch = value => console.log(value);

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'fixed',
                width: '100%',
                top: '0',

            }}>
                <Space direction="horizontal" style={{ float: "right" }}>
                    <Menu.Item key="home" icon={<AppstoreOutlined />}>
                        <Link to="/">
                            Appointments
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="job" icon={<ImportOutlined />} onClick={this.toggleCreateModal}>
                        Create
                    </Menu.Item>
                    <Menu.Item key="profile" icon={<ProfileOutlined />}>
                        <Link to="/profile" >Profile</Link>
                    </Menu.Item>
                </Space>


                <Space direction="horizontal" style={{ paddingTop: "10px" }}>
                    <Menu.Item key="login" icon={<MailOutlined />}>
                        <Link to="/login" >Login </Link>
                    </Menu.Item>
                    {/* <SubMenu key="SubMenu" icon={<DashboardOutlined />} title="Dashboard">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu> */}
                    <CreateModal
                        toggleModal={this.toggleCreateModal}
                        open={this.state.openCreate}
                        
                    />
                    <Search placeholder="input search text" onSearch={this.onSearch} style={{ width: 200, marginTop: "15px" }} />

                </Space>

            </Menu>
        );
    }
}

