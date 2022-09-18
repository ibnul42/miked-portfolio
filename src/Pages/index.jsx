import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

function Layout() {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default Layout