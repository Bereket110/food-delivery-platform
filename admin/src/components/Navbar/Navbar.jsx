import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import maaheLogo from "/favicon.svg";
const Navbar = () => {
  return (
    <div>
      <div className="navbar-content">
        {/* <img src={assets.logo} alt="logo" className="logo" /> */}
        <img src={maaheLogo} alt="logo" className="logo" />
        <img src={assets.profile_image} alt="" className="profile" />
      </div>
    </div>
  );
};

export default Navbar;
