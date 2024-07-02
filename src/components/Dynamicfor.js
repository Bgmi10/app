import React, { useState } from 'react'
import { formConfig } from '../utils/formconfig'

export const Dynamicfor = () => {
    const [initialValue , setintialvalue] = useState('')
    console.log(initialValue)

    console.log(formConfig)


    const handlefocus = () =>{
        
    }
  return (
    <div>
       {
        formConfig.map((i , index) => (
            <div>
                <input type={i.type} placeholder={i.label} className='p-2 border-2 m-2 rounded-md' onChange={(e) => setintialvalue(e.target.value)} value={initialValue} onFocus={()=>handlefocus(index)}/>
                
            </div>
        ))
       }
    </div>
  )
}
