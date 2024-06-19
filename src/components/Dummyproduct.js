import React, { useEffect, useState , useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

export const Dummyproduct = () => {

    const [data , setdata ] = useState(null)

    const [userquery , setuserquery] = useState('')
    const [clickinput , setclickinput] = useState(true)
    const [searchresults  , setsearchresults]  = useState(null)
   
  

    useEffect(() =>{
         const fetch_data = async () =>{
            try{
            const res = await fetch('https://dummyjson.com/products')
            const json = await res.json()
            setdata(json)
            }
            catch(error){
            console.log(error)
            }
         }

         fetch_data()
         
    }, [])
   
    const fetch_searchh_data = async () =>{
        try{
            const res = await fetch(`https://dummyjson.com/products/search?q=${userquery}`)

            const json = await res.json()
            console.log(json)
            setsearchresults(json)
            
        }
        catch (error){
            console.log(error)
        }
       }

          
        useEffect(() =>{
            
               
              const identifier = setTimeout(() => {
                  fetch_searchh_data()
              }, 300);
                    
              
              return () => clearTimeout(identifier)
            
        
        },[userquery])
              
    
    const hanldefocus = useCallback(()=>{
            setclickinput(false)
    },[])
  

    const handleblur = useCallback(() =>{
          setclickinput(true)
    },[])
   
  return (
    <div>
        <div>
            <input type='text' placeholder='search for products' className='p-2 rounded-md border-2  m-10 mt-20'  onChange={(e) => setuserquery(e.target.value)} onFocus={hanldefocus} onBlur={handleblur}/>
            <button className='bg-blue-400 p-2 rounded-md'  >search</button>
        </div>
      {
       clickinput ?   data?.products?.map((i) =>(
            <Link to={`/dummyproductdetail/${i.id}`} key={i.id}>
            <div >

                 {i.images ?  <img  src={i.images} className='w-28 h-28 m-10' /> : <p>not found</p>}
                 <div className='m-14'>{i.title}</div>
            </div>   
            </Link>
        ))
        : <div>
            {
            searchresults?.products?.map((i) =>(
                <div className='px-18 shadow-md p-4' key={i.id}>
                   <Link to={`/dummyproductdetail/${i.id}`}>
                     <div className='flex'>
                        <img src={i.images} className='h-10 w-10 '/>
                        <p className='m-2'>{i.title}</p>

                     </div>
                   </Link>
              </div>
            ))
            }
        </div>
      }
    </div>
  )
}
