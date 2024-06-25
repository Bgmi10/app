import React, { useEffect, useState } from 'react'

export const Bookstoresearch = () => {

    const [userquery , setuserquery ] = useState('')
    const [data , setdata] = useState(null)
   

    const fetch_data = async () =>{
     const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${userquery}&api_key=a79a50cc9c617bb7abb717d180c0e357`)
     const json = await response.json()
     setdata(json)
    }

    useEffect(() =>{

      const id = setTimeout(() =>{
              fetch_data()
        },300)

        return () => clearTimeout(id)
    },[userquery])

    
  return (
    <div>
       <input className='p-2 rounded-md ml-80 mt-10 border-2 w-1/2  ' onChange={e => setuserquery(e.target.value)}/>
       <button >submit</button>

       {!data ? <p>loading...</p> : <div>
        {
            data?.results?.map((i) =>(
                <li className='justify-center '>{i.title}</li>
            ))
        }
       </div>}
    </div>
  )
}
