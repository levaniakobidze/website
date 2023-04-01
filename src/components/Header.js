import React from "react";
import headImg from "../images/logo.svg";
import "./Header.css";
import Main from "./Main";
const Header = () => {
  return (
    <div className="header">
      {" "}
      <img src={headImg} />
      <h1 className="appHeader">A history of everything you copy</h1>
      <p className="appParagraph">
        Clipboard allows you to track and organize everything you copy.
        Instantly
        <br /> access your clipboard on all your devices.
      </p>
      <div className="headerButtons">
        <button className="downloadButtonIos">Download for iOS</button>

        <button className="downloadButtonMac">Download for Mac</button>
      </div>
      <h1 className="appHeader">Keep track of your snippets</h1>
      <p className="appParagraph">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access
        <br /> your snippets immediately on all your devices. Our Mac and iOS
        apps will help you
        <br /> organize everything.
      </p>
    </div>
  );
};

export default Header;
