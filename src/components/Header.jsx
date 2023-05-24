import React from "react";
import logo from "../assets/Troll Face.svg";

const Header = () => {
  return (
    <nav className="header">
      <div className="header_logo">
        <img src={logo} alt="troll" />
        <span>Meme Generator</span>
      </div>
    </nav>
  );
};

export default Header;
