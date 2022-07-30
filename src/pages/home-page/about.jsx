import React from "react";
import abouter from "../../Assets/homepage/about.png"
import './css/home.css';


const About = () => {
  return (
    <section className="about">
      <h1>About Us</h1>
      <div id="about">
          <img src={abouter} alt=""/>
          <div>
              <p>
                  <strong>Catalyst Business Consult</strong> popularly known as “CBC” is owned by Mr Hammed Olawale.
                  The company is focused on adding value and bringing imaginations to live ,
                  thats why we have diffrent aspect  of concentration, asides from having condisive 
                  female hostels in diffrent locations in lagos, we are taking tech into secondary schols,
                  providing oppoutuities for anyone to break into tech, airing the best enginieers and programmers
                  and even ui/ux product designers at any of our businness centers .Our centers are located in a secured environment and condusive
                  in terms of providing free wifi and computers for easy learning. 
              </p>
              <a href="">Read more</a>
          </div>
      </div>
    </section>
  )
}

export default About;