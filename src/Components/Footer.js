import React from "react";
import { SiSwiggy } from "react-icons/si";
import { AiOutlineDown } from "react-icons/ai";

function Footer() {
  return (
    <div className="FooterMain">
      <div className="footerInner">
        <div className="First-col">
          <div className="FooterLogoDiv">
            {" "}
            <SiSwiggy className="logo-Footer" /> <span> Swiggy</span>
          </div>

          <p> © 2023 Bundl Technologies Pvt. Ltd </p>
        </div>
        <div className="Second-col">
          <h2>Company</h2>
          <p>About</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Swiggy One</p>
          <p>Swiggy InstaMart</p>
          <p>Swiggy Genie</p>
        </div>
        <div className="Third-col">
          <div className="sub-col-one">
            <h2>Contact Us</h2>
            <p>Help & Support</p>
            <p>Partner With Us</p>
            <p>Ride With Us</p>
          </div>{" "}
          <div className="sub-col-two">
            <h2>Legal</h2>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
          </div>{" "}
        </div>
        <div className="Forth-col">
          <h2>We Deliver To:</h2>
          <p>Banglore</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Pune</p>
          <button>
            {" "}
            588 Cities <AiOutlineDown className="ForthColArrow" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
