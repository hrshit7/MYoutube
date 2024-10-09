import React from 'react'
import { HAMBURGER_LOGO, USER_LOGo, YOUTUBE_LOGO } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { toggleIsMenuBar } from '../utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();

  const handleMenuChange =()=>{
    dispatch(toggleIsMenuBar());
  }

  return (
    <div className='grid grid-flow-col mx-2 shadow-lg'>
      <div className='col-span-1 flex'>
        <img className='h-14 mx-2 mt-3 cursor-pointer' alt="Hamburger Logo" src={HAMBURGER_LOGO} onClick={handleMenuChange}></img>
        <img className='h-20 mx-2' alt='Youtube logo' src={YOUTUBE_LOGO}></img>
      </div>
      <div className='col-span-10 pt-7 text-center'>
        <input className=' border border-gray-300 w-1/2 rounded-l-full p-1'></input>
        <button className='rounded-r-full border border-gray-300 p-1 bg-gray-50 hover:bg-gray-100'> 🔍 </button>
        <button className='mx-6 rounded-full bg-gray-50 hover:bg-gray-100 p-1'>🎙️</button>
      </div>
      <div className='col-span-1 pt-7'>
        <img className='h-8' alt='User logo' src={USER_LOGo}></img>
      </div>
    </div>
  )
}

export default Header