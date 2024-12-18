import React from 'react'
import Navbar from './Navbar'

const SignUp = () => {
    return (
    <div>
      <Navbar/>
          <div className='main-page'>
              <form onSubmit = {handleSubmit}>
                  <div className='heading'>
                      <p>Sign Up</p>
                  </div>
                  <div className='account'>
                   <input type='text' name='name' placeholder='Enter your Name' onChange={handleInput}/>
                   <input type='email' name='email' placeholder='Enter your Email' onChange={handleInput}/>
                   <input type='password' name='password' placeholder='Enter your Password' onChange={handleInput}/>
                   <p>Already have an account ? <a href='/login'>Login</a></p>
                  </div>
                  <button>SignUp</button>
              </form>
              <div>
              <img src={Img} alt='image'/>
              </div>
          </div>
      </div>
    )
}

export default SignUp
