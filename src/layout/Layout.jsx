import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout