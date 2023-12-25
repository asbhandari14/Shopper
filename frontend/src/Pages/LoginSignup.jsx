import React, { useState } from 'react'
import "./LoginSignup.css"
import MySpinner from '../Components/MySpinner'
import axios from 'axios'
const LoginSignup = () => {
  const [loading,setLoading]=useState(false);
  const [email,setEmail]=useState();
  const [name,setName]=useState();
  const [password,setPassword]=useState();
  
  function getinput(e){
    if(e.target.type=="email"){
      setEmail(e.target.value);
    }
    if(e.target.type=="password"){
      setPassword(e.target.value);
    }
    console.log(e.target.value)
  }
  function sendUserData(){
    const data = {
      email,
      password
    }
    console.log('data is',data)
    axios.post('http://localhost:5000/registration',data).then(()=>{
          setLoading(false);
          // navigate('/');
        }).catch((e)=>{
            setLoading(false);
            alert('An error has happened check console')
            console.log(e)
          });
      }
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>

          <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type='email' placeholder='Email Address' onChange={getinput} />
          <input type="password" placeholder='Password' onChange={getinput} />
          </div>

          <button onClick={sendUserData}>Continue</button>
          <p className='loginsignup-login'>Already have an account ? <span> Login Here </span> </p>

          <div className="loginsignup-agree">
          {/* <input type="checkbox" /> */}
          <p>By continuing I agree to the terms of use & privacy policy</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginSignup
