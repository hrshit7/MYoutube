import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_VIDEO_KEYWORD_API_1HALF, YOUTUBE_SEARCH_VIDEO_KEYWORD_API_2HALF } from '../utils/constant';
import VideoCard from './VideoCard';
import SearchVideoContainer from './SearchVideoContainer';

const SearchVideoPage = () => {

    const [searchVideos] = useSearchParams();
    const query = searchVideos.get("search_query").replace(/ /g, "+");

    const [videoList , setVideoList] = useState();
    
    useEffect(()=>{
        getYoutubeVideos();
    },[searchVideos]);

    const getYoutubeVideos = async()=>{
        const data = await fetch(YOUTUBE_SEARCH_VIDEO_KEYWORD_API_1HALF + query + YOUTUBE_SEARCH_VIDEO_KEYWORD_API_2HALF);
        const json = await data?.json();
        setVideoList(json.items);
    }

    return !videoList ? null : (
        <div>
          <div className='flex flex-wrap ml-4'>
            {
              videoList.map((videos, index)=>
                <Link key={index} to={"/watch?v=" + videos.id.videoId} ><SearchVideoContainer info={videos}/></Link>
              )
            }
          </div>
        </div>
      )
}

export default SearchVideoPage