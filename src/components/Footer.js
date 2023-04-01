import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <img src={logo} width={33} height={33} />
      </div>
      <div className="footerText">
        <span>FAQs</span>
        <span>Contact Us</span>
      </div>
      <div className="footerText">
        <span>Privaci Policy</span>
        <span>Press Kit</span>
      </div>
      <div className="footerText">
        <span>Install Guide</span>
      </div>
      <div className="socialLogos">
        <img src={facebook} />
        <img src={twitter} />
        <img src={instagram} />
      </div>
    </div>
  );
};

export default Footer;
