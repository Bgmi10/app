import React, { useCallback, useEffect, useState } from 'react'

export const Pagintion_2 = () => {
  const [data , setdata] = useState(null)
  const [page , setpage] = useState(1)

  const handleclick = (index) =>{
    setpage(index)
  }


  const memoizehandler = useCallback(handleclick , [])
   console.log('render')
  
  
  useEffect(() =>{

    const fetch_data = async () =>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a79a50cc9c617bb7abb717d180c0e357&language=en-US&page=${page}`)

        const json  = await res.json()
        setdata(json)   
   
    }
     fetch_data()
   
   } ,[page])

   const totalpages = Math.floor(data?.total_pages / 20);
   const arr = Array.from({ length: totalpages }, (_, i) => i + 1);
   
   


   const handlenext = () =>{
    setpage(page => page + 1)
   }
  

   const handleprev  = () =>{
    setpage(page => page -1 )
   }
  return (
    <div>
        {
          data?.results?.map((i) =>(
            <div key={i.id}>
         <img src={'https://media.themoviedb.org/t/p/w440_and_h660_face' + i.poster_path} className='w-30 h-32 rounded-md m-4 '/>
                   {i.title}
            </div>
          ))
        }
        <button className='text-bold bg-green-300 p-2 rounded-md ' onClick={handleprev} disabled={page === 1}>Prev page</button>
       {arr.map((i , index)=>(

         <button className='p-2 bg-blue-500  m-2 rounded-sm' onClick={()=>memoizehandler(index + 1)} key={index}>{i}</button>
       )) }
      <button className='text-bold bg-green-300 p-2 rounded-md ' onClick={handlenext} disabled={totalpages}>Next page</button>
    </div>
  )
}
