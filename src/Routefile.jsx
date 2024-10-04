import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contect from './Component/Contect'
import UserDetails from './Component/UserDetails'
import Navbar from './Component/Navbar'

const Routefile = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />


        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contect' element={<Contect />} />
          <Route path='/user/:id' element={<UserDetails/>}/>
          
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default Routefile