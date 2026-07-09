import React from 'react'
import { NavLink } from 'react-router'
import img1 from '../assets/img1.png'

const Dashboard = () => {
  return (
  <>
  <div className='  container1 flex flex-col items-center justify-center  p-8' >
  <h1 className='text-center text-4xl lg:text-7xl md:text-4xl text-purple-800 leading-tight md:leading-normal lg:leading-relaxed font-bold ' >Find Your Workflow.</h1>
  <p className='text-center leading-relaxed text-balance' >FLOWTRACK brings all your tasks, timelines, team members, and project analytics</p>
  <div className='flex gap-3.5 items-center ' >
  <NavLink to='/signUp' className='bg-purple-900 text-center shadow-2xs rounded-2xl p-4.5  text-white font-bold my-5 ' >GetStarted</NavLink>
  <NavLink to='/login' className='border-2 border-purple-950  text-center shadow-2xs rounded-2xl p-3.5 w-30  text-black font-bold my-5 ' >Login</NavLink>
  </div>
  <img className=' w-200 rounded-2xl shadow-2xl ' src={img1} alt="" />
  </div>
  </>  
  )
}

export default Dashboard