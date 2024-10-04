import React from 'react'
import { useParams } from 'react-router-dom'

const Userde = () => {

    const {id}=useParams()

  return (
    <>
       <div>Userde</div>
       <h2>user id={id}</h2>
    </>
  )
}

export default Userde