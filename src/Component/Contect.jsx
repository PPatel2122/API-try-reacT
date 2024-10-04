import React from 'react'
import { Link } from 'react-router-dom'

const Contect = () => {
  const userr = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
  ]
  return (
    <>
    <h2>Userr list</h2>
    <ul>
      {userr.map((userr)=>(
        <li key={userr.id}>
          <Link to={`/user/${userr.id}`}>
            {userr.name}
          </Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Contect