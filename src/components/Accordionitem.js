import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Accordionitem = ({title , para , isopen  }) => {
    const [toggle ,settoggle] = useState(false)

    const handleclick = () =>{
        settoggle(prev => !prev) 
    }


  return (
    <div>
            <div className='boder-2  p-2 w-1/2 border m-10'  >
        <div className='flex justify-between'>
           <p className='text-red-600'>{title}</p>
           <FontAwesomeIcon icon={toggle ? faAngleDown : faAngleUp} onClick={handleclick} className='cursor-pointer flex justify-end' />
       </div>
        
            <div>  
           {isopen &&  <p className='font-light'>{para}</p>} </div>
            </div>
        
    </div>
  )
}


// here every child item manitaining own local state 