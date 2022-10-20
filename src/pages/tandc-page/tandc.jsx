import React from "react";
import { useState } from "react";
import "./tandc.css";
import checkbox from "../../Assets/checkbox.png";
import agree from "../../Assets/agree.png";

import Nav from "../../component/nav/nav";

const TandCPage = () => {
  return (
    <div className="tandcPage">
      <div id="tandc-header">
        <Nav />
        <div className="headText">
          <div>
            <span>AGREEMENT</span>
            <img className="agree" src={agree} alt="" />
          </div>
          <h1>Terms of Service</h1>
        </div>
      </div>
      <div className="termsContainer">
        <div className="terms">
          <div>
            <img src={checkbox} alt="" />
            All residents are required to carry their valid identity card.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Residents must ensure that the doors are locked and all electrical
            switches are switched off when not in use.
          </div>
          <div>
            <img src={checkbox} alt="" />
            The responsibility of the overall cleanliness of their unit lies
            with the residents of the respective unit.
          </div>
          <div>
            <img src={checkbox} alt="" />
            All residents are expected to be in the hostel before 10:00pm.
          </div>
          <div>
            <img src={checkbox} alt="" />
            All visitors must register at the security station upon arrival and
            departure of guest.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Residents are strictly prohibited from admitting strangers or
            persons of the opposite sex(except parents/guardiand) into the
            hostel room.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Only the immediate family members can visit the resident.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Residents are personally responsible for ensuring all visitors
            comply with the rules and regulations and the would not cause and
            inconvenience to other residents.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Visitors are strictly prohibited from staying overnight.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Residents must seek prior approval to leave the hostel at any time.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Residents are not permitted to give their hostel keys to any other
            person to use while they are away. Residents found committing such
            offense will be evicted immediately.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Smoking, consumption of alcohol and drugs are strictly prohibited.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Gambling/ gaming which involves betting is strictly not allowed
            within the hostel premises.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Vandalism or removing hostel property is a great offense. Residents
            found guilty can or will be evicted from the hostel.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Viewing, possession and dissemination of ponographic materials are
            strictly prohibited.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Residents found causing embarrassment, unsolicited compliments,
            sexually tainted jokes, spreading false rumours will be evicted from
            the residence.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Fighting or any physical violence is not allowed. Residents found
            committing such an offense will be evicted.
          </div>
          <div>
            <img src={checkbox} alt="" />
            Residents must obtain prior permission before organising any social
            event in the hostel.
          </div>
          <div>
            <img src={checkbox} alt="" />
            The hostel management reserves the right to alter, amend, add or
            delete any of the rules and regulation s at anytime with prior
            notice.
          </div>
          <div>
            <img src={checkbox} alt="" />
            The hostel management reserves the right for its designees to enter
            and inspect a residence in the interests of safety and proper
            conducts of the students. Entry can be made at any time, whether or
            the students are present and also without prior notice to the
            students.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TandCPage;
