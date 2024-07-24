import React, { useEffect, useState } from 'react'

export const Infintescroll2 = () => {
    const [page , setPage ] = useState(1)
    const api = `https://api.themoviedb.org/3/tv/popular?api_key=a79a50cc9c617bb7abb717d180c0e357&language=en-US&page=${page}`

    const [data , setData] = useState(null)

    const fetch_data = async () => {
        const res = await fetch(api)

        const json = await res.json()

        console.log(json)

        setData(json)
    }

    useEffect(() => {
    fetch_data()
    },[])
  return (
   <>
     <div>
        {
            data?.results.map((i ) => (
                <div>
                    <img src={i.posterpath} />
                  </div>  
            ))
        }
     </div>
   </>
  )
}
