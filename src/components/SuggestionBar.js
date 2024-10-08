import React from 'react'
import FIlterbar from './FIlterbar';

const SuggestionBar = () => {

  const list = ["All","Music","Meditation music","Masala films","Playlists","Arijit Singh","Web Development","Live","Indian classical music"];
    
  return (
    <div className=' overflow-x-auto '>
      <div className='flex'>
        {
        list.map((name, index)=> <FIlterbar key={index} name={name} />)
        }
      </div>
    </div>
  )
}

export default SuggestionBar;