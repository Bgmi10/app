import React, { useEffect, useState } from 'react'

export const BookItem = () => {

    const [data  , setdata] = useState(null)


    const fetch_book_data = async ()=>{

        try{
            const res  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a79a50cc9c617bb7abb717d180c0e357&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
            const json = await res.json()
            setdata(json)
            

        }

        catch(error){
              console.log(error)
        }
       
    }


    useEffect(() =>{
     let componentmount = false 

      fetch_book_data()
    },[])
  return (
    <div> 
        {
            data?.results.map((i)=>(
                <div key={i.id}>
                    <li>
                        {
                            i.title
                        }
                    </li>
                 </div>   
            ))
        }

    </div>
  )
}
