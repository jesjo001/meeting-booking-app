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
  { id: "0", name: "Business development", count: "20" },
  { id: "1", name: "Customer support", count: "10" },
  { id: "2", name: "Design & development", count: "30" },
  { id: "3", name: "Finance", count: "50" },
  { id: "4", name: "Human Resources", count: "50" },
  { id: "5", name: "Marketing", count: "10" },
  { id: "6", name: "Sales", count: "20" },
  { id: "7", name: "Project Management", count: "60" },
  { id: "8", name: "Education / Teaching", count: "120" },
  { id: "9", name: "Information Technology", count: "220" },
  { id: "10", name: "Journalism", count: "320" },
  { id: "11", name: "Health Sector", count: "120" },
  { id: "12", name: "Law", count: "20" },
  { id: "13", name: "Engineering ", count: "220" },
  { id: "14", name: "Civil Service ", count: "320" },
  { id: "15", name: "Makeup Artist", count: "250" },
  { id: "16", name: "Others", count: "20" },
]

const dataType = [
  { id: "0", name: "Full Time", count: "200" },
  { id: "1", name: "Part Time", count: "50" },
  { id: "2", name: "Contract", count: "130" },
  { id: "3", name: "Remote", count: "500" },

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
      <SubMenu key="sub1" title="Job Category" icon={<DatabaseOutlined />} style={styles.menuTitle}>
        {displayCategories()}
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} style={styles.menuTitle} title="Job Type">
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