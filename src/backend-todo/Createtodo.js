import React, { useState } from 'react'
import { Usermsg } from './Usermsg'


export const Createtodo = () => {


  const [usermsg , setusermsg] = useState('')


  const handleclick = () =>{
    
   setusermsg('')

    const addtodo = async () =>{

      try{
        const req = await fetch('http://localhost:3001/api/addtodo' ,{
          method :"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            usermsg,
            todo_update_status : false
          })
        })
        console.log(req)
      }
      catch(error){
          console.log(error)
      }
    }
    addtodo()

  }
  return (
    <div>
      <input type='text' placeholder='add todo ' className='p-3 w-64 outline-none border-t-rose-600 border-r-rose-600 border-l-purple-600 border-b-purple-600  border rounded-md m-2' value={usermsg} onChange={(e) => setusermsg(e.target.value)} />
      <button className='p-3 bg-blue-400 rounded-md w-24' onClick={handleclick}>Add</button>

      <Usermsg /> 
    </div>
  )
}


// add btn it should be post req 

// and then it stores in array in backend now the second thing is i need to read the data whaterver the user send over there 