import React from "react";
import room1 from "../../Assets/homepage/room.png";
import room2 from "../../Assets/homepage/room2.png";
import './css/home.css';

const Hostels = () => {
  return(
    <section className="hostels">
      <h1>Hostels</h1>
      <div id="hostels">
          {/* <!-- <img src="images/arrow down 8.svg" alt=""> --> */}
          <div id="hostel">
              <img src={room1} alt=""/>
              <div id="location">
                  <h3>Location</h3>
                  <p>
                      Catalyst Hostel 
                      <br/>
                      Balogun square, Abule Oja, Lagos 
                      <br/>
                      Fully Serviced 
                      <br/>
                      Beds, Fridge, Microwave and Air conditioner
                  </p>
                  <a href="">Book Now</a>
                  <p className="space">$193.03  <span>Per Space</span></p>
              </div>
          </div>
      
          <div id="hostel">
              <img src={room2} alt=""/>
              <div id="location">
                  <h3>Location</h3>
                  <p>
                      Pristine Hostel <br/>
                      Balogun square, Abule Oja, Lagos. <br/>
                      Fully Serviced <br/>
                      Beds, Fridge, Microwave and Air conditioner
                  </p>
                  <a href="#">Book Now</a>
                  <p className="space">$193.03  <span>Per Space</span></p>
              </div>
          </div>
          {/* <!-- <img src="images/arrow down 9.svg" alt=""> --> */}
      </div>
      
      <div>
        {/* <img src="images/Ellipse 584.svg" alt="">
        <img src="images/Ellipse 584.svg" alt="">
        <img src="images/Ellipse 584.svg" alt=""> */}
      </div>
    </section>
  )
};

export default Hostels;