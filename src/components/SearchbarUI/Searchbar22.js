import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

 const Searchbar22 = () => {

    const [isshow , setIsshow] = useState(false)
    const [data , setData] = useState(null)
    const [userinput , setUserinput ] = useState('')
    const [cacheresults  , setCacheresults  ] = useState()

   const api = `https://dummyjson.com/products/search?q=${userinput}&limit=8`


   const fetchdata = async () => {
    const res = await fetch(api)

    const json = await res.json()
    setData(json)
   
   }


   useEffect(() => {
  const id =  setTimeout(() => {
    fetchdata()
   }, 200);
    
   return () => clearTimeout(id)
},[userinput])

   const handlefocus = () => {
      setIsshow(true)
   }

   const handlechange = (e) => {
    setUserinput(e.target.value)
   }

  return (
    <>
    <div className='flex justify-center '> 
        <input type='text' placeholder='search for products ' className='p-2 m-4 rounded-md outline-none border  hover:shadow-md  w-[400px] ' onFocus={handlefocus} onBlur={() => setIsshow(false)} onChange={(e)=> handlechange(e)}/>
        <FontAwesomeIcon icon={faSearch} className='mt-7  text-gray-400  lg:ml-[360px] sm: ml-[290px] absolute'/>
       
    </div>
   {isshow && <div className='flex justify-center'>
     <div className='w-[400px] border h-80 rounded-xl mt-[-14px] '>
            {
                data?.products?.map((i) => (
                    <ol key={i.id}>
                    <li  className='p-2 shadow-sm'>{i.title}</li>
                    </ol>
                ))
            }
     </div>
     </div>}
     </>
  )
}



export default Searchbar22