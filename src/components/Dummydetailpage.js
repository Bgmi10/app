import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Dummydetailpage = () => {
    
    const {id} = useParams() 
    const [data , setdata]  = useState(null) 
 
    useEffect(() =>{ 
       const fetch_data = async () =>{
        try{
            const res  = await fetch(`https://dummyjson.com/products/${id}`)
            const json = await res.json()
            setdata(json)
        }
        catch(error){
              console.log(error)
        }
       }

       fetch_data()
    },[])


  return (
    <div>
      <>
      
      <img src={data?.images} alt='no img'/>
      <div>
        <p className='justify-center flex'>{data?.title}</p>
        <p className='justify-center flex'>{data?.price } $</p>
      </div>
      </>
    </div>
  )
}
