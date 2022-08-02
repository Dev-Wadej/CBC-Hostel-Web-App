import React from 'react';
import cbcLogo from '../../Assets/cbc logo png 1.png';
import { Link } from 'react-router-dom';
import './css/home.css';

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#">COMPANY</a>
          </li>
          <li>
            <a href="#">hostels</a>
          </li>
          <li>
            <a href="#">admins</a>
          </li>
          <li>
            <img src={cbcLogo} alt="" />
          </li>
          <li>
            <Link to={'/auth'} href="#">
              login
            </Link>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">t & c</a>
          </li>
        </ul>
      </nav>
      <div id="facility">
        <h1>
          {' '}
          <span>#1</span>
          <span className="second-span">Best</span> <br /> Hostel
          Facilities
        </h1>
        <p>
          We help you save money on hostels! The only hostel website
          you will ever need!
        </p>
        <a href="#">Book An Appointment</a>
      </div>

      <div className="save-time">
        <div id="time-text">
          <h3>
            Save Your <span>Time</span> and <span>Money</span>
          </h3>
          <p>You can Book an Appointment with us!</p>
        </div>
        <a href="#">contact us</a>
      </div>
    </header>
  );
};

export default Header;
