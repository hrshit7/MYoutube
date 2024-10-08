import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const isMenuOpen = useSelector((store)=> store.app.isMenuBar);

    if(!isMenuOpen) return null;

  return (
    <div className='shadow-md w-56'>
       <div className='shadow-md px-7 py-3'>
        <ul >
            <li className='font-bold p-1'>Home</li>
            <li className='p-1'>Shorts</li>
            <li className='p-1'>Subscriptions</li>
        </ul>
       </div>
       <div className='shadow-md px-7 py-3'>
        <h1 className='font-bold'>Explore</h1>
        <ul>
            <li className='p-1'>Trending</li>
            <li className='p-1'>Shoping</li>
            <li className='p-1'>Music</li>
            <li className='p-1'>Live</li>
            <li className='p-1'>Gaming</li>
            <li className='p-1'>News</li>
            <li className='p-1'>Sports</li>
            <li className='p-1'>Courses</li>
            <li className='p-1'>Fashion & Beauty</li>
            <li className='p-1'>Podcasts</li>
        </ul>
       </div>
       <div className='shadow-md px-7 py-3'>
        <h1 className='font-bold'>More from Youtube</h1>
        <ul>
            <li className='p-1'>Youtube Premium</li>
            <li className='p-1'>Youtube Studio</li>
            <li className='p-1'>Youtube Music</li>
            <li className='p-1'>Youtube Kids</li>
        </ul>
       </div>
       <div className='shadow-md px-7 py-3'>
        <ul>
            <li className='p-1'>Settings</li>
            <li className='p-1'>Report History</li>
            <li className='p-1'>Help</li>
            <li className='p-1'>Send Feedback</li>
        </ul>
       </div>
    </div>
  )
}

export default Sidebar