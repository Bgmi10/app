import React, { useEffect, useState } from 'react'
import { Validate } from '../utils/Validate'
import { Inputform } from './Inputform'
export const Formvalidation = () => {


    const [name  , setname] = useState('')
    const [email  , setemail] = useState('')
    const [password  , setpassword] = useState('')
    const [success , setsuccess] = useState('')
    const [err , seterr ] = useState('')

    

    const valid = Validate(name , email , password)
 
  const submitform = () =>{
    if(!valid.name_eval){
      seterr(' name required, minimum length of 3 characters')
      setsuccess('')
    }
    else if(!valid.email_eval) {
        seterr('( email required, should be a valid email format)')
        setsuccess('')

    }
    else if(!valid.pass_eval){
        seterr('( password required, minimum length of 8 characters)')
        setsuccess('')

    }  
   
    else{
        seterr('')
       setsuccess('form sumbitted')
    }
  }
  return (
    <div className='bg-slate-700'>
    <div className=' w-32 justify-center m-10 rounded-md py-10 '>
        <input type='text '  className='border-2 py-2 mb-10 rounded-md' placeholder='name'  onChange={(e) => setname(e.target.value)} value={name}/>
        
        <input type='number'  className='border-2 py-2 mb-10 rounded-md'   placeholder='email' onChange={(e) => setemail(e.target.value)}  value={email}/>
        <input type='password'  className='border-2 py-2 mb-10 rounded-md' placeholder='password' onChange={e => setpassword(e.target.value)} value={password}/>
      
        <button className=' bg-blue-500 rounded-md mb-4 p-2' onClick={submitform}>submit</button>
        <h1 className='text-red-500 animate-pulse'>{err}</h1>
        <h1 className='text-green-500 '>{success}</h1>
         <Inputform />
    </div> 
    
    </div>
  )
}
