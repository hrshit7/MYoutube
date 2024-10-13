import React from 'react';
import { USER_LOGo } from '../utils/constant';

const SearchVideoContainer = ({info}) => {

  const { snippet }  = info;
  const { channelTitle, title, thumbnails, description } = snippet;

  return (
    <div className='flex m-8 flex-row'>
      <div className='w-96'>
        <img alt='thumbnail' src={thumbnails?.medium?.url} className='h-52 w-96' ></img>
      </div>
      <div className='mx-8 w-2/3'>
      <h1 className='text-2xl'>{title}</h1>
      <div className='flex my-4'>
        <img className='h-8' src={USER_LOGo}></img>
        <h1 className='mx-4 mt-1 text-gray-500'>{channelTitle}</h1>
      </div>
      <h1 className='text-gray-500 text-sm '>{description.substring(0,500)}</h1>
      </div>
    </div>
  )
}

export default SearchVideoContainer;