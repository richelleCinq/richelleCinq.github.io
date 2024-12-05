import { Outlet } from "react-router-dom";
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import React from "react";
import '../css/Layout.css';

const Layout = () => {
  return (
    <>
      <div className="main">
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    
    </>
  )
};

export default Layout;