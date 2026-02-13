import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
const Navbar = ({ setLoginPopUp }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const { getTotalAmount, cartItems } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu == "menu" ? "active" : ""}
        >
          Menu
        </a>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu == "mobile-app" ? "active" : ""}
        >
          Mobile app
        </li>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu == "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-ico">
          <img
            onClick={() => navigate("/cart")}
            src={assets.basket_icon}
            alt=""
          />
          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setLoginPopUp(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
