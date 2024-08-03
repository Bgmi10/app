import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Bloglist = () => {

    const blogs = useSelector(store =>store.Bloglist)
    console.log(blogs)
  return (
       
       <>
       <div className='flex flex-wrap m-4'>
       {
        blogs.map((i ) => (
         <Link to={`/blogpost/${i.id}`}>
          <div className='border-2 w-72 h-auto p-2 m-2  cursor-pointer hover:scale-105 transition-transform' key={i.id} >
            <div className='border m-2 p-2'>
             <span className=''>{i.blogtitle}</span>
             </div>
             <div>
             <span className='m-2'>-by {i.username}</span>
             </div>
             <div className='m-2'>
                 <img src={!i.blogimg  ? 'https://secure.gravatar.com/avatar/e6cd32df60ac76fa5da90d26ef9d60c1?s=64&d=mm&r=g' : i.blogimg} className='rounded-md' />
              </div>
              <div>
                <p>{i.blogdesc.slice(0 , 150)}...</p>
              </div>
          </div>
          </Link>
        ))
       }
 
     </div>
        
       </>
   
  )
}
