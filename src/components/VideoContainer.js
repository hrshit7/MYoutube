import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice';
import MainContainer from './MainContainer';

const VideoContainer = () => {

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu());
  }, [])

  return (
    <div className='flex mt-8 ml-8'>
      <div>
        <iframe
        className='rounded-xl'
        width="900" 
        height="500" 
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        >
        </iframe>
      </div>
      <div>
        <MainContainer/>
      </div>
    </div>
  )
}

export default VideoContainer;