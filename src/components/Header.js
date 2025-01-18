import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Taskmate Logo"></img>
        <span>TASKMATE</span>
      </div>
      <div className="themeSelector">
        <span className="light activeTheme"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  );
};

export default Header;
