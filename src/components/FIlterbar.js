import React from 'react'

const FIlterbar = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 py-1 mx-2 my-5 rounded-lg px-5 w-max'>{name}</button>
    </div>
  )
}

export default FIlterbar