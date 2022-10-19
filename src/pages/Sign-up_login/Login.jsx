import React from 'react';
import { useState } from 'react';
import firstLoginImg from '../../Assets/sign-up-images/login_img.svg';
import cbcLogo from '../../Assets/cbc_logo.svg';
import googleImg from '../../Assets/google.png';
import vectorImg from '../../Assets/Vector 18.png';
import FormInput from '../../component/FormInput/FormInput';
import { Link } from 'react-router-dom';
import ReviewContainer from '../../component/ReviewContainer/ReviewContainer';

//the css used the style login,sign up and forgotten pages are all in the 'login-signup.css' in the css folder

//i tried making the class names as readable as i could

const Login = ({ onSignup, onReset }) => {
  const title = `“Hostel Life Contributes a lot in introspection.” “It
  forces you to get out of the baby treatment and face the
  Realities”`;

    const [SignInEmail, setsignInEmail] = useState('')
    const [SignInPassword, setsignInPassword] = useState('')

    const onEmailChange=(e)=> {
      setsignInEmail(e.target.value)
    }
    const onPasswordChange=(e)=> {
      setsignInPassword(e.target.value)
    }
    const onSubmitLogin =(e)=>{
      e.preventDefault()
      alert(`${SignInEmail} and ${SignInPassword}`)
    }

  return (
    <div className="main container">
      <div className="image-container">
        <img src={firstLoginImg} alt="flowing river" />
        <ReviewContainer title={title} />
      </div>
      <div className="form-container login-container">
        <div className="login-head">
          <Link to={'/'}>
            <img src={cbcLogo} alt="logo of CBC Africa" className='cbcLogo'/>
          </Link>
          <h1> Welcome Back </h1>
          <h6>
            Please enter your details to continue with your account.
          </h6>
        </div>
        <form>
          <FormInput
            required
            type="email"
            name="email"
            id="email"
            onChange={onEmailChange}
            placeholder="Enter Registered Email"
            label="Email:"
          />

          <FormInput
            required
            type="password"
            name="password"
            id="password"
            onChange={onPasswordChange}
            placeholder="Enter Registered Password"
            label="Password:"
          />
          <div className="checkbox-reset">
            <span>
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
              />
              <label htmlFor="checkbox"> Remember Me </label>
            </span>
            <a href="#" onClick={onReset}>
              Forget Password ?
            </a>
          </div>
          <input className="login-btn" type="submit" value="Login" onClick={onSubmitLogin} />
        </form>
        <button className="google-signin-btn">
          <img src={googleImg} alt="google logo" /> Sign in with
          Google
        </button>
        <div className="login-footer">
          <h5>
            I don 't have an account with CBC!{' '}
            <a href="#" onClick={onSignup}>
              Sign up
            </a>
          </h5>
          <img
            className="vectorImg"
            src={vectorImg}
            alt="signin design"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
