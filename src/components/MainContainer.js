import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const MainContainer = () => {

  const [video, setVideo] = useState();

  useEffect(()=>{
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async()=>{
    const data = await fetch(YOUTUBE_API);
    const json = await data?.json();
    setVideo(json?.items);
  }
  
  return !video ? null : (
    <div>
      <div className='flex flex-wrap ml-4'>
        {
          video.map((videos)=>
            <Link to={"/watch?v=" + videos.id} ><VideoCard key={videos.id} info={videos}/></Link>
          )
        }
      </div>
    </div>
  )
}

export default MainContainer