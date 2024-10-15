import React, { useEffect, useState } from 'react'
import { HAMBURGER_LOGO, USER_LOGo, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsMenuBar } from '../utils/appSlice';
import { addSearchValue, addsuggetions } from '../utils/searchSlice';
import { Link } from 'react-router-dom';


const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const [suggestion, setSuggestion] = useState([]);

  const [onSearch, setOnSearch] = useState(false);

  const dispatch = useDispatch();

  const forSearch = useSelector((store)=> store.search.suggestions);

  useEffect(()=>{

    //rerender and decline the api call
    
    const timer =  setTimeout(()=>{
      if(forSearch[searchQuery]){
        return setSuggestion(forSearch[searchQuery]);
      }else {

      }
      getYoutubeSearches()}, 
      200); 

    return ()=>{
      clearTimeout(timer);
    };

  }, [searchQuery])

  /**
   * 
   * key - i
   * - render the component 
   * - useEffect();
   * - start timer => make api call after 200ms
   * 
   * key- ip
   * - destroy the component (useeffect return method)
   * - re-render the component 
   * - useEffect()
   * - start timer => make api call after 200ms
   */

  const getYoutubeSearches= async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(
      addsuggetions({
        [searchQuery] : json[1],
      })
    );
  }

  const handleSearchKey = (s)=> {
    setSearchQuery(s);
    dispatch(addSearchValue(s));
  }

  const handleMenuChange =()=>{
    dispatch(toggleIsMenuBar());
  }

  return (
    <div className='grid grid-flow-col mx-2 shadow-lg'>
      <div className='col-span-1 flex'>
        <img className='h-14 mx-2 mt-3 cursor-pointer' alt="Hamburger Logo" src={HAMBURGER_LOGO} onClick={handleMenuChange}></img>
        <Link to="/"><img className='h-20 mx-2' alt='Youtube logo' src={YOUTUBE_LOGO}></img></Link>
      </div>
      <div className='col-span-10 pt-7 '>
        <input className=' border border-gray-300 w-1/2 rounded-l-full p-1 px-9' type='text' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} onFocus={()=>{setOnSearch(true)}} onBlur={()=>{setTimeout(()=>{setOnSearch(false)},1000)}} ></input>
        <button className='rounded-r-full border border-gray-300 p-1 bg-gray-50 hover:bg-gray-100 w-14'> 🔍 </button>
        <button className='mx-6 rounded-full bg-gray-50 hover:bg-gray-100 p-1'>🎙️</button>
        {
          onSearch && 
          <div className='absolute bg-white w-[34rem] my-1 rounded-xl shadow-xl border border-gray-200'>
            <ul className='py-4'>
              {
              suggestion.map((s)=><Link to={"/results?search_query=" + s.replace(/ /g, "+")}><li key={s} className='px-3 py-1 hover:bg-gray-200' onClick={()=>handleSearchKey(s)}>🔍 {s}</li></Link>)
              }
            </ul>
          </div>
        }
      </div>
      <div className='col-span-1 pt-7'>
        <img className='h-8' alt='User logo' src={USER_LOGo}></img>
      </div>
    </div>
  )
}

export default Header