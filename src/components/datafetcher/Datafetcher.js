import React, { useEffect, useState } from 'react'

export const Datafetcher = () => {

    const [data , setData] = useState([])


    useEffect(() => {

        const fetch_data = async () => { 

          try{
            const res  = await fetch('')

            const json = await res.json()

            setData(json)
          }  

          catch (error) {
            console.log(error)
          }
            
        }
        fetch_data()
    } , [])
  return (
    <div>
        {
        !data ? <p>Loading...</p> :     data.map(( i) => (
                <div key={i.id}>
                    <img src={i.img} />
                    <p>{i.title}</p>

                </div>
            ))
        }
    </div>
  )
}
