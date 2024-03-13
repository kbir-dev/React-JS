import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import About from './Components/About'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import User from './Components/User'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></> 
    },
    {
      path:"/login",
      element: <><Navbar/><Login/></>
    },
    {
      path:"/about",
      element: <><Navbar/><About/></>
    },
    {
    path:"/user/:username",
    element: <><Navbar/><User/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
