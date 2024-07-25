import React, { useEffect, useState } from 'react'

export const Page = () => {
    
    const [data , setData] = useState(null)
    const [page , setPage] = useState(1)
    const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=a79a50cc9c617bb7abb717d180c0e357&page=${page}`
    

    const fetch_data = async () => {
        const res = await fetch(api)

        const json = await res.json()

        setData(json)
    }
    useEffect(() => {
          fetch_data()
    },[page])

    const totalpages = data?.total_pages

   const arr =  Array.from({length : totalpages} , (i , index) => index + 1  )
   console.log(arr)

   const handleclick = (id) => {
       setPage(id)
   }
   

   const Shimmer = () => {
    return (
        <div className='border m-2 p-2 h-32 w-32 animate-pulse bg-gray-200'>

        </div>
    )
   }
  return (
    <div>
        {
           data  ? <Shimmer/> : data?.results?.map((i) => (
            <img src={'https://media.themoviedb.org/t/p/w440_and_h660_face' + i.poster_path} key={i.id} className='h-32 w-32 p-2 m-4'/>
      ))
        }
        <button onClick={()=> setPage(page => page - 1)} className={page === 1 ? 'cursor-not-allowed' :'bg-black text-white rounded-md p-2 m-4'} disabled={page === 1}>prev</button>
        {arr.map((i , index) => <button className='p-2 m-2 border' onClick={() => handleclick(index + 1)}> {i}</button>)}
        <button onClick={() => setPage(page => page + 1)} className='bg-black text-white rounded-md p-2 m-4' disabled={totalpages === page} >next</button>
    </div>
  )
}
