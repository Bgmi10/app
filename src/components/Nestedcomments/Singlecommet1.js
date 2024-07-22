import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Singlecommet1 = ({data}) => {

    const [close , setClose ] = useState(true)
  return (
    <>
      <div>
          {
            data.map((i , index) => (
                <div key={index}>
                <div className='flex m-4'>
                       <img src={i.userprofile} alt='no img '  className='h-6 w-6 rounded-full m-2 '/>
                       <span className='m-2'>{i.name}</span>
                     
                </div>  <span className='m-14 '>{i.comment}</span>
                <div className='m-10 border-l'>
                <button onClick={() => setClose(prev => !prev )}><FontAwesomeIcon icon={!close ? faMinus : faPlus} /></button>
                {close && <Singlecommet1 data={i.replies}/>} 
                
                </div>
                </div>
              
            ))
          }
      </div>
    </>
  )
}
