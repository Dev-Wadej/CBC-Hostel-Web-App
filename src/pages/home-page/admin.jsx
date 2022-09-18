import React from "react";
import arrow1 from "../../Assets/homepage/arrow down 8.svg";
import arrow2 from "../../Assets/homepage/arrow down 9.svg";
import mailer from "../../Assets/homepage/email (1) 1.svg";
import phoner from "../../Assets/homepage/phone 1.svg";
import adminer from "../../Assets/homepage/admin img.png"
import ellipse from "../../Assets/homepage/Ellipse 584.svg"
import "./css/home.css"

const Admins = () => {
  return(
    <section className="admins">
        <h1>Admins</h1>
        
        <div className="images">
            <img src={arrow1} alt="" className="arrow"/>
            <div className="image-list">
                <div className="admin">
                    <img src={adminer} alt=""/>
                    <div>
                        <h3>CATALYST</h3>
                    <span>
                      <a> <img src={mailer} alt=""/></a>
                      <a> <img src={phoner} alt=""/></a>
                    </span>
                    </div>
                </div>
            
                <div className="admin">
                    <img src={adminer} alt=""/>
                    <div>
                        <h3>PRESTINE</h3>
                    <span>
                        <a> <img src={mailer} alt=""/></a>
                        <a> <img src={phoner} alt=""/></a>
                    </span>
                    </div>
                </div>
            
                <div className="admin">
                    <img src={adminer} alt=""/>
                    <div>
                        <h3>HOLLAS</h3>
                    <span>
                      <a> <img src={mailer} alt=""/></a>
                      <a> <img src={phoner} alt=""/></a>
                    </span>
                    </div>
                </div>
            </div>
            <img src={arrow2} alt="" className="arrow"/>
        </div>
    
        <div>
          <img src={ellipse} alt=""/>
          <img src={ellipse} alt=""/>
          <img src={ellipse} alt=""/>
        </div>
    </section>
  )
}


export default Admins;