import React, { useEffect, useState } from 'react'

export const Themetoggler = () => {

    const [theme , setTheme] = useState(() => {
       return  localStorage.getItem('theme') || 'dark'
    })


    useEffect(() => {
       localStorage.setItem('theme' , theme)
    },[theme])

    const handleclick = () => {
        setTheme(p => p === 'dark' ? 'light' : 'dark')
    }

    localStorage.setItem('theme' , theme)

  return (
    <div className={theme === 'dark' ? 'bg-white text-black h-screen' : 'bg-black text-white'}>

        <button onClick={handleclick} className=''>Toggletheme</button>
    </div>
  )
}
