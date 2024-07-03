import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
        <>
      <div className="flex justify-end">
        <img src={user.picture} alt={user.name}  className="w-7 h-7 mr-32   "/>
        
        
      </div>
      <h2 className="flex justify-end mr-3">{user.name}</h2>
      </>
    )
  );
};

export default Profile;
