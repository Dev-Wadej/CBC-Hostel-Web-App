import React from "react";
import ellipse from "../../Assets/homepage/Ellipse 584.svg";
import room2 from "../../Assets/homepage/room2.png";
import arrow from "../../Assets/homepage/Arrow 3.svg";
import "./css/home.css"


const Activity = () => {
  return(
    <section className="activity">
        <h1>CBC Activities</h1>
        <div className="content">
            <div className="content-img">
                <div className="img1">
                    <img src={room2} alt=""/>
                    <span>
                        <h3>Modern Real-Estate</h3>
                    <p>
                        Architecture, Design & Constructon
                        Partnership with top real estate companies.
                        We make building plans, construct and build. 
                    </p>
                    <a href="">Read more <img  src={arrow}/></a>
                    </span>
                </div>
            
                <div className="img2">
                    <img src={room2} alt=""/>
                    <span>
                        <h3>UI/UX Design Training </h3>
                    <p>
                        Product designing skill is one of the highest
                         paying jobs both home and abroad, 
                        lets help you beak into tech.
                    </p>
                    <a href="">Read more <img  src={arrow}/></a>
                    </span>
                </div>
            </div>
        
            <div>
                <img src={ellipse} alt=""/>
                <img src={ellipse} alt=""/>
                <img src={ellipse} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Activity;