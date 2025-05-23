import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import Footer from '../../Components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ToastContainer />
            <Footer />
        </>
    );
};

export default MainLayout;