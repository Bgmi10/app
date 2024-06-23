import React, { useState } from 'react'

export const Colorswitcher = () => {
    const slatecolor = "bg-slate-600"
    const [changecolor , setchangecolor] = useState(slatecolor)
    const [checking , setchecking ] = useState(false)
    const a = [1,2,3,4]
    const red = 'bg-red-500'
    
   
    const handlechangecolor = (idx) =>{
     
     if(a[idx]){
        setchecking(!checking)
     } 
    
     
    }
  return (
    <div >
        <div className='flex justify-center mt-20'>
       {
        a.map((i , index)=>(
        <div key={index} >
        <li className={`border-2 rounded-xl p-10 w-3 h-1 m-2 ${checking ? red : changecolor}`}   onClick={() => handlechangecolor(index)}>{i}</li>
        </div>
        ))
       }
     
        </div> 
        <div className='flex justify-center'>
        <div className={`border-2 rounded-xl p-10 w-3 h-1 m-2 ${checking ? red : changecolor}`} ></div>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        </div> 
        <div className='flex justify-center'>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        </div>  
        <div className='flex justify-center'>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        <div className='border-2 rounded-xl p-10 w-3 h-1 m-2 bg-slate-600'></div>
        </div> 
     </div>
  )
}
