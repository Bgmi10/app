import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cache_results } from '../../utils/SearchSlice'

export const Search_book = () => {

    const [ data, setdata ] = useState(null)
    const [userquery , setuserquery] = useState('')
    const dispatch = useDispatch()

    const cache_result = useSelector(store => store.searchcache)
    console.log(cache_result)


    const fetch_search_data = async () =>{
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=a79a50cc9c617bb7abb717d180c0e357&query=${userquery}&include_adult=false&language=en-US&page=1`)
        const json = await res.json()
        
        setdata(json.results)
        dispatch(cache_results({[userquery] : json.results}))
    }


     // user key storke is less than 200ms dont make api call if the user key stoke is graterthan 200 ms than make api call 

    useEffect(() => {
           const id = setTimeout(() => {
                if(cache_result[userquery]){
                    setdata(cache_result[userquery])
                }
                else{
                    fetch_search_data()
                }
              }, 200);

              return () => clearTimeout(id)
    } ,[userquery])
  return (
    <div>
        <input  type='text' placeholder='search for movies ' className='m-2 p-2 rounded-md ' onChange={e => setuserquery(e.target.value)} value={userquery}/>

        <div>
            {
                data?.map((i) => (
                    <div key={i.id}>

                       <li className='text-bold text-red-400'> {i.title}</li>    
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}
