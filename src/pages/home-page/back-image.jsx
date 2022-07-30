import React from "react";
import backImg from "../../Assets/homepage/Rectangle 2881.png";
import "./css/home.css";

const BackImg = () => {
  return(
    <div className="back-image">
        {/* <!-- <div class="image-back"></div> --> */}
        <img src={backImg} alt=""/>
    </div>
  )
}

export default BackImg;