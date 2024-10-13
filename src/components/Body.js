import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {

  const menu = useSelector((store)=> store.app.isMenuBar);

  return (
    <div>
      <Header/>
      <div className='flex' >
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Body;