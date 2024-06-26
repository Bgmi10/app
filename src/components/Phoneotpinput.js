    import React, { useEffect, useRef } from 'react'

    export const Phoneotpinput = () => {
         const firstinput = useRef()
         const secondinput = useRef()
         const thirdinput=  useRef()
         const fourthinput = useRef()
         
         const handlefirstinputchange = (dynamicInput, nextInput) => {
            if (/^\d$/.test(dynamicInput.current.value)) {
              if (nextInput) {
                nextInput.current.focus();
              }
            } else {
              dynamicInput.current.value = ''; // Clear the invalid input
            }
          }

          useEffect(() =>{
            firstinput.current.focus()
          },[])

    return (
        <div className='justify-center flex  p-10 '>
            <input type='text'   className='w-10 h-10 border-2 rounded-md border-slate-500 m-2 text-center' maxLength={1}  onChange={() => handlefirstinputchange(firstinput ,secondinput)} ref={firstinput}/> 
        <input type='text'     className='w-10 h-10 border-2 rounded-md border-slate-500 m-2 text-center' ref={secondinput} onChange={()=>handlefirstinputchange(secondinput , thirdinput)} maxLength={1} /> 
            <input type='text'     className='w-10 h-10 border-2 rounded-md border-slate-500 m-2 text-center' ref={thirdinput}  onChange={() => handlefirstinputchange(thirdinput , fourthinput)} maxLength={1}/> 
            <input type='text'     className='w-10 h-10 border-2 rounded-md border-slate-500 m-2 text-center' ref={fourthinput}  maxLength={1} />
        </div>
    )
    }
