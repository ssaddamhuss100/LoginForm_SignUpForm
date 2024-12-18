import React from 'react'

const LoginForm = () => {
  return (
    <div>
       <form onSubmit = {handleSubmit}>
                  <div className='heading'>
                      <p>Login Form</p>
                  </div>
                  <div className='account'>
                   placeholder='Enter your Email' onChange={handleInput}/>
                   <input type='password' name='password' placeholder='Enter your Password' onChange={handleInput}/>
                   <p>Already have an account ? <a href='/login'>Login</a></p>
                  </div>
                  <button>SignUp</button>
              </form>
    </div>
  )
}

export default LoginForm
