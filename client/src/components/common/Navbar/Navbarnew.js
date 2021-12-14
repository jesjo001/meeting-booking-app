import React from 'react';
import { Menu, Input, Space } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, ImportOutlined, DashboardOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import style from "./Navbar.css"

const { SubMenu } = Menu;
const { Search } = Input;
export default class Navbarnew extends React.Component {
    state = {
        current: 'mail',
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

    onSearch = value => console.log(value);

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Space direction="horizontal" style={{ float: "right" }}>
                    <Menu.Item key="home" icon={<AppstoreOutlined />}>
                        <Link to="/">
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="job" icon={<ImportOutlined />}>
                        <Link to="/jobs" >Jobs</Link>
                    </Menu.Item>
                    <Menu.Item key="profile" icon={<ProfileOutlined />}>
                        <Link to="/profile" >Profile</Link>
                    </Menu.Item>
                </Space>


                <Space direction="horizontal" style={{}}>
                    <Menu.Item key="login" icon={<MailOutlined />}>
                        <Link to="/login" >Login </Link>
                    </Menu.Item>
                    <SubMenu key="SubMenu" icon={<DashboardOutlined />} title="Dashboard">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Search placeholder="input search text" onSearch={this.onSearch} style={{ width: 200, marginTop: "5px" }} />
                </Space>

            </Menu>
        );
    }
}

