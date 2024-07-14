import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Singleaccordian = ({data}) => {

    const [isopen , setIsopen] = useState(false) 

    const  handleclick = (index) =>{
          setIsopen(prev => !prev)
        
    }


  return (
    <div>
    <div className='border-2 w-80 h-auto m-4 p-2 shadow-sm '>
        {
            data.map((i , index) =>(
              <>
                <div className='flex justify-between border-b p-4' key={index}>
                 <h1 className=''>{i.title}</h1>

                  <FontAwesomeIcon icon={isopen ? faAngleDown : faAngleUp}  className='cursor-pointer ' onClick={()=>handleclick(index)}/>

                 </div>
               <div>
                {isopen && i.para}
               </div>
              </>
            ))
        }

    </div>
    </div>
  )
}

