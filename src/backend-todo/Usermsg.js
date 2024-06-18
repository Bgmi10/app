import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

export const Usermsg = () => {

    const [data , setdata] = useState([])

    const fetch_user_msg = async () =>{
        const res = await fetch('http://localhost:3001/api/getalltodo')

        const json = await res.json()
        console.log(json)
        setdata(json)

    }
    useEffect(() =>{
      fetch_user_msg()
    },[])

    const handledelete = (id) =>{
        try{
            const req = async () =>{
                const del  = await fetch(`http://localhost:3001/api/${id}/deletetodo` , {
                    method:"DELETE",    
                }) 
               const updatedtodo = await del.json()
               setdata(updatedtodo)

            }
       
            req()
        }
        catch(error){
            console.log(error)
        }

       
    }
  return (
    <div>
          {
           data.map((i) =>(
            <div key={i._id} className='flex shadow-md justify-space-between'>
                <li className='text-black font-normal text-2xl p-4 ' >{i.usermsg}</li>
                <div className='flex justify-end'>
                <button className=' p-1 rounded-md m-4 '><FontAwesomeIcon icon={faTrash} className='text-red-500 px-10 py-[-10px]' onClick={() => handledelete(i._id)} /></button>
                </div>
            </div>
           ))
          }
    </div>
  )
}
