import './App.css';
import React,{ useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Layout from './compnents/layout';
import Property from './compnents/property';
import Login from './compnents/login';
import About from './compnents/about';
import Contact from './compnents/contact';
import Gallery from './compnents/gallery';
import Services from './compnents/services';
// import ReactDOM from "react-dom/client";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();
  if(!token){
    return<Login setToken={setToken}/>
  }
  return (
   <>
   <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route index element={<Layout/>} />
        <Route path="property" element={<Property />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="pages/about" element={<About />} />
        <Route path="pages/services" element={<Services />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </Router>
 
   </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
