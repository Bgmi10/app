import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'


const socket = io('http://localhost:3001/')
export const Userlist = () => {


  const [users , setusers] = useState([])


   useEffect(() => {
      socket.on('users' , (users)=>{
      setusers(users)
      console.log(users)
        
      })

      return () => {
        socket.off('users')
      }
   },[])
  

  return (
    <>
    
    <div className='border h-96 w-80 font-bold mt-2 ml-4 m-4 rounded-md' >
    <h1 className=' text-center border-b-2 p-2 bg-gray-300'>Userlist</h1>
       {
        users?.map((i, index) =>(
          <div key={index}>
                   {
                    i.username === null ? '' : 
                   
                   <li>{ i.username }</li>}
          </div>
        ))
       }
    </div>
    </>
  )
}
