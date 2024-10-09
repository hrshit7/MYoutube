import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {

    const menu = useSelector((store)=> store.app.isMenuBar);

    if(info== null) return;

    const { snippet, statistics }  = info;
    const { channelTitle, title, thumbnails } = snippet;
   
  return (
    <div className={menu === false ? 'p-2 m-2 w-64 shadow-md cursor-pointer' : 'p-2 m-2 w-72 shadow-md cursor-pointer'}>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url}></img>
        <h1 className='px-2 pt-2 font-bold text-sm'>{title}</h1>
        <h4 className='px-2 text-sm text-gray-500'>{channelTitle}</h4>
        <h4 className='px-2 text-sm text-gray-500'>{statistics?.viewCount + " views"}</h4>
    </div>
  )
}

export default VideoCard