import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import {supabase} from '../supabaseClient'

const Login = () => {
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
  
    const login = async()=>{
     const { error } = await supabase.auth.signInWithPassword({
  email,
  password,
});
if(error) {
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Login Failed",
});
}else{
Swal.fire({
  title: "Login Successfully",
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
   <div className='grid justify-center p-2.5 ' >
  <h2 className='text-center text-purple-700 text-5xl font-bold ' >Login</h2>  
  </div>
  <div className='bg-purple-100 mx-auto shadow-2xl w-90 my-5 h-100 rounded-2xl grid justify-center items-center' >
  <p className='text-center font-extrabold text-2xl ' >Welcome </p>
  <p className='text-center' >already create your account?</p>  
  <input className=' p-3.5 rounded-3xl border-2 border-purple-900' type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
  <input  className='p-3.5 rounded-3xl border-2 border-purple-900' type="password" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />
  <button className='bg-purple-950 p-2.5 text-white rounded-3xl font-bold ' onClick={login} >Login</button>
  <button className='border-2 border-purple-600 p-2.5 text-black rounded-3xl font-bold ' onClick={google} >Signup with google</button>
  </div>
  </>  
  )
}

export default Login