import React, { useEffect, useRef, useState } from 'react'
import Usevalidation from '../hooks/Usevalidation'


export const Inputform = () => {

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirmpassword = useRef(null)
    const phonenumber = useRef(null)
    const address = useRef(null)
   
    const handleclick  = () =>{

    }
     

   const validation = Usevalidation(name,email, phonenumber , password , confirmpassword , address )
  return (
    <div className=''>
         <input type='text' placeholder='name' className='p-2 rounded-md '  ref={name}/>
         <input type='text' placeholder='email' className='p-2 rounded-md mt-3'  ref={email}/>
         <input type='text' placeholder='phone number' className='p-2 rounded-md mt-3' ref={phonenumber}/> 
         <input type='password' placeholder='password' className='p-2 rounded-md  mt-3' ref={password}/>
        <input type='password' placeholder='confirm password' className='p-2 rounded-md mt-3' ref={confirmpassword}/>
        <input type='text' placeholder='address' className='p-2 rounded-md mt-3' ref={address}/> 
        <button className='p-2 bg-blue-300 rounded-md mt-3' onClick={handleclick}>submit</button>
    </div>
  )
}
