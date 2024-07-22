import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Singleaccordian = ({data , isopen , setisopen}) => {


  
  return (
    <div>
    <div className='border-2 w-80 h-auto m-4 p-2 shadow-sm '>

              <>
                <div className='flex justify-between border-b p-4' >
                 <h1 className=''>{data.title}</h1>

                  <FontAwesomeIcon icon={isopen ? faAngleDown : faAngleUp}  className='cursor-pointer ' onClick={()=> setisopen(prev => !prev) } />

                 </div>
               <div>
                {isopen && data.para}
               </div>
              </>
        

    </div>
    </div>
  )
}

