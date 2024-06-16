import React, { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'


export const Chat = () => {

    const [text , settext] = useState('')

    
    
    const socket = io('http://localhost:3001/')
    useEffect(() =>{
    socket.on('connect' , () =>{
        console.log('connexted ')
    })

    socket.on('disconnect' , () =>{
        console.log('disconnected ffrom server')
    })

  return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
    },[])

    const handleclick = () =>{
        socket.emit('msg' , text)
        settext('')
    }
  return (
    <div>Chat

        <div>
            <input type='text' placeholder='type...' value={text} onChange={(e) => settext(e.target.value)} />
            <button onClick={handleclick}>send</button>
        </div>
    </div>
  )
}
