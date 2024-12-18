import React from 'react'
import Navbar from './Navbar'


const LoginForm = () => {

  const handleSubmit = ()=>{

  }

  const handleInput = (event)=>{
    const name  = event.target.name;
 const value  = event.target.value;

   }

  return (
    <div >
    <Navbar/>
       <form className="login-form"  onSubmit = {handleSubmit}>

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
