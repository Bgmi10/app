import React, { useEffect, useState } from 'react'

export const Pagination_6 = () => {

  const [data, setData] = useState(null)
  const [page , setPage] = useState(1)
  console.log(page)
 
   
  const fetch_data = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a79a50cc9c617bb7abb717d180c0e357&page=${page}`)

    const json = await res.json()

    setData(json)
  }

  useEffect(() => {
      fetch_data()
  },[page])

  const totalpages = data?.total_pages 

  const length = Array.from({length : totalpages} , (i , index) => index + 1)
  
  
  const handleclick = (i) => {
    setPage(i)

  }

  
  return (
   <>
    <div>
        {
          data?.results.map((i) => (
            <div key={i.id}>
                 <img src={ 'https://media.themoviedb.org/t/p/w440_and_h660_face' + i.poster_path} className='p-4 m-4 h-20 w-20 '/>
            </div>


          ))
        }
        <button onClick={() => setPage(page => page - 1)} disabled={page === 1}>prev</button>
        {
          length.map((i , index) => <button className={index === i ? 'p-1 m-4 border bg-gray-400 ' : 'p-1 m-4 border'} key={index} onClick={()=> handleclick(index + 1)}>{i}</button>)
        }
        <button onClick={() => setPage(page => page + 1)} disabled={totalpages === page}>next</button>
    </div>
   </>
  )
}
