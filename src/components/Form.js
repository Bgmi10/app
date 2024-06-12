import React, { useState } from 'react'

export const Form = () => {

    const [name , setname  ] = useState('')
    const [email , setemail  ] = useState('')
    const [desc , setdesc  ] = useState('')
    const [userdata , setuserdata] = useState()
    console.log(userdata)

    const randomid = () =>{

        const b = '214341412849212947912412123'
        const a = (Math.floor(Math.random() * b.length))
        return a
    }



    const handleclick = () =>{

        
    const formdata = {
        id:randomid(3),
        name: name ,
        email: email,
        desc : desc 
    }
         setuserdata(data =>[ ...data , formdata ])
         setname('')
         setdesc('')
         setemail('')
    }


  return (
    <div>
        Name : <input type = "text" placeholder='name'   value={name} onChange={(e)=>setname(e.target.value)}/>
        Email : <input type = "text"  placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        desc : <input type = "text"  placeholder='desc'  value ={desc} onChange={(e)=>setdesc(e.target.value)}/>
        <button onClick={handleclick}> submit feedback</button>
        
    </div>
  )
}
