import React from 'react'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom"
import { Home } from './Home'
import About from './About'
import Navbar from './Navbar'


export let Routes = () => {

  const router=createBrowserRouter([
    {path:"/home",
      element:<Home/>
    },
    {path:"/about",
      element:<About/>
    }
  ])

  return (
  <>
  <Navbar/>
  <RouterProvider router={router}/>
  
  </>  
    
  )
}
