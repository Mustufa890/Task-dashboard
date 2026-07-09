import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './page/dashboard'
import SignUp from './component/signUp'
import Login from './component/login'
import Task from './page/task'

function App() {
  const router = createBrowserRouter([
  {
  path:'/',
  element:<Dashboard/>  
  },
  {
  path:'/signUp',
  element:<SignUp/>  
  },
  {
  path:'/login',
  element:<Login/>  
  },
  {
  path:'/task',
  element:<Task/>  
  }  
  ])

  return (
    <>
    <RouterProvider router={router} />  
    </>
  )
}

export default App
