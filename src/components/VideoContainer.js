import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu, onVideoContainer } from '../utils/appSlice';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const VideoContainer = () => {

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu());
    dispatch(onVideoContainer());
  }, [])

  return (
    <div className='flex mt-8 ml-8 w-full'>
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
        <CommentContainer/>
      </div>
      <div className='w-full'><LiveChat/></div>
    </div>
  )
}

export default VideoContainer;