import React, { useEffect, useState } from 'react'

export const ThemeToggle2 = () => {

    const [theme , setTheme ] = useState(() => {
        return localStorage.getItem('theme' ) || 'light'
    })

    useEffect(() => { 

        localStorage.setItem('theme' , theme)
     
    },[theme])

    const handleclick = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }
  return (
    <div className={theme === 'dark'? 'bg-black text-white ' : 'bg-white text-black'}>
        <button onClick={handleclick} >click me </button>
    </div>
  )
}
