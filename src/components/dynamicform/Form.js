import React, { useState } from 'react'

export const Form = () => {

    const [data , setData] = useState({
        firstname : '' ,
        subscribe : false,
        gender : '',
        country : ''
    })

    const [optiondata ,setoptiondata ] = useState('')
    console.log(optiondata)
    console.log(data)

    const formdata = {
        "fields": [
          {
            "name": "firstName",
            "label": "First Name",
            "type": "text",
            "required": true
          },
          {
            "name": "subscribe",
            "label": "Subscribe to newsletter",
            "type": "checkbox"
          },
          {
            "name": "gender",
            "label": "Gender",
            "type": "radio",
            "options": ["Male", "Female", "Other"]
          },
          {
            "name": "country",
            "label": "Country",
            "type": "dropdown",
            "options": ["USA", "Canada", "UK"]
          }
        ]
      }
      

      const handlechange = (e) => {
        setData(prevdata => ({...prevdata , firstname }))
        
      }
  return (
   <>
   <div className='text-center pt-3'> <span className='text-center font-serif text-lg pt-3 '>Fill the form </span></div>
 
      {
        formdata.fields.map((i ) => (
            <div className='justify-center flex m-3 text-start'>
               <span className='mt-4 p-2 font-medium text-lg '>{i.name} : </span>  <input  className='m-3 p-3 rounded-md border outline-none ' placeholder={i.label}  type={i.type ? i.type : null}  required={i.required} onChange={handlechange} />
               
              {i.options && <select className='p-2  outline-none' onChange={e => setoptiondata(e.target.value)}>
                { i?.options?.map(i => <option className='outline-none borde' >{i}</option>)}
               </select>}
            </div>
        ))
       
      }
      <div className='flex justify-center'>
       <button className='bg-black p-2 rounded-md text-white w-40' onClick={() => {console.log(formdata.fields)}}> submit </button>
       </div>
   </>
  )
}
