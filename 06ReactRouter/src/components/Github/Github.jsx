import React, { useEffect,useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Asur786')
        .then(response=>response.json())
        .then((data)=>{
            console.log(data)
            setData(data)//ye karne ke baad values kaise nikalna h ye tough hota h isliye pehle data ka nature dekh lo console.log karke
        })
    },[])
  return (
    <div className='bg-gray-700 text-center m-4 text-white p-4 text-3xl display-flex' >
        <h1>User name:  {data.login}</h1>
        <h1>Github Following: {data.following}</h1>
        <img className="my-8 mx-auto text-center" src={data.avatar_url} alt="Git picture" width={400} />
    
    </div>
  )
}

export default Github
