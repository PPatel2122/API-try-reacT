import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
   <>
   <div className="NAV">
   <ul>
    <div className="NAVV">
   <li><NavLink className="gg" to="/home">HOME</NavLink></li>
   <li><NavLink className="gg" to="/About">ABOUT</NavLink></li>
   <li><NavLink className="gg" to="/Contect">CONTECT</NavLink></li>
   </div>
   </ul></div>
   </>
  )
}

export default Navbar