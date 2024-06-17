import React, { useEffect, useState } from 'react'

export const Userapi = () => {

    const [data , setdata] = useState(null)
    const [msg , setmsg] = useState('')
    const  fetch_user_data  = async () =>{
        try{
            const res = await fetch('https://dummyjson.com/users')
            const json  = await res.json()
            setdata(json)
            

        }
        catch(error){
            console.log(error)
        }
    } 
    useEffect(() =>{
         fetch_user_data()
    }, [])

    const handleclick = (id) =>{
        const Updata_user_fav = async () =>{
            try{
                const req = await fetch(`https://reqres.in/api/users/${id}`,{
                    method:"POST" ,
                    headers:{
                        'Content-type' : 'application/json'
                    }
                })


                if(req.ok){
                    setmsg('Marked as favored ❤️')
                    setTimeout(() => {
                         setmsg('')
                    }, 2000);
                }

                else{
                    setmsg('fail to mark try again later...')
                }
              
            }
            catch(error){
                console.log(error)
            }
        }

    Updata_user_fav()
    }
   return (
    <div>
        <p className='text-green-400 font-bold '>{msg}</p>
      {
        data?.users?.map((i) =>(
            <div className='mb-10 m-4' key={i.id}>
                <h1>name : {i.username}</h1>
                <h1>age : {i.age}</h1>
                <h1>gender : {i.gender}</h1>
                <button className='mt-3 bg-green-300 rounded-md p-1' onClick={() => handleclick(i.id)}>❤️ favored</button>
                
             </div> 
        ))
      }
    </div>
  )
}



// this component fetching the data from dummyuserapi and it provides the users data in list along with i need to update the user fav feature by sending the POST req to api endpoint


// im gonna show the user name and age and his gendet