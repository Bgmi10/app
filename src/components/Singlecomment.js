import React from 'react'

export const Singlecomment = ({data}) => {

    
  return (
   <>
   {data?.map((i , index) => (  
    <div className=' border-l-2 pl-10'>
    <div className='flex m-30' key={index}>
       <img src='https://yt3.ggpht.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s68-c-k-c0x00ffffff-no-rj' alt='img-tag' className='h-8 w-8 rounded-full  mt-2'/>

       <p className='m-3 font-medium'>name : {i.username}</p>
       <p className='m-3 font-light'>msg : {i.comments}</p>
       
     </div>
     <div>
         {i.replies &&  <Singlecomment data={i.replies}/>}
     </div>
     </div>
    ) )}
   </>
  )
}
