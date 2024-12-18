import React, { useState } from 'react'
import Navbar from './Navbar'
import { useState } from 'react-router-dom'


const LoginForm = () => {
const [email,setEmail] = useState('');
  
  const handleInput = (event)=>{
    const name  = event.target.name;
    const value  = event.target.value;
    if("email" == name)
      setEmail(value);
   }
   if("password" == name)
    setEmail(value);
 }
 const handleSubmit = ()=>{

 }

  return (
    <div >
    <Navbar/>
       <form className="login-form" 
                 onSubmit = {handleSubmit}>

                  <div className='heading'>
                      <p>Login Form</p>
                  </div>
       
                  <div className='account'>
                  <input type='email' name='email' placeholder='Enter your Email' onChange={handleInput}/>
                   <input type='password' name='password' placeholder='Enter your Password' onChange={handleInput}/>
                   <p>if you have to create account ? <a href='/'>Sing Up Form</a></p>
                  </div>
                  <button>LogIn</button>
              </form>
         </div>
  )
}

export default LoginForm
