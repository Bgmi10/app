import React, { useEffect, useState } from 'react'

export const Traffic = () => {

     const [changecolor , setChangecolor] = useState('red')

  

     useEffect(() =>{

        const id = setInterval(() => {
             switch (changecolor){
                case 'red' : 
                 setChangecolor('yellow')
                 break

                 case 'yellow' :
                    setChangecolor('green')
                    break;

                case 'green' : 
                  
                   setChangecolor('red')
                   break    
             }

        }, 3000);
         

        return () => clearInterval(id)
         
     },[changecolor])

 
  return (
    <>
       <div className='flex justify-center bg-black '>
           <div className={`rounded-full m-2 w-10 h-10 border ${changecolor === 'red' ? 'bg-red-500' : ''}`}></div>
           <div className={`rounded-full m-2 w-10 h-10 border ${changecolor === 'yellow' ? 'bg-yellow-400' : ''}`} ></div>
           <div className=  {`rounded-full m-2 w-10 h-10 border ${changecolor === 'green' ? 'bg-green-400' : ''} `}></div>
       </div>
    </>
  )
}


// after specific 30 sec the color should be change