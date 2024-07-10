import React, { useState } from 'react'

export const Square = ({value ,handlesquareclick}) => {

   
    const dummyArr = Array.from({length : 9} , (I, index) => index + 1 )


 
  return (
    <div>
        
      <div className='border  m-2 w-10 h-10 text-center text-2xl cursor-pointer' onClick={handlesquareclick}>{value}</div>
                       
    </div>
  )
}
