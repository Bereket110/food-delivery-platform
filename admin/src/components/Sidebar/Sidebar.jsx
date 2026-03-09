import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="side-bar">
        <div className="side-bar-options">
          <NavLink to="/" className="side-bar-option">
            <img src={assets.order_icon} alt="" />
            <p>Report</p>
          </NavLink>
          <NavLink to="/add" className="side-bar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add Items</p>
          </NavLink>
          <NavLink to="/list" className="side-bar-option">
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
          </NavLink>
          <NavLink to="/order" className="side-bar-option">
            <img src={assets.order_icon} alt="" />
            <p>Order</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
