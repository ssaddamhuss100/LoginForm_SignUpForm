import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const handleInput = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        if("email" == name){
            setEmail(value)
        }
        if("password" == name){
            setPassword(value)
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(email == "" || password == ""){
            alert("Please Enter Details!")
        }else{
            let getDetails = JSON.parse(localStorage.getItem("user"))
          console.log(getDetails);
          getDetails.map((curValue)=>{
            console.log(curValue.password);
            let storeEmail = curValue.email;
            let storePassword = curValue.password;

            if(storeEmail == email && storePassword == password){
                alert("Login Successfully !")
                navigate("/home")

            }else{
                return setMsg("Invalid Email or Password!")
            }
        })
        }
    }
  return (
    <div>
    <Navbar/>
        <div >
        <p className='errMsg'>{msg}</p>
        <p className='errMsg'>{msg}</p>
        <p className='errMsg'>{msg}</p>
        <p className='errMsg'>{msg}</p>
        <p className='errMsg'>{msg}</p>
                </div>
                <button>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default LoginForm;