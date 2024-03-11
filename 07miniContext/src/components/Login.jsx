//is component me hum data kaise bhejenge ye seekhenge through context

import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    // username and password ka UI me changes dikhane ke liye states lagegi na
    const[username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const {setUser}=useContext(UserContext)//state me data bhejne ke liye state ka access lenge jo ki UserContext me pada hua hai


    //submit hone ke baad is component ke data ko bhejna hai to states kii access lekr uske through bhejte hai. States userContext se aa rha h.
    const handleSubmit=(e)=>{
        e.preventDefault() //submit krne ke baad by default post value ke through chali jati hai toh hum nii chahte ye
        setUser({username,password})

    }


  return (
    <div>
      <h2>Login</h2>
      <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/>

        {"  "}

      <input type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
