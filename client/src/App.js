import './App.css';
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/common/Navbar/Navbar';
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
      {/* <Navbar /> */}
      {/* <MainMenu /> */}
      <Navbarnew />
      {/* <SideNav /> */}
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        colored
      />
    </div>
  );
}

export default App;
