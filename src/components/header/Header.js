import "./style.css";
import React, { useState } from "react";

import { Link } from "react-scroll";
import Logo from "./Logo";
const Header = () => {
  const [isOpen, setIsClosed] = useState(false);
  const closingMenu = () => {
    setIsClosed(false);
  };
  const openingMenu = () => {
    setIsClosed(true);
  };
  return (
    <div className="header">
      <Logo />
      <div className="menu">
        <div className="itemmenu" href="#about">
          <Link to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </div>
        <div className="itemmenu">
          <Link to="rates" smooth={true} duration={500}>
            EXCHANGE RATES
          </Link>
        </div>
        <div className="itemmenu">
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className="menu_mobile">
        <img
          className="burger"
          src="./burger.svg"
          alt=""
          onClick={openingMenu}
        />
      </div>
      <div className={`menu_container ${isOpen ? "open" : ""}`}>
        <Link to="about" onClick={closingMenu} smooth={true} duration={500}>
          <div className="itemmenu">
            <span>ABOUT</span>
          </div>
        </Link>
        <Link to="rates" onClick={closingMenu} smooth={true} duration={500}>
          <div className="itemmenu">
            <span>EXCHANGE RATES</span>
          </div>
        </Link>
        <Link to="contact" onClick={closingMenu} smooth={true} duration={500}>
          <div className="itemmenu">
            <span>CONTACT</span>
          </div>
        </Link>
      </div>
      <div
        className={`menu_hover ${isOpen ? "open" : ""}`}
        onClick={closingMenu}
      />
    </div>
  );
};
export default Header;
