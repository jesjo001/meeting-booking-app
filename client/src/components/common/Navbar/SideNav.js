import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { Switch } from 'antd';
import { AppstoreOutlined, DatabaseOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 256,
    paddingTop: "100px"
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '35px',
  },
  category: {
    height: '20px',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '0px',
    justifyContent: 'space-between',
    fontWeight: 'normal'
  },
  jobType: {
    height: '30px',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '0px',
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 'normal',
    paddingRight: '0px'
  },
  menuTitle: {
    fontWeight: 'bold',
    color: 'grey',
    paddingLeft: '10px'
  }
}

const dataCategory = [
  { id: "0", name: "Mr Adeshina", count: "20" },
  { id: "1", name: "Highest Authority", count: "10" },
  { id: "2", name: "Governors Meetings", count: "30" },
  { id: "3", name: "CEO Fintech", count: "50" },
  { id: "4", name: "NNPC Chairman", count: "50" },
  { id: "5", name: "Pastors forum", count: "10" },
  { id: "6", name: "Counseling (Mr Adenuga)", count: "20" },
  { id: "7", name: "Project Management", count: "60" },
  { id: "8", name: "Education / Teaching", count: "120" },
]

const dataType = [
  { id: "0", name: "All ", count: "200" },
  { id: "1", name: "Upcoming Today", count: "50" },
  { id: "2", name: "This month ", count: "130" },
]

export default function SideNav() {

  const [category, setCategory] = useState(dataCategory);
  const [jobType, setJobType] = useState(dataType);
  const [showRemote, setShowRemote] = useState(true)
  const [showFullTime, setShowFullTime] = useState(true)
  const [showContract, setShowContract] = useState(true)
  const [showPartTime, setShowPartTime] = useState(true)

  const handleClick = e => {
    console.log('click ', e);
  };

  const displayCategories = () => {
    if (category.length > 0) return (
      category.map((category) => (
        <Menu.Item style={styles.category} key={category.key}> <span>{category.name} </span>  <span>({category.count})</span></Menu.Item>
      ))
    )
  }

  const setJobTypeSort = (key) => {
    if (key == "0") setShowFullTime(!showFullTime)
    if (key == "1") setShowPartTime(!showPartTime)
    if (key == "2") setShowContract(!showContract)
    if (key == "3") setShowRemote(!showRemote)

  }
  const displayType = () => {
    if (category.length > 0) return (
      jobType.map((category) => (
        <Menu.Item style={styles.jobType} key={category.key}> <span>{category.name} </span>  <span>({category.count})</span> <span style={{ paddingLeft: "10px", paddingRight: "10px", float: "right" }}><Switch defaultChecked onChange={() => setJobTypeSort(category.key)} /></span> </Menu.Item>
      ))
    )
  }

  return (
    <Menu
      onClick={handleClick}
      style={styles.container}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1', 'sub2']}
      mode="inline"
    >
      <LogoContainer >
        <img style={styles.image} src="https://joeschmoe.io/api/v1/random" />
      </LogoContainer>
      <SubMenu key="sub1" title="My Appointments" icon={<DatabaseOutlined />} style={styles.menuTitle}>
        {displayCategories()}
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} style={styles.menuTitle} title="Category">
        {displayType()}
      </SubMenu>
    </Menu>
  );
}

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 150px;
  
`