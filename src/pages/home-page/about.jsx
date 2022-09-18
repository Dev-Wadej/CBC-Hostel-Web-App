import React from "react";
import abouter from "../../Assets/homepage/about.png"
import './css/home.css';


const About = () => {
  return (
    <section className="about">
      <h1>About Us</h1>
      <div id="about">
          <div>
            <img src={abouter} alt=""/>
          </div>
          <div>
              <p>
                  <strong>Catalyst Business Consult</strong> popularly known as “CBC” is owned by Mr Hammed Olawale.
                  The company is focused on adding value and bringing imaginations to life,
                  thats why we have different aspect of concentration, asides from having conducive 
                  female hostels in different locations in lagos, we are taking tech into secondary schools,
                  providing opportunities for anyone to break into tech, airing the best engineers and programmers
                  and even ui/ux product designers at any of our business centers. Our centers are located in a secured environment and conducive
                  in terms of providing free wifi and computers for easy learning. 
              </p>
              <a href="">Read more</a>
          </div>
      </div>
    </section>
  )
}

export default About;