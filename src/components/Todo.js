import React, { useState } from 'react';

export const Todo = () => {

  const [usertext , setUsertext] = useState('')
  const [todolist , settodolist] = useState([])
  
  const handleclick = () =>{
    settodolist(prevdata => [...prevdata , usertext])
    setUsertext('')
   
  }


  const handledel = (index) =>{
    const filterarr = todolist.filter((_, a) =>a !== index ) 
    settodolist(filterarr)
  }

  return (
    <div>
      <input type='text'  onChange={(e) =>setUsertext(e.target.value)} value={usertext}/>
      <button onClick={handleclick}>add task</button>

      {
        todolist.map((i, index)=>(
          <div key={index}>
          <li >{i}</li>
          <button onClick={()=>handledel(index)}>delete</button>
          </div>
        ))
      }
      
    </div>
  )
}
