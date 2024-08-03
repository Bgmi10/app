import React, { useEffect, useState } from 'react'
import { addblog } from '../../utils/Blogslice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Addblog = () => {

    const [list , setList] = useState([])
    const [title , setTitle] = useState('')
    const [name , setName] = useState('')
    const [imgurl , setImgurl] = useState('')
    const [err , setErr] = useState('')
    const [desc , setDesc] = useState('')
    const dispatch = useDispatch()
    

    const blogData = {
        id : Math.floor(Math.random() * 1000),  
        blogtitle : title,
        username : name,
        blogimg : imgurl,
        blogdesc : desc

    }

     
    const handlepostblog = () => {

        if(name === ''){
            setErr('name is required field ')
        }

        else if(imgurl === ''){
            setErr('imgurl is reqiured field')
        }
        else if(title === ''){
            setErr('title is required field')
        }

        else if(desc === ''){
            setErr('desc is reaquired field')
        }
        else{
            setList(prev =>  [...prev , blogData])
             dispatch(addblog(blogData))
             setName('')
             setImgurl('')
             setDesc('')
             setTitle('')
             setErr('Blog added successfully go to list page')
        }
         
       
    }
  return (
    <>
      <div>
        <Link to={`/bloglist`}>go to list page</Link>
        <div className='m-4 '>
        <span className='font-medium text-lg'>
            Blog title : 
        </span>
        <input type='text' className='p-2 rounded-md w-auto border-2 outline-none m-4' value={title} onChange={e => setTitle(e.target.value)} required/> 
        </div>
        <div className='m-4 '>
        <span className='font-medium text-lg'>Your name : </span>
            <input type='text' className='p-2 rounded-md w-auto border-2 outline-none m-4' onChange={e => setName(e.target.value)} value={name} required/>
        </div>
        <div className='m-4 '>
            <span className='font-medium text-lg'>Blog img url : </span>
            <input type='url'  className='p-2  w-1/2 border-2  rounded-md outline-none ' onChange={e => setImgurl(e.target.value)} value={imgurl} required/>
        </div>
        <div className='m-4'> 
            <span className='font-medium text-lg m-3 '>
                Write blog :  
            </span>
            <textarea type='text' className='h-52 align-text-top  p-2 border-2 outline-none  rounded-md w-1/2 ' value={desc} onChange={e => setDesc(e.target.value)} required/>
        </div>
        <button onClick={handlepostblog} className='m-4 p-2 bg-blue-400 rounded-md'>Post Blog</button>
        {err}
      </div>
    </>
  )
}
