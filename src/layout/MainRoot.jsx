import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'
import ScrollToTop from '../shared/ScrollToTop'

function MainRoot() {
    return (
        <div className='pt-12 lg:pt-16'>
            <ScrollToTop></ScrollToTop>
            {/* navbar will go here */}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainRoot