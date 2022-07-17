import React from 'react'
import thirdSignupImg from '../../../Assets/sign-up-images/3rd signup page img.jpg'
import cbcLogo from '../../../Assets/cbc logo png 1.png'
import vectorImg from '../../../Assets/Vector 18.png'
import starImg from '../../../Assets/Star 5.svg'
import prevOn from '../../../Assets/prev-on.png'
import nextOff from '../../../Assets/next-off.png'


const signup3 = ({onsignup2,onLogin,onsignup3,formData, setFormData}) => {
  return (
    <div className='main container'>

        <div className='form-container signup3-form-container'>

                <div className='login-head signup3-head'>
                    <img className='cbcLogo' src={cbcLogo} alt='logo of CBC Africa'/>
                   </div>

                
                   <form className='signup3'>
                        <h2>Create An Account</h2>
                        <h6>Continue from where you left off!</h6>
                        <div className="form-group">
                            <label htmlFor="next-of-kin">Next Of Kin</label>
                            <input type="text" name="next of kin" id="next of kin" placeholder='Enter Full Name' value={formData.nextOfKinName} onChange={(e)=> setFormData({...formData,nextOfKinName:e.target.value})}/>
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="next-of-kin-email">Email:</label>
                            <input type="email" name="next of kin email" id="next-of-kin-email" placeholder="Enter next of kin's Email" value={formData.nextOfKinEmail} onChange={(e)=> setFormData({...formData,nextOfKinEmail:e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="next-of-kin-number">Phone Number:</label>
                            <input type="number" name="next-of-kin-phone-number" id="next-of-kin-phone-number" placeholder='+234' value={formData.nextOfKinPhoneNumber} onChange={(e)=> setFormData({...formData,nextOfKinPhoneNumber:+e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" id="address" value={formData.userAddress} onChange={(e)=> setFormData({...formData,userAddress:e.target.value})} />
                        </div>
                    </form>    
                    <div className='terms-and-conds-container'>
                        <h6> By creating an account, you have agreed to the  <a href='#' >Terms and Conditions</a> </h6>
                        <button className='create-account-btn' onClick={() => console.log(formData)}>Create Account</button>
                    </div>  
                
                <div className='login-footer signup-footer'>
                    <h5>I have an account with CBC! <a href='# 'onClick={onLogin}>Login</a></h5>
                    <img className='vectorImg' src={vectorImg} alt='login design'/>
                </div>
        </div>
        <div className='image-container sign-up'>
            <img src={thirdSignupImg} alt='img of a bunk'/>
            <div className='review-container'>
                    <h2>
                    “Spend Your time and do your Thing in a very conducive and friendly Environment”
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
                            <img src={prevOn} onClick={onsignup2} alt='disabled previous button'/>
                            <img src={nextOff}alt='active next button'/>
                        </div>     
                    </section>

            </div>  
        </div>
    
    </div>
  )
}

export default signup3