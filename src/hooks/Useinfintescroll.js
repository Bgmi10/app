import React, { useEffect, useState } from 'react'

export const Useinfintescroll = () => {

    const [data, setdata] = useState([])
    const [page , setpage] = useState(1)
    const [scrollcheck, setscrollcheck] = useState(false)
    console.log(scrollcheck)


     const scrollevent = () =>{
         const check  = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
         console.log(check)
        setscrollcheck(check)
    

     }
    
   
    useEffect(() =>{
        window.addEventListener('scroll' , scrollevent)

        return () => window.removeEventListener('scroll', scrollevent)
    },[])


    useEffect(() =>{
        if(scrollcheck) {
            setpage(page => page  + 1)
        }
        setscrollcheck(false)
    }, [scrollcheck])


    const fetch_data = async() =>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a79a50cc9c617bb7abb717d180c0e357&language=en-US&page=${page}`)

        const json = await res.json()
        console.log(json)
        setdata(prevdata => [...prevdata , ...json.results])
    }


  
    useEffect(() =>{
        
     fetch_data()
     
    },[page])
  return (
    <div>
        {
        data?.map((i) =>(
            <div>
                <img src={'https://media.themoviedb.org/t/p/w440_and_h660_face' + i.poster_path} />
             </div>
        ))
        }
    </div>
  )
}
