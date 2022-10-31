import React from 'react';
import secondSignupImg from '../../../Assets/sign-up-images/2nd signup page img.jpg';
import cbcLogo from '../../../Assets/cbc_logo.svg';
import vectorImg from '../../../Assets/Vector 18.png';
import ReviewContainer from '../../../component/ReviewContainer/ReviewContainer';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { AuthContext } from '../../../context/authContext';
import FormInput from '../../../component/FormInput/FormInput';

const Signup2 = ({ onLogin }) => {
  const title = ' “Unexpected Friendships Are the Best Ones”';

  const { setSignupPage1, setSignupPage2, setSignupPage3 } =
    useContext(UserContext);

  const nextPage = () => {
    setSignupPage2(false);
    setSignupPage1(false);
    setSignupPage3(true);
  };
  const prevPage = () => {
    setSignupPage1(true);
    setSignupPage3(false);
    setSignupPage2(false);
  };
  const { formFields, setFormFields } = useContext(AuthContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="main container">
      <div className="form-container signup2-form-container">
        <div className="login-head signup2-head">
          <img
            className="cbcLogo"
            src={cbcLogo}
            alt="logo of CBC Africa"
          />
        </div>

        <form className="signup2">
          <h2>Create An Account</h2>
          <h6>Continue from where you left off!</h6>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formFields.gender}
              onChange={handleChange}
            >
              <option value="" disabled selected></option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Not-listed">Not Listed</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="marital-status">Marital Status</label>
            <select
              name="maritalStatus"
              id="Marital-status"
              value={formFields.maritalStatus}
              onChange={handleChange}
            >
              <option value="" disabled selected></option>
              <option value="Married">Married</option>
              <option value="Not Married">Not Married</option>
            </select>
          </div>
          <FormInput
              label="Age"           
              type="number"
              name="age"
              id="age"
              value={formFields.age}
              onChange={handleChange}
          />
          <div className="form-group">
            <label htmlFor="occupation">Occupation</label>
            <select
              name="occupation"
              id="occupaton"
              onChange={handleChange}
            >
              <option value="" disabled selected></option>
              <option value="Working">Working</option>
              <option value="not Working">Not Working</option>
            </select>
          </div>

          <FormInput
            label="Disabilities (if any)"
            type="text"
            name="disabilities"
            id="disabilities"
            value={formFields.disabilities}
            onChange={handleChange}
           />
        
        </form>
        <div className="prev-next-btn">
          <button className="prev-btn" onClick={prevPage}>
            Prev
          </button>
          <button className="next-btn" onClick={nextPage}>
            Next
          </button>
        </div>

        <div className="login-footer signup-footer">
          <h5>
            I have an account with CBC!{' '}
            <a href="#" onClick={onLogin}>
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
      <div className="image-container sign-up no-slide">
        <img src={secondSignupImg} alt="img of a bunk" />
        <ReviewContainer title={title} />
      </div>
    </div>
  );
};

export default Signup2;
