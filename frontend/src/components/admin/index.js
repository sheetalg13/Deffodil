import React from 'react'
import Navbar from './navbar'
import Manageshope from './manageshope'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Admin
