import React, { Component } from 'react'
import { useState } from "react";
import './Css/authcontainer.css'
import './Css/login-signup.css'
import Login from './Login'
import Signup from './sign-pages/Signup';
import Reset from './Reset'


// This Component in charge of switching between login, sign-up and forgotten-password pages


// the forgetten password which i named 'reset'  already displays on click however its empty
const AuthContainer = () => {
    const [onDisplay, setDisplay] = useState({
        login: true,
        signup: false,
        reset: false,
      });
   
      const displayLogin = () => {
        setDisplay({ reset: false, signup: false, login: true });
      };
    
      const displaySignup = () => {
        setDisplay({ reset: false, login: false, signup: true });
      };
    
      const displayReset = () => {
        setDisplay({signup: false, login: false, reset: true });
      };

  return (
    <div className='auth-container'>
        {
        (onDisplay.login) ? (<Login onReset={displayReset} onSignup={displaySignup}/>) 
        :(onDisplay.signup) ? (<Signup onLogin={displayLogin} onReset={displayReset}/>)
        : <Reset onSignup={displaySignup} onLogin={displayLogin} />
        }
        
        
    </div>
  )
}

export default AuthContainer