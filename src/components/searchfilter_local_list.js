import React, { useEffect, useState } from 'react'

export const Searchfilter_local_list = () => {
    const [userquery , setuserquery] = useState('')
    const [filterdata , setfilterdata] = useState([])

    const movies = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Dark Knight', year: 2008 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
       
      ];

    
    
    useEffect(() =>{

     const a = setTimeout(() => {
            const filter_movies = movies.filter((i) =>i.title.toLocaleLowerCase().match(userquery.toLocaleLowerCase()))
            setfilterdata(filter_movies)
        }, 200);

  return () => clearTimeout(a)
      

      
    } ,[userquery])
      
    


  return (
    <div >
        <div className='flex justify-center'>
      <input type='text' onChange={e => setuserquery(e.target.value)} className='p-2 border-2  px-40 mt-20 text-center border-t-purple-500' />
      </div>
       <div className='px-96 mt-4 '>
        {
            filterdata.length === 0 ? <p>no search found !</p> : filterdata.map((i) =>( 
                <p className=' shadow-md p-2'>{i.title}</p>
            ))
        }
       </div>
    </div>
  )
}
