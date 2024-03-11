import React, { useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({children}) => {
    const [user,setUser]=useState(null)

    return(
        <UserContext.Provider value={{user,setUser}}> 
            {children}   
        </UserContext.Provider>  //{children are like components imported and written in app.jsx }
        //aur ye children ke andar jo components honge unko value user aur setUser chahiye na toh wo v pass karenge tag ke andar.
    )
}

export default UserContextProvider