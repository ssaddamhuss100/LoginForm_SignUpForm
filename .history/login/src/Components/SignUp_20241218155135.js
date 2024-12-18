import React, { useState } from 'react';
import Navbar from './Navbar';
import picture from "../main.jpg";



const SignUp = () => {
    const newUser = {name :"",email:"",password:""};
    const [data, setData] = useState(newUser);
    console.log(data);
    const handleInput = ()=>{
       setData({ [...newUser],})
      }
      const handleSubmit = ()=>{

      }

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
                  <img src={picture} alt='ImageSignUpHere'/>
              </div>
          </div>
      </div>
    )
}

export default SignUp
