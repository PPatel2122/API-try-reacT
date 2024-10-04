import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
 
    const user = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
      ];


  return (
  <>
    
    <div>
        <h2>User List</h2>
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    


    </>
  )
}

export default Home