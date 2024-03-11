import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const {user}=useContext(UserContext)

  if(!user){
    return(
        <div>Please Login</div>
    )
  }
  else{
    return (
        <div>
        Welcome {user.username} and your password is {user.password}
        </div>
    )
  } 
}
