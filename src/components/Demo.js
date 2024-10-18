import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

const Demo = () => {

    const [text, settext] = useState(0);

    const [isDark , setIsDark] = useState(false);

    const prime = useMemo(()=>findNthPrime(text), [text]);

  return (
    <div>
        <div className={isDark ? 'm-4 p-2 border border-black h-96 w-96 bg-black text-white' : 'm-4 p-2 border border-black h-96 w-96'}> 
            <div>
                <button className='m-2 p-2 border border-black bg-green-300' onClick={()=> setIsDark(!isDark)}>Theme</button>
            </div>
            <div>
                <input type='number' className={'border border-black p-2 m-2'} value={text} onChange={(e)=> settext(e.target.value)}></input>
                <h1 className='m-2 '>Result = {prime}</h1>
            </div>
        </div>
    </div>
  )
}

export default Demo