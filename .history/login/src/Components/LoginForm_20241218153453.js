import React from 'react'
import Navbar from './Navbar'


const LoginForm = () => {
  const handleSubmit = ()=>{

  }

  const handleInput = ()=>{

   }

  return (
    <div className="login-form">
    <Navbar/>
       <form onSubmit = {handleSubmit}>
                  <div className='heading'>
                      <p>Login Form</p>
                  </div>
                  <div className='account'>
                   placeholder='Enter your Email' onChange={handleInput}/>
                   <input type='password' name='password' placeholder='Enter your Password' onChange={handleInput}/>
                   <p>if you have to create account ? <a href='/'>Sing Up Form</a></p>
                  </div>
                  <button>LogIn</button>
              </form>
         </div>
  )
}

export default LoginForm
