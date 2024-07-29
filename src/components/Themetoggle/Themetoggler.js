import React, { useEffect, useState } from 'react'
import { ThemeToggle2 } from './ThemeToggle2'

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


  return (
    <div className={theme === 'dark' ? 'bg-white text-black h-screen' : 'bg-black text-white'}>

        <button onClick={handleclick} className=''>Toggletheme</button>

        <ThemeToggle2 />
    </div>
  )
}
