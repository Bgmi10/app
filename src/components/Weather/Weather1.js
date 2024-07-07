import React, { useEffect, useState } from 'react'

export const Weather1 = () => {

    const [data , setData] = useState(null)

    const [userquery , setUserquery] = useState('')
    console.log(data)

    const user_query = userquery.trim().toLowerCase()


    
  const handlebtn = async () =>{
    const fetch_data = async () =>{

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user_query}&appid=cb90319c5e2007db25f6214d1a9a9b80&units=metric`)

        const json = await res.json()
        setData(json)

     }

     fetch_data()

     setUserquery('')
  }
 
  return (
   <>
     <div className='m-3 flex justify-center '>
        <input type='text' className='p-2 m-2 border-2  rounded-md' onChange={e => setUserquery(e.target.value)} value={userquery}/>
        <button className='bg-black text-white p-2 m-2 rounded-md ' onClick={handlebtn}>Search</button>


     </div>

     <div className='p-2 m-10 '>
        { 
           !data ?  <p>no city found</p>  : <div className='mb-2'>
            <p className='font-light'>cityname :<span className='font-medium mb-2 '> {data?.name}</span></p>
            <p className='font-light'>Temp :<span className='font-medium'> {data?.main?.temp} °C</span></p>
            <p className='font-light'>TempMax :<span className='font-medium'> {data?.main?.temp_max} °C</span></p>
            <p className='font-light'>TempMin :<span className='font-medium'> {data?.main?.temp_min} °C</span></p>
            <p className='font-light'>humidity :<span className='font-medium'> {data?.main?.humidity} </span></p>
            <p className='font-light'>Wind deg :<span className='font-medium'> {data?.wind?.deg} </span></p>
            <p className='font-light'>wind speed :<span className='font-medium'> {data?.wind?.speed} </span></p>
            </div>
        }
     </div>
   </>
  )
}
