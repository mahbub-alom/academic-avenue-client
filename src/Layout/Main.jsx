import React from 'react';
import Navbar from '../Home/Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Home/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter =
      location.pathname.includes("login") ||
      location.pathname.includes("signUp");
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;