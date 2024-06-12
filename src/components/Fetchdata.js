import React, { useEffect, useState } from 'react'
import { Form } from './Form'
import axios from 'axios'
import { Counter } from './Counter'

export const Fetchdata = () => {

    const [data, setdata ] = useState(null)

    useEffect(() =>{
          const movie_data = async  ( ) =>{
            try{
            const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a79a50cc9c617bb7abb717d180c0e357&language=en-US&page=1')

            
            console.log(res.data) 
            setdata(res.data)

          }
        
        catch(error) {
            console.log(error)
        }
      
    }
  
       
    },[])

  
  return (
    <div>
        {
           data?.results?.map((i) =>(
            <div key={i.id}>
               <p>{i.title} </p>
           </div>
           ))
        }
        <Form />
        <Counter />
    </div>

  )
}
