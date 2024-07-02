import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const Protectedroutes = ({children}) => {
    const isauth = false 
  return (
    <div>
       {
        isauth ? children : <Navigate to={'/'}/>
       }
    </div>
  )
}
