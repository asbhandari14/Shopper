import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import Header from './Header'
import "./AdminPanel.css"
import { useState } from 'react'
const AdminPanel = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>

  )
}

export default AdminPanel