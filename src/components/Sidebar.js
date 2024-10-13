import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector((store)=> store.app.isMenuBar);

    if(!isMenuOpen) return null;

  return (
    <div className='shadow-md w-84'>
       <div className='shadow-md px-7 py-3'>
        <ul >
            <li className='p-1 px-16'><Link to="/">Home</Link></li>
            <li className='p-1 px-16'>Shorts</li>
            <li className='p-1 px-16'>Subscriptions</li>
        </ul>
       </div>
       <div className='shadow-md px-7 py-3'>
        <h1 className='font-bold'>Explore</h1>
        <ul>
            <li className='p-1 pl-16'>Trending</li>
            <li className='p-1 pl-16'>Shoping</li>
            <li className='p-1 pl-16'>Music</li>
            <li className='p-1 pl-16'>Live</li>
            <li className='p-1 pl-16'>Gaming</li>
            <li className='p-1 pl-16'>News</li>
            <li className='p-1 pl-16'>Sports</li>
            <li className='p-1 pl-16'>Courses</li>
            <li className='p-1 pl-16'>Fashion & Beauty</li>
            <li className='p-1 pl-16'>Podcasts</li>
        </ul>
       </div>
       <div className='shadow-md px-7 py-3'>
        <h1 className='font-bold'>More from Youtube</h1>
        <ul>
            <li className='p-1 pl-16'>Youtube Premium</li>
            <li className='p-1 pl-16'>Youtube Studio</li>
            <li className='p-1 pl-16'>Youtube Music</li>
            <li className='p-1 pl-16'>Youtube Kids</li>
        </ul>
       </div>
       <div className='shadow-md px-7 py-3'>
        <ul>
            <li className='p-1 pl-16'>Settings</li>
            <li className='p-1 pl-16'>Report History</li>
            <li className='p-1 pl-16'>Help</li>
            <li className='p-1 pl-16'>Send Feedback</li>
        </ul>
       </div>
    </div>
  )
}

export default Sidebar