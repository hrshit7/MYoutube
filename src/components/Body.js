import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {

  const menu = useSelector((store)=> store.app.isMenuBar);

  return (
    <div className='flex' >
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body;