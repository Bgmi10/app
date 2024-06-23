import React, { useEffect, useRef, useState } from 'react'
import Usevalidation from '../hooks/Usevalidation'


export const Inputform = () => {

    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [phonenumber , setphonenumber] = useState('')
    const [password , setpassword] = useState('')
    const [confirmpassword , setconfirmpassword] = useState('')
    const [address  , setaddress] = useState('')
    const [msg , setmsg] =  useState('')
   
    const handleclick  = () =>{
      const {valdatename , validemail , validphone , validpassword , validconfirmpassword , validaddress} = Usevalidation(name , email , phonenumber , password , confirmpassword , address)
     
      let errorMsg = ''
 
      if (!validemail) errorMsg += 'Invalid email format\n';
      if (!valdatename) errorMsg += 'Name cannot be empty\n';
      if (!validphone) errorMsg += 'Phone number must be 10 digits\n';
      if (!validpassword) errorMsg += 'Password is invalid\n';
      if (!validconfirmpassword) errorMsg += 'Confirm password does not match\n';
      if (!validaddress) errorMsg += 'Address is required\n';
         setmsg(errorMsg)

    }
  return (
    <div className=''>
         <input type='text' placeholder='name' className='p-2 rounded-md '  onChange={e => setname(e.target.value)}/>
         <input type='text' placeholder='email' className='p-2 rounded-md mt-3'  onChange={e => setemail(e.target.value)}/>
         <input type='text' placeholder='phone number' className='p-2 rounded-md mt-3' onChange={e => setphonenumber(e.target.value)}/> 
         <input type='password' placeholder='password' className='p-2 rounded-md  mt-3' onChange={e => setpassword(e.target.value)}/>
        <input type='password' placeholder='confirm password' className='p-2 rounded-md mt-3' onChange={e => setconfirmpassword(e.target.value)}/>
        <input type='text' placeholder='address' className='p-2 rounded-md mt-3' onChange={e => setaddress(e.target.value)}/> 
        <button className='p-2 bg-blue-300 rounded-md mt-3' onClick={handleclick}>submit</button>
        <p className='text-red-400'>{msg}</p>
    </div>
  )
}
