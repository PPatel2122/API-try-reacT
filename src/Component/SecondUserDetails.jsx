import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const SecondUserDetails = () => {

    const navigate = useNavigate()
    const {id}=useParams()
    const [userr,setUserr]=useState();

    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((Response)=>Response.json)
        .then((data)=>setUserr(data))
    },[id])
  return (
    <>
     <div>
        <h1>User Details</h1>
        <p>User ID= {id}</p>
        <p>Name={userr.username}</p>
        <p>Email= {userr.email}</p>
       <button onClick={()=>navigate(-1)}>Go back</button>
        
      </div>


    </>
  )
}

export default SecondUserDetails