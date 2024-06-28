import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export const Todolist_2 = () => {

    const [usermsg , setusermsg] = useState('')
    const [usermsgarr, setusermsgarr] = useState([])
    const [searchquery ,setsearchquery] = useState('')
    const [filterd_list , setfilterd_list] = useState([]) 
    const [search_result , setsearch_result] = useState([])
    const [filter , setfilter] = useState('all')
    console.log(filter)
    
    const randomid = () =>{
        
      return  Math.floor(Math.random() * 1229)
         }

  
const task_msg = {
    id:randomid(),
    msg : usermsg ,
    completed : false
}
    const handleclick = () =>{
       setusermsgarr(prev => [...prev ,task_msg])
       setusermsg('')
    }

    const handledelete = (index) =>{
        const filter_arr = usermsgarr.filter((i) => i.id != index)  // 1212 != 1212
        
        setusermsgarr(filter_arr)
    }



     const handlecompleted = (index) =>{

       const result = usermsgarr.map((i) =>(
         i.id === index ? {...i , completed : !i.completed} : i 
       ))
      
       setusermsgarr(result)
      
     }

    

     const handlesearach  = () =>{
            const search_btn_click_results = usermsgarr.filter((i) => i.msg.toLowerCase().match(searchquery.toLocaleLowerCase()))
            setsearch_result(search_btn_click_results)
           
         
     }
   
    useEffect(() => {
         let fileterdarr = usermsgarr
           if(filter === 'completed') {
          
            const filter_completed = fileterdarr.filter((i) => i.completed === true )
            setfilterd_list(filter_completed)
            
           }

           if(filter === 'not completed') {
            const filter_notcompleted = fileterdarr.filter((i) => i.completed === false)
           
            setfilterd_list(filter_notcompleted)
           }

           if(filter === 'all')  setfilterd_list(usermsgarr)
    },[filter])
   
  return (

    <div> 
        <input type='text' placeholder='add todo' className='p-2 rounded-md border m-10 ' onChange={e => setusermsg(e.target.value)} value={usermsg}/>
    
        <button className='bg-blue-500 p-2 rounded-md h-10 ' onClick={handleclick}>add task</button>
    
            
            <input type='text' placeholder='search task' className='p-2 rounded-md border   px-10   ml-40' onChange={e => setsearchquery(e.target.value)}/>
            <button className='bg-yellow-500 p-2 rounded-md h-10  m-10' onClick={handlesearach}>search task</button>
           { <div className='px-[520px]'>
            {
              search_result.map((i) =>(
                    <div key={i.id}>
                        <li>{i.msg}</li>
                    </div>
                ))
            }
        </div>}
        <div className=' flex justify-end mr-3'>
            <select onChange={e => setfilter(e.target.value)}>
                <option value="all">All</option>
                <option  value='completed'>completed </option>
                <option value="not completed">not completed</option>
            </select>
           
        </div>
        <div className='ml-[1150px] mt-10' >
            {
                filterd_list.map((i) =>(
                    <div className=''>
                        <li className='mr-20'>{i.msg}</li>
                        </div>
                ))
            }
            </div>
        
      
        <div>   
            {
                usermsgarr.map((i, index ) =>(
                    <div key={index} className='flex p-2 m-2'> 
                        <p className={i.completed ? 'line-through' : ''}>{i.msg}</p>
                        <FontAwesomeIcon icon={faTrash}  className='text-red-400  px-10 mt-1' onClick={() => handledelete(i.id)}/>
                        <input type='checkbox' onClick={()=>handlecompleted(i.id)} />
                     </div>   
                ))
            }
        </div>
        
    </div>
  )
}


// this component is responsible for add todo with id , msg , completed status  