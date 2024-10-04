import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState(null); 
  
    useEffect(() => {
      
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
        .then((response) => response.json())
        .then((data) => setUser(data)) 
        .catch((error) => console.error('Error fetching user:', error));
    }, [id]);
  
    if (!user) {
      return <div>Loading...</div>; 
    }
  
    return (
      <div>
        <h1>User Details</h1>
        <p>User ID= {id}</p>
        <p>Name= {user.username}</p>
        <p>Email= {user.email}</p>
        <p>Phone= {user.phone}</p>
        <p>Website= {user.website}</p>
        <button onClick={()=>navigate(-1)}>Go back</button>
        <button onClick={()=>navigate('./Card')}>Card</button>
      </div>
    );
}

export default UserDetails