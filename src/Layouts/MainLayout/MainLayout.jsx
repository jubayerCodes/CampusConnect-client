import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ToastContainer />
        </>
    );
};

export default MainLayout;