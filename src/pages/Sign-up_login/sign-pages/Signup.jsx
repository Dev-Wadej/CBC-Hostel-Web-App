import React from 'react';
import { useState, useContext } from 'react';
import Signup2 from './signup2';
import Signup3 from './signup3';
import firstSignupImg from '../../../Assets/sign-up-images/first_signup_img.svg';
import cbcLogo from '../../../Assets/cbc_logo.svg';
import googleImg from '../../../Assets/google.png';
import vectorImg from '../../../Assets/Vector 18.png';
import ReviewContainer from '../../../component/ReviewContainer/ReviewContainer';
import UserContext from '../../../context/UserContext';
import { AuthContext } from '../../../context/authContext';
import FormInput from '../../../component/FormInput/FormInput';

// because the sign up authentication is in steps it doesn't include a submit button at end
//however the form inputs are stored in the formData input below, which is also what will be submitted to the backend.
// if you fill out the sign up form and click on the 'create account' button
// the formData object populated with your inputs should appear in your console

//i also havent included the slide up animation for the other two sign up pages
const defaultFormFields = {
  fullName: '',
  email: '',
  phoneNumber: '',
  hostel: '',
  gender: '',
  maritalStatus: '',
  age: '',
  occupation: '',
  disabilities: '',
  nextOfKinName: '',
  nextOfKinEmail: '',
  nextOfKinPhoneNumber: '',
  nextOfKinAddress: '',
};

const Signup = ({ onLogin, onReset }) => {
  const title = ` “Hostel Life Is A Great Event That Teaches Us The Difficulties Of Life”`;
  const [formData, setFormData] = useState(defaultFormFields);

  // Using Context to manage the SignUp pages instead of having to drill props through @ Adeniyi Joshua Boluwade
  const { formFields, setFormFields } = useContext(AuthContext);

  const {
    setSignupPage1,
    signupPage2,
    setSignupPage2,
    signupPage3,
    setSignupPage3,
  } = useContext(UserContext);

  const nextPage = () => {
    setSignupPage2(true);
    setSignupPage1(false);
    setSignupPage3(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return signupPage2 ? (
    <Signup2 onLogin={onLogin} />
  ) : signupPage3 ? (
    <Signup3 onLogin={onLogin} />
  ) : (
    <div className="main container">
      <div className="form-container signup1-form-container">
        <div className="login-head signup1-head">
          <img
            className="cbcLogo"
            src={cbcLogo}
            alt="logo of CBC Africa"
          />
          <h2> Sign Up </h2> <h6> Sign up to get Started </h6>
          <h3 className="or"> OR </h3>
          <button className="google-signin-btn">
            <img src={googleImg} alt="google logo" /> Sign in with
            Google
          </button>
        </div>
        <form className="signup1">
          <h2> Create An Account </h2>

          <FormInput
            type="text"
            name="fullName"
            id="full-name"
            placeholder="Username"
            onChange={handleChange}
            value={formFields.fullName}
            label="Full Name:"
          />
          <FormInput
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            value={formFields.email}
            label="Email:"
          />
          <FormInput
            type="number"
            name="phoneNumber"
            id="phone-number"
            placeholder="+234"
            onChange={handleChange}
            value={formFields.phoneNumber}
            label="Phone Number:"
          />

          <div className="form-group">
            <label htmlFor="hostel-name"> Hostel </label>
            <select
              name="hostel"
              id="hostel"
             value={formFields.hostel}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                List Of Hostels
              </option>
              <option value="Catalyst Hostels">
                Catalyst Hostels
              </option>
              <option value="BAV Hostels">
                 BAV Hostels
              </option>
              <option value="Donum Hostels">
                 Donum Hostels
              </option>
            </select>
          </div>
        </form>
        <button className="next-btn" onClick={nextPage}>
          Next
        </button>
        <div className="login-footer signup-footer">
          <h5>
            I have an account with CBC! {' '}
            <a href="# " onClick={onLogin}>
              Login
            </a>
          </h5>
          <img
            className="vectorImg"
            src={vectorImg}
            alt="login design"
          />
        </div>
      </div>
      <div className="image-container sign-up">
        <img src={firstSignupImg} alt="img of a bunk" />
        <ReviewContainer title={title} />
      </div>
    </div>
  );
};

export default Signup;
