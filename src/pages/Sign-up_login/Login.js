import React from 'react'
import firstLoginImg from '../../Assets/sign-up-images/user login img.jpg'
import cbcLogo from '../../Assets/cbc logo png 1.png'
import googleImg from '../../Assets/google.png'
import vectorImg from '../../Assets/Vector 18.png'
import starImg from '../../Assets/Star 5.svg'

//the css used the style login,sign up and forgotten pages are all in the 'login-signup.css' in the css folder

//i tried making the class names as readable as i could


const Login = ({onSignup, onReset}) => {

  return (
    <div className='main container'>
         <div className='image-container'>
            <img src={firstLoginImg} alt='flowing river'/>
            <div className='review-container'>
                <h3>
                    “Hostel Life Contributes a lot in introspection.”
                    <br/>
                    “It forces you to get out of the baby treatment and face the Realities”
                </h3> 
                <div className='stars-container'>
                    <h2>CBC</h2>
                    <span> 
                        <img src={starImg} alt='A star'/> 
                        <img src={starImg} alt='A star'/> 
                        <img src={starImg} alt='A star'/> 
                        <img src={starImg} alt='A star'/> 
                        <img src={starImg} alt='A star'/>
                        <img src={starImg} alt='A star'/>  
                    </span>
                </div>
                <h3>CEO, FOUNDER</h3>
                <h4>CBC Hostels</h4>
            </div>

        </div>
        <div className='form-container login-container'>
            <div className='login-head'>
                <img className='cbcLogo' src={cbcLogo}  alt='logo of CBC Africa'/>
                <h1>Welcome Back</h1>
                <h6>Please enter your details to continue with your account.</h6>
            </div>

            <form>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder='Enter Registered Email'/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder='Enter Password'/>
                </div>
                <div className="checkbox-reset">
                    <span>
                    <input type="checkbox" name="remember-me" id="remember-me"/>
                    <label htmlFor="checkbox">Remember Me</label>
                    </span>
                    <a href='#' onClick={onReset}> Forget Password?</a>
                </div>
                <input className='login-btn' type="submit" value="Login"/>
            </form>    
            <button className='google-signin-btn'><img src={googleImg} alt='google logo'/> Sign in with Google</button>
            <div className='login-footer'>
                <h5>I don't have an account with CBC! <a href='# 'onClick={onSignup}>Sign up</a></h5>
                <img className='vectorImg' src={vectorImg} alt='signin design'/>
            </div>
        </div>
    </div>
  )
}

export default Login