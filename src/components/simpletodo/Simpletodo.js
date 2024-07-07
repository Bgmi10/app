import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Simpletodo = () => {

    const [usermsg , setusermsg] = useState('')

    const [arrmessage  , setarrmessage] = useState([])

    

    const generateId  = () =>{
        return Math.floor((Math.random() * 1000))
    }

    const finaluserdata = {
        id:  generateId(),
        msg : usermsg,
        completed : false
    }


   const handleaddtodo = () =>{
    setarrmessage(prev => [...prev , finaluserdata])
    setusermsg('')
   }
     
   const handledeletemsg = (id) => {

    const filterarr = arrmessage.filter((i) => i.id !== id )
    setarrmessage(filterarr)
   }

   const handleiscompleted = (id) =>{
      
    const specific_is_completed = arrmessage.map((i) => i.id === id ? {...i  , completed : !i.completed} : {...i}   )
    setarrmessage(specific_is_completed)
    
   }

  return (
    <>
    <div>
        <input type='text' className='p-2 m-2 rounded-md border-2' onChange={e => setusermsg(e.target.value)} value={usermsg}/>
          <button className='p-2 m-10 bg-black rounded-md text-white  ' onClick={handleaddtodo}>Add todo</button>
          
    </div>
    <div>
        {
            arrmessage.map((i , index) => (
                <div key={index}>
                     <ul className='flex'> 
                        <li className={i.completed ? 'm-2  font-medium text-lg line-through ' : 'm-2  font-medium text-lg '}>
                           # {i.msg} 
 
                        </li>
                          <FontAwesomeIcon icon={faTrash}  className='mt-4 m-4 ' onClick={()=>handledeletemsg(i.id)}/>

                          <input type='checkbox' className='p-2 m-2 ' onClick={()=>handleiscompleted(i.id)}/>
                     </ul>
                </div>
            ))
        }
    </div>

    </>
  )
}


// this is component is responsible for storing user msg and basic CRUD operation 