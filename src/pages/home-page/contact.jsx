import React from "react";
import vector from "../../Assets/homepage/Vector.svg";
import vector1 from "../../Assets/homepage/Vector (1).svg";
import phoner from "../../Assets/homepage/Phone.svg";
import mailer from "../../Assets/homepage/Mail.svg";
import "./css/home.css";





const Contact = () => {
  return(
    <section className="contact">
        <h1>Contact Us</h1>
        <div className="contact-container">
            <div>
                <h3>offices</h3>
                <p><img src={vector}/>Balogun Square, Abuleoja, Yaba, Lagos State.</p>
                <p><img src={phoner}/>+234 816 272 6997</p>
                <p><img src={mailer}/>info@catalystbusinessconsult.com</p>
                <p><img src={vector1}/>Mon - Sat 8.00 - 18.00. Sunday CLOSED </p>
            </div>
            <form>
                <h2> Leave a Message</h2> 
                <input type="text" id="name-form" placeholder="name"/>
                <input type="text" id="number-form" placeholder="phone number"/>
                <input type="text" id="message-form" placeholder="Leave a Message"/>
               <a href="">Book An Appointment</a>
            </form>
        </div>
    </section>
  )
}

export default Contact;