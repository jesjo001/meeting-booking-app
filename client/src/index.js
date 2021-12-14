import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Joblisting from "./pages/Joblisting";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import RecruiterRegister from "./pages/Auth/RecruiterRegister";
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/jobs" element={<Joblisting />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
