import React from 'react';

import { Footer } from './Footer';
import ImageCard from './ImageCard';
import ImgContent from './ImgContent';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';



const router= createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Home/>
      </div>,
    },
    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>,
    },
    {
      path:"/dashboard",
      element:<Dashboard/>,
    },
  ]
)


const App=()=>{


  
  return(
    <> 
      <RouterProvider router={router}/>
    
    </>
  )
}


export default App