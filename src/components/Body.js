import React from 'react'
import Sidebar from './Sidebar'
import FIlterbar from './FIlterbar'
import MainContainer from './MainContainer'

const body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div>
            <FIlterbar/>
            <MainContainer/>
        </div>
    </div>
  )
}

export default body