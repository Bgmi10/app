import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from 'react-router-dom';
export const Protectedroutefortexteditor = ({childrenroute}) => {


    const {isAuthenticated} = useAuth0()

    
  return (
    <div>
      {  isAuthenticated ? childrenroute : <Navigate to={'/home-editor' } /> }
    </div>
  )
}
