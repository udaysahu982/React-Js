import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import { Home } from './Home'
import About from './About'
import Navbar from './Navbar'
// import React from 'react'

export const Routing = () => {
  return (
    <>
  




 


  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<Home/>}/>


  </Routes>
  
  
  
   </BrowserRouter>

</>
)
}
