import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './layout.scss'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
       <Navbar/>
       <Outlet />
    </div>
  )
}

export default Layout