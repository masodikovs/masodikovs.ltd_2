import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
const Firewall = () => {
  const noneStyle = {
    textDecoration: "none",
  };
  return (
    <div className="firewall">
      <Link to="/" style={noneStyle}>
        <div className="header_firewall"> masodikov.ltd</div>
      </Link>
      <div className="registration">
        <img src="./lock.svg" alt="" className="lock" />
        <div className="reg_head">Welcome to secret data base</div>
        <div className="reg_title">
          To access our private legal case database, please enter the password
          that should have been provided to you by the administrator.
        </div>
        <input className="password" />
        <div className="pass_button">Log In</div>
      </div>
      <Link to="/" style={noneStyle}>
        <div className="reg_undertitle"> Back to the main page</div>
      </Link>
    </div>
  );
};
export default Firewall;
