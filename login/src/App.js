import React from 'react'
import "./index.css"
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Navbar from './Components/Navbar'
 
const App = () => {
    const router = createBrowserRouter([

        {path:"/",  element : <SignUp/>},
        
        {path:"/login",  element : <LoginForm/>},
        
        {path:"/home",  element : <Home/>},

    ])
  return (
    <>
   
    <RouterProvider router = {router}/>
    </>
  )
}
 
export default App