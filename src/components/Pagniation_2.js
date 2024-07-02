import React, { useEffect, useState } from 'react'

export const Pagniation_2 = () => {

    const [data , setdata] = useState(null)
    const [page , setpage] = useState(1)
   
    console.log(page)
 


    const fetch_data = async() =>{
        try{
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a79a50cc9c617bb7abb717d180c0e357&language=en-US&page=${page}`)

        const json = await res.json()
        
        setdata(json)
        }
        catch(error){
            console.log(error)
        }
}

    useEffect(() =>{
        
         fetch_data()
    },[page])

    const total_pages = Math.floor( data?.total_pages / 20 )

    const spred_num = Array.from({length :total_pages} ,(_, i) => i + 1)
    

    if(!data) return <div>...loading</div>

    
  return (
    <div>
          {
            data?.results?.map((i) =>(
                <div key={i.id}>
                   <li>{i.title}</li>
                </div>
            ))
          }

          <div className='flex p-4 m-4'>
                <button onClick={() => setpage(prev =>prev-1)} disabled={page === 1} role='button'>prev</button>
             {spred_num.map((i) => (
                       <span  role='span' className={'  m-4 p-4 cursor-pointer' + (page === i  ?  'font-bold p-2 underline text-red-500' : 'no-underline')} onClick={() => setpage(i)}> {i}</span>
                ))}
                <button onClick={() => setpage(prev => prev + 1)} className='m-3' disabled={total_pages === page}>next</button>
           </div>
    </div>
  )
}
