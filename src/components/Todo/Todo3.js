import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export const Todo3 = () => {

    const [taskdata , setTaskdata] = useState(()=> {

        const data = JSON.parse('taskitems')
       return  localStorage.getItem(data) || []
    })
    const [msg , setMsg] = useState('')

    useEffect(() => {
         
        localStorage.setItem('taskitems' , JSON.stringify(taskdata))

    },[taskdata])

   
    const usermsg = {
        id: Math.floor(Math.random() * 1000),
        taskmsg  : msg ,
        timestamp:  Date(),
        completed : false
    }
    
    const handleadd = () => {
       setTaskdata(prev => [...prev , usermsg])
       setMsg('')

       if(msg.length === 0 ){
        return 'field is empty'
       }
    }
   
    const handledelete = (id) => {

        const updatedtask = taskdata.filter((i ) => i.id !== id )
        setTaskdata(updatedtask)

    }

    const handlecompleted = (id) => {

        const completed = taskdata.map((i ) => i.id === id ? {...i , completed : !i.completed} : i )
        setTaskdata(completed)
        
    }

  return (
    <div>
        <input type='text' placeholder='type  a message'  className='p-3  m-6 rounded-md border  outline-none' value={msg} onChange={e => setMsg(e.target.value)}/>

        <button className='p-2 bg-blue-400  rounded-md' onClick={handleadd}>ADD </button>

        <div>
            {
                taskdata.map((i ) => (
                    <div key={i.id} className='m-2 p-2 flex'>
                         <li className={i.completed ? 'm-3 line-through  text-xl' : 'm-3 text-xl '}>{i.taskmsg}</li>
                          <p className='m-3'>Created at : <span className='text-blue-500'>{i.timestamp}</span></p>
                          <button className='text-red-500 m-3' onClick={()=> handledelete(i.id)}><FontAwesomeIcon icon={faTrash} /></button>
                          <input type='checkbox'  className='m-3' onClick={()=> handlecompleted(i.id)} />
                     </div>
                ))
            }
        </div>
    </div>
  )
}
