import React, { useEffect, useState } from 'react'
import { Userlist } from './Userlist'
import { io } from 'socket.io-client'
import { useAuth0 } from '@auth0/auth0-react'



const socket = io('http://localhost:3001/')

export const Textarea = () => {
    const [message , setmessage]  = useState([])
    const [text , settext ] = useState('')
    const [typing , settyping] = useState('')

    const {user} = useAuth0()

   
    useEffect(() =>{
     
         socket.emit('join' , user?.name)

         socket.on('message' , (message) =>{

            setmessage((prev) => [...prev ,message])
            console.log(message)
            
         })

         socket.on('typing' , (username) =>{
            settyping(username)
         })


         return () => {
            socket.off('message')
            socket.off('typing')
          }
        
    } ,[user])


   const  handlechange =  (e) =>{

    settext(e.target.value)
    socket.emit('typing' , user.name)
   }


   const submit = () =>{
socket.emit('message' , {text , user : user.name})
    settext('')
     
   }
  return (
   
    <>
    <h1 className='text-center ml-60  '>Text editor</h1>
    <div className='flex '>
    <Userlist />
    
      <div className='justify-end flex  w-full '>
           <textarea className='w-full h-96 mt-2 mr-8 border-2 rounded-md ' onChange={handlechange}> </textarea>
           <button onClick={submit}>send</button>
           {
            typing && <p>{typing} ... is typing</p>
           }
           {
            message.map((i , index) => (
                <div key={index}>
                <strong>{i.user}</strong> {i.text}
                </div>
             ))
           }
      </div>
      </div>
    </>
  )
}
