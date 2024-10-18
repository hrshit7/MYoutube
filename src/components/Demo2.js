import { current } from '@reduxjs/toolkit';
import React, { useRef, useState } from 'react'

const Demo2 = () => {

    const [y ,setY] = useState(0); // we change the varible the using set function then rerender the component with updated value

    let x = 0;  //we change the varible but if rerender the component it reset to initial value (and also nothing happens on display)

    const z = useRef(0); // we changes the varible change in value of the variable but not rendering the component but have the reference to the variable about the values of it ( and if we the rerender the component the refering value came up on the display) 

  return (
    <div className='m-4 p-2 h-96 w-96 border border-black bg-gray-300'>
        <div>
            <span className='font-bold m-2 p-2'>let x = {x} </span>
            <button className='m-2 p-2 bg-green-300' onClick={()=>{x=x+1; console.log(x)}}>increase x</button>
        </div>
        <div>
            <span className='font-bold m-2 p-2'>state y = {y} </span>
            <button className='m-2 p-2 bg-green-300' onClick={()=>{setY(y+1)}}>increase y</button>
        </div>
        <div>
            <span className='font-bold m-2 p-2'>Ref z = {z.current} </span>
            <button className='m-2 p-2 bg-green-300' onClick={()=>{z.current = z.current+1; console.log(z.current)}}>increase z</button>
        </div>
    </div>
  )
}

export default Demo2