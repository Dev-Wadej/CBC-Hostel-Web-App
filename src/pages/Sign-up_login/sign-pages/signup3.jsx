import React from 'react';
import thirdSignupImg from '../../../Assets/sign-up-images/3rd signup page img.jpg';
import cbcLogo from '../../../Assets/cbc logo png 1.png';
import vectorImg from '../../../Assets/Vector 18.png';
import starImg from '../../../Assets/Star 5.svg';
import prevOn from '../../../Assets/prev-on.png';
import nextOff from '../../../Assets/next-off.png';
import { useContext } from 'react';
import { AuthContext } from '../../../context/authContext';

const Signup3 = ({ onsignup2, onLogin }) => {
  const { setFormFields, formFields } = useContext(AuthContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    return setFormFields({ ...formFields, [name]: value });
  };
  const title =
    '“Spend Your time and do your Thing in a very conducive and friendly Environment”';
  return (
    <div className="main container">
      <div className="form-container signup3-form-container">
        <div className="login-head signup3-head">
          <img
            className="cbcLogo"
            src={cbcLogo}
            alt="logo of CBC Africa"
          />
        </div>

        <form className="signup3">
          <h2>Create An Account</h2>
          <h6>Continue from where you left off!</h6>
          <div className="form-group">
            <label htmlFor="next-of-kin">Next Of Kin</label>
            <input
              type="text"
              name="next of kin"
              id="next of kin"
              placeholder="Enter Full Name"
              value={formFields.nextOfKinName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="next-of-kin-email">Email:</label>
            <input
              type="email"
              name="next of kin email"
              id="next-of-kin-email"
              placeholder="Enter next of kin's Email"
              value={formFields.nextOfKinEmail}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="next-of-kin-number">Phone Number:</label>
            <input
              type="number"
              name="next-of-kin-phone-number"
              id="next-of-kin-phone-number"
              placeholder="+234"
              value={formFields.nextOfKinPhoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formFields.userAddress}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="terms-and-conds-container">
          <h6>
            {' '}
            By creating an account, you have agreed to the{' '}
            <a href="#">Terms and Conditions</a>{' '}
          </h6>
          <button
            className="create-account-btn"
            onClick={() => console.log(formFields)}
          >
            Create Account
          </button>
        </div>

        <div className="login-footer signup-footer">
          <h5>
            I have an account with CBC!{' '}
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
        <img src={thirdSignupImg} alt="img of a bunk" />
        <div className="review-container">
          <h2></h2>
          <div className="stars-container">
            <h2>CBC</h2>
            <span>
              <img src={starImg} alt="A star" />
              <img src={starImg} alt="A star" />
              <img src={starImg} alt="A star" />
              <img src={starImg} alt="A star" />
              <img src={starImg} alt="A star" />
              <img src={starImg} alt="A star" />
            </span>
          </div>
          <section id="ceo-button">
            <div id="ceo">
              <h3>CEO, FOUNDER</h3>
              <h4>CBC Hostels</h4>
            </div>
            <div id="next-prev-button">
              <img
                src={prevOn}
                onClick={onsignup2}
                alt="disabled previous button"
              />
              <img src={nextOff} alt="active next button" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Signup3;
