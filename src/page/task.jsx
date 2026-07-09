import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import {supabase} from '../supabaseClient'

const Task = () => {
   const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [data, setData] = useState([])
  const navigate = useNavigate()
  
  
    const logout = async()=>{
  const { error } = await supabase.auth.signOut()
  if(error){
 Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Login Failed",
});
  }else{
  Swal.fire({
  title: "Logout Successfull",
  icon: "success",
  draggable: true
});  
 navigate('/')  
  }  
  };

  const addData = async()=>{
   const {error} = await supabase.from('emp_data').insert([{name, phone}])
   if(error){
   alert(error.message) 
   }else{
   Swal.fire({
  title: "Task add Successfull",
  icon: "success",
  draggable: true
});
  setName('')
  setTask('')  
   }
  }
  
  const fetchData = async()=> {
   const {data, error} = await supabase.from("emp_data").select('*')
   if(!error){
   setData(data) 
   } 
  }

  return (
  <>
  <div className='flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto my-5 px-4 ' > 
     <h1 className='text-center text-purple-900 text-3xl lg:text-5xl md:text-4xl my-5 font-bold' >Task Dashboard</h1>
         <button onClick={logout} className='bg-red-700 text-center item-center rounded-2xl p-2.5 w-30 text-white font-bold  ' >Logout</button>

  </div>
  <div className='max-w-2xl mx-auto p-4 space-y-4' >
   <input className='w-full rounded-xl border border-gray-400 p-3' type="text" placeholder='Enter your name' 
  value={name} onChange={(e)=> setName(e.target.value)}
  />
  <button className='flex-1 bg-purple-900 text-white font-bold p-3 rounded-xl hover:bg-purple-700' onClick={addData} >Add Task</button>     
   <input className='w-full rounded-xl border border-gray-400 p-3' type="text" placeholder='Enter your Task' 
  value={task} onChange={(e)=> setTask(e.target.value)}
  />
     
  <button className='flex-1 bg-purple-900 text-white font-bold p-3 rounded-xl hover:bg-purple-700' onClick={fetchData} >Fetch Task</button>
  <ul>
   <h3 className='font-bold text-3xl ' >Your Tasks</h3> 
  </ul>
  {data.map((item)=>(
  <li key={item.id} >
  {item.name} - {item.task}  
  </li>  
  ))}    
  </div>
  </>  
  )
}

export default Task