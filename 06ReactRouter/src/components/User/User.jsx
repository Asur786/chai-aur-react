import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-gray-700 text-white p-3 text-center text-3xl'>User: {id}</div>
  )
}

export default User
