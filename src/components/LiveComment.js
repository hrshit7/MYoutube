import React from 'react'
import { USER_LOGo } from '../utils/constant'

const LiveComment = ({name, comment}) => {
  return (
    <div className='flex items-center m-3'>
        <img src={USER_LOGo} className='h-6 w-6' alt='user'></img>
        <span className='ml-2 font-bold'>{name}</span>
        <span className='ml-4'>{comment}</span>
    </div>
  )
}

export default LiveComment