import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Blogpost = () => {
  const {id} = useParams()


  const blogs = useSelector(store => store.Bloglist)
  

  const blog = blogs.find( i => i.id.toString() === id)
  
  
  return (
    <div>
       <img src={blog?.blogimg}  className='m-4 w-1/2 h-80 '/>
        <div className='w-1/2 m-2'>
          <p className='m-2 text-md font-sans text-gray-600 '> {blog?.blogdesc}</p>
          
        </div>
        <div className='text-center mr-6'>
          <span className='text-center font-medium'>-by {blog?.username}</span>
        </div>
    </div>
  )
}
