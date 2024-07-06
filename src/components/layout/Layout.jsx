import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../footer/Footer';
import {ExpenseProvider} from '../context/ExpenseContext';

const Layout = () => {
    return (
        <>
            <ExpenseProvider>
                <Header />
                <Outlet />
                <Footer />
            </ExpenseProvider>
        </>
    )
}

export default Layout
