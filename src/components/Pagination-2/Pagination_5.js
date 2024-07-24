import React, { useEffect, useState } from 'react'
import { Pagination_6 } from './Pagination_6'


export const Pagination_5 = () => {


    const [data , setData] = useState([])
    
    const [endpage , setEndpage ] = useState(false)
    
    const [page , setPage ] = useState(1)
  

    const fetch_data = async () => {

        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a79a50cc9c617bb7abb717d180c0e357&page=${page}`)

        const json = await res.json()

        setData(prev => [...prev , ...json?.results] )
    }
    

    useEffect(() => {
      if(endpage){

        setPage(page => page + 1)

      }
         
    },[endpage])
    useEffect(() => {
       //fetch_data()
    } ,[page])


    const handlescroll = ()  => {
     const len = window.innerHeight + window.scrollY > document.body.scrollHeight

     setEndpage(len)
    }
 
    useEffect(() => {
           window.addEventListener('scroll' , handlescroll)


           return () => window.removeEventListener('scroll' , handlescroll)
    },[])
  return (
   <>
     <div>
        {
            data?.map((i ) => (
              <div key={i.id}>
                 <img src={'https://media.themoviedb.org/t/p/w440_and_h660_face' + i.poster_path} className='h-32 w-32 rounded-md p-2 m-4'/>
              </div>
            ) )
        }
     </div>
     <Pagination_6  data={data}/>
   </>
  )
}
