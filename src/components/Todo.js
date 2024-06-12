import React, { useState } from 'react'

export const Todo = () => {

  const [usermsg , setusermsg] = useState('')
  const [taskarr, settaskarr ] = useState([])
  console.log(taskarr)


const randomid = () =>{
  const a = Math.floor(Math.random() * 10000 )
  return a 
}



  const handleclick = () =>{

    const obj = {
      id: randomid(),
      msg : usermsg,
      completed : false


    }
    settaskarr(data => [...data , obj])
    setusermsg('')
  }

  const completedtask = (id1) =>{

    const a = taskarr.map((i) => {
   if(i.id == id1) {
    return {...i , completed : !i.completed}
   } 
  }
  
  )
  
  
  settaskarr(a)
  } 
  

  return (
    <div>
      <input type='text' onChange={(e) =>setusermsg(e.target.value)} value={usermsg}  /> 
      <button onClick={handleclick}>add task</button>

      <div>
        {
          taskarr.map((i) =>(
         
            <div key={i.id }> 
            <input type='checkbox' onClick={()=>completedtask(i.id)} />
            <p style={i.completed ?  {textDecoration : "line-through"   } : {textDecoration : "none"}}>{i.msg}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
