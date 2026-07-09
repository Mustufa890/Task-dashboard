import React, { useEffect, useState } from 'react'
import {supabase} from '../supabaseClient'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

const SignUp = () => {


     const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
  const getUser = async()=>{
  const {data:{user}} = await supabase.auth.getUser();
  setUser(user)
  if(user){
  navigate('/task')  
  }  
  }
  getUser();
  supabase.auth.onAuthStateChange((_event,session)=>{
  setUser(session?.user || null)
  if(session?.user){
  navigate('/task')  
  }  
  })  
  },[navigate])

  const signup = async()=>{
   const {error} = await supabase.auth.signUp({
  email,
  password,
  options:{
  emailRedirectTo:`${window.location.origin}/task`
  }
});
if(error){
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "SignUp Failed",
});
} 
  else {
Swal.fire({
  title: "Check your Email",
  icon: "success",
  draggable: true
});
  }
  }


  const google = async()=> {
  await supabase.auth.signInWithOAuth({
  provider: 'google',
  options:{
  redirectTo:`${window.location.origin}/task` 
  }
})
  }

  return (
  <>
  <div className='  grid justify-center p-2.5 ' >
  <h2 className='text-center text-purple-700 text-5xl font-bold ' >SignUp</h2>
  <p className='my-4 text-center  text-3xl ' >Create your account</p>  
  </div>
  <div className='bg-purple-100 mx-auto shadow-2xl w-90 h-120 rounded-2xl grid justify-center items-center' >
  <p className='text-center font-extrabold text-2xl ' >Welcome </p>
  <p className='text-center -mt-6 ' >signup email and google</p>   
  <input className=' -mt-6 p-3.5 rounded-3xl border-2 border-purple-900' type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
  <input  className=' -mt-6 p-3.5 rounded-3xl border-2 border-purple-900' type="password" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />
  <button className=' -mt-6 bg-purple-950 p-2.5 text-white rounded-3xl font-bold ' onClick={signup} >SignUp</button>
  <button className='  -mt-6 border-2 border-purple-600 p-2.5 text-black rounded-3xl font-bold ' onClick={google} >Signup with google</button>
  </div>
  </>  
  )
}

export default SignUp