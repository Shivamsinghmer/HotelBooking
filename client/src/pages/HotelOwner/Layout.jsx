import React from 'react'
import Navbar from '../../components/HotelOwner/Navbar'
import Sidebar from '../../components/HotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className='flex-1 p-4 pt-10 h-full md:px-10 bg-gray-50'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout