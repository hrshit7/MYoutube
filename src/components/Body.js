import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import SuggestionBar from './SuggestionBar'

const body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div>
            <div>
                <SuggestionBar/>
            </div>
            <MainContainer/>
        </div>
    </div>
  )
}

export default body