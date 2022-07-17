import React from 'react'
import { useState } from "react";
import Signup2 from './signup2';
import Signup3 from './signup3';
import firstSignupImg from '../../../Assets/sign-up-images/1st signup page img.jpg'
import cbcLogo from '../../../Assets/cbc logo png 1.png'
import googleImg from '../../../Assets/google.png'
import vectorImg from '../../../Assets/Vector 18.png'
import starImg from '../../../Assets/Star 5.svg'
import prevOff from '../../../Assets/prev-off.png'
import nextOn from '../../../Assets/next-on.png'



// because the sign up authentication is in steps it doesn't include a submit button at end
//however the form inputs are stored in the formData input below, which is also what will be submitted to the backend.
// if you fill out the sign up form and click on the 'create account' button 
// the formData object populated with your inputs should appear in your console


//i also havent included the slide up animation for the other two sign up pages

const Signup = ({onLogin, onReset,}) => {
        const [signupPage, setSignupPage] = useState({
            signupPage1: true,
            signupPage2: false,
            signupPage3: false,
          });

          const [formData, setFormData] = useState({
            fullName: '',
            email:'',
            phoneNumber:'',
            hostel:'',
            gender:'',
            maritalStatus:'',
            age:'',
            occupation:'',
            disabilities:'',
            nextOfKinName:'',
            nextOfKinEmail:'',
            nextOfKinPhoneNumber:'',
            userAddress:'',

          });
    
    
        
          const displaysignupPage1 = () => {
            setSignupPage({ signupPage2: false, signupPage3: false, signupPage1: true });
          };
        
          const displaySignupPage2 = () => {
            setSignupPage({ signupPage1: false, signupPage3: false, signupPage2: true });
          };
        
          const displaySignupPage3 = () => {
            setSignupPage({signupPage1: false, signupPage2: false, signupPage3: true });
          };

     

  return (

            
        (signupPage.signupPage2) ? (<Signup2 onsignup={displaysignupPage1} onsignup3={displaySignupPage3} onLogin={onLogin} formData={formData} setFormData={setFormData}/>) 
        :(signupPage.signupPage3) ? (<Signup3 onsignup2={displaySignupPage2} onsignup={displaysignupPage1} onsignup3={displaySignupPage3} onLogin={onLogin} formData={formData} setFormData={setFormData}/>)
        : <div className='main container'>

            <div className='form-container signup1-form-container'>

                    <div className='login-head signup1-head'>
                        <img className='cbcLogo' src={cbcLogo} alt='logo of CBC Africa'/>
                        <h2>Sign Up</h2>
                        <h6>Sign up to get Started</h6>
                        <h3 className='or'>OR</h3>
                        <button className='google-signin-btn'><img src={googleImg} alt='google logo'/> Sign in with Google</button>
                    </div>

                    <form className='signup1'>
                        <h2>Create An Account</h2>
                        <div className="form-group">
                            <label htmlFor="full-name">Full Name:</label>
                            <input type="text" name="full-name" id="full-name" placeholder='Username' value={formData.fullName} onChange={(e)=> setFormData({...formData,fullName:e.target.value})}/>
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder='Enter Your Email' value={formData.email} onChange={(e)=> setFormData({...formData,email:e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Phone Number:</label>
                            <input type="number" name="phone-number" id="phone-number" placeholder='+234' value={formData.phoneNumber} onChange={(e)=> setFormData({...formData,phoneNumber:+e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hostel-name">Hostel</label>
                            <select name='hostel' id='hostel' value={formData.hostel} onChange={(e)=> setFormData({...formData,hostel:e.target.value})}>
                                <option value='' disabled selected >List Of Hostels</option>
                                <option value='Catalyst Hostels' > Catalyst Hostels</option>
                                <option value='Bav Hostels' > BAV Hostels</option>
                            </select>
                        </div>
                    </form>    
                    
                        <button className='next-btn' onClick={displaySignupPage2}  >Next</button>
                    
                    <div className='login-footer signup-footer'>
                        <h5>I have an account with CBC! <a href='# 'onClick={onLogin}>Login</a></h5>
                        <img className='vectorImg' src={vectorImg} alt='login design'/>
                    </div>
            </div>
            <div className='image-container sign-up'>
                <img src={firstSignupImg} alt='img of a bunk'/>
                <div className='review-container'>
                        <h2>
                        “Hostel Life Is A Great Event That Teaches Us The Difficulties Of Life”
                        </h2> 
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
                        <section id='ceo-button'>
                            <div id='ceo'>
                                <h3>CEO, FOUNDER</h3>
                                <h4>CBC Hostels</h4>
                            </div>
                            <div id='next-prev-button'>
                                <img src={prevOff} alt='disabled previous button'/>
                                <img src={nextOn} onClick={displaySignupPage2} alt='active next button'/>
                            </div>     
                        </section>

                </div>  
            </div>
        
                
        </div>
        

  )    
}

export default Signup