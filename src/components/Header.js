import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [theme, setTheme] = useState("gOne");

  useEffect(() => {
    document.getElementById("root").removeAttribute("class");
    document.getElementById("root").classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Taskmate Logo"></img>
        <span>TASKMATE</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme == "light" ? "light activeTheme" : "light"}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme == "medium" ? "medium activeTheme" : "medium"}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme == "dark" ? "dark activeTheme" : "dark"}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={theme == "gOne" ? "gOne activeTheme" : "gOne"}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={theme == "gTwo" ? "gTwo activeTheme" : "gTwo"}
        ></span>
        <span
          onClick={() => setTheme("gThree")}
          className={theme == "gThree" ? "gThree activeTheme" : "gThree"}
        ></span>
      </div>
    </header>
  );
};

export default Header;
