import React, { useEffect, useState } from 'react'
import LiveComment from './LiveComment'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages, addisliveChat } from '../utils/liveSlice';
import { generateMessages, generateNames } from '../utils/helper';

const LiveChat = () => {

  const [livemsg, setLivemsg] = useState("");

  const isLiveOpen = useSelector(store => store.live.isliveChat); 

  const dispatch = useDispatch();

  const liveChats = useSelector(store=> store.live.message);

  useEffect(()=>{
    const i = setInterval(()=>{
      dispatch(addMessages({
        name: generateNames(),
        comment: generateMessages(),
      }))
    },1500);

    return ()=> clearInterval(i);
  }, [])

  return (
    <div>
      <div className=' mx-2 p-2 border border-gray-300 rounded-t-lg flex justify-between'>
        <h1> Live Chat </h1>
        <button onClick={()=>dispatch(addisliveChat())} >✖️</button>
      </div>
      { isLiveOpen &&
      <>
      <div className=' mx-2 p-2 border border-gray-300 h-[500px] overflow-y-scroll flex flex-col-reverse '>
        {
          liveChats.map((data, index)=> <LiveComment key={index} name={data.name} comment={data.comment}/>)
        } 
      </div>
      <form className=' mx-2 p-2 border border-gray-300 rounded-b-lg flex justify-around ' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessages({
          name: "Admin",
          comment: livemsg,
        }))
        setLivemsg("");
      }}>
        <input className='border border-gray-100 bg-gray-100 rounded-full w-96 px-4' value={livemsg} onChange={(e)=> setLivemsg(e.target.value)}></input>
        <button className='border border-gray-100 bg-gray-100 rounded-full '>💗</button>
      </form>
      </>
      } 
    </div>
  )
}

export default LiveChat