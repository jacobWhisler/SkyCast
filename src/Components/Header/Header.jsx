import React from "react";
import "./Header.scss";
import Clock from "../Clock/Clock";

const Header = ({ userCity }) => {
  return (
    <div className="header-container">
      <div className="logo">
        <i className="fas fa-sun"></i>
        <span className="logo-text">SkyCast</span>
      </div>
      <h6 className="current-city-display">{userCity}</h6>
      <Clock />
    </div>
  );
};

export default Header;
