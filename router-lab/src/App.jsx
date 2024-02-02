import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './assets/components/Home'
import Contact from './assets/components/Contact'
import About from './assets/components/About'
import Help from './assets/components/help'

function App() {

  return (

    <>
<Navbar/>
<Routes>
    <Route path="/Home" element = {<Home />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/About" element={<About />} />
    <Route path='/Help' element={<Help/>}/> 

</Routes>
    </>
  )
}

export default App
