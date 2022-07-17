import React from 'react'
import secondSignupImg from '../../../Assets/sign-up-images/2nd signup page img.jpg'
import cbcLogo from '../../../Assets/cbc logo png 1.png'
import vectorImg from '../../../Assets/Vector 18.png'
import starImg from '../../../Assets/Star 5.svg'
import prevOn from '../../../Assets/prev-on.png'
import nextOn from '../../../Assets/next-on.png'

const signup2 = ({onsignup, onsignup3,onLogin,formData, setFormData}) => {

  return (
    <div className='main container'>

        <div className='form-container signup2-form-container'>

                <div className='login-head signup2-head'>
                    <img className='cbcLogo' src={cbcLogo} alt='logo of CBC Africa'/>
                   </div>

                <form className='signup2'>
                    <h2>Create An Account</h2>
                    <h6>Continue from where you left off!</h6>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select name='gender' id='gender' value={formData.gender}  onChange={(e)=> setFormData({...formData,gender:e.target.value})} >
                        <option value="" disabled selected ></option>
                            <option value="Female" >Female</option>
                            <option value="Male" >Male</option>
                            <option value="Not-listed" >Not Listed</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="marital-status">Marital Status</label>
                        <select name='marital-status' id='Marital-status' onChange={(e)=> setFormData({...formData,maritalStatus:e.target.value})} >
                        <option value="" disabled selected ></option>
                            <option value="Married" >Married</option>
                            <option value="Not Married" >Not Married</option>
                        </select>
                    </div>                      
                    <div className="form-group">
                        <label htmlFor="Age">Age</label>
                        <input type="number" name="Age" id="age" value={formData.age} onChange={(e)=> setFormData({...formData,age:+e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="occupation">Occupation</label>
                        <select name='occupation' id='occupaton'  onChange={(e)=> setFormData({...formData,occupation:e.target.value})} >
                        <option value="" disabled selected ></option>
                            <option value="Working">Working</option>
                            <option value="not Working">Not Working</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="disabilities">Disabilities (if any)</label>
                        <input type="text" name="disabilities" id="disabilities"  onChange={(e)=> setFormData({...formData,disabilities:e.target.value})}/>
                    </div>    
                </form>   
                    <div className='prev-next-btn'>
                        <button className='prev-btn' onClick={onsignup} >Prev</button>
                        <button className='next-btn' onClick={onsignup3}  >Next</button>
                    </div> 
                
                <div className='login-footer signup-footer'>
                    <h5>I have an account with CBC! <a href='#' onClick={onLogin}>Login</a></h5>
                    <img className='vectorImg' src={vectorImg} alt='login design'/>
                </div>
        </div>
        <div className='image-container sign-up'>
            <img src={secondSignupImg} alt='img of a bunk'/>
            <div className='review-container'>
                    <h2>
                    “Unexpected Friendships Are the Best Ones”
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
                            <img src={prevOn} onClick={onsignup} alt='disabled previous button'/>
                            <img src={nextOn} onClick={onsignup3} alt='active next button'/>
                        </div>     
                    </section>

            </div>  
        </div>
    
            
    </div>

  )
}

export default signup2