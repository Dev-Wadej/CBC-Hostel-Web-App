import Nav from '../../component/nav/nav';
import './css/home.css';

const Header = () => {
  return (
    <header>
      <Nav />
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
