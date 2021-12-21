import './App.css';
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';
import Navbarnew from './components/common/Navbar/Navbarnew';
import SideNav from './components/common/Navbar/SideNav';
import Login from './pages/Auth/Login'
import MainMenu from './components/common/Navbar/MainMenu';
import { Outlet, Link } from "react-router-dom";
import useToken from './pages/Auth/helpers/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <Navbarnew />
      {/* <SideNav /> */}
      <Outlet />
    </div>
  );
}

export default App;
