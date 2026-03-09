import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import maaheLogo from "/favicon.svg";
const Navbar = ({ setLoginPopUp }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const { getTotalAmount, cartItems, setToken, token } =
    useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const navigateToMenu = () => {
    setMenu("menu");
    navigate("/");
  };
  const navigateToContact = () => {
    setMenu("contact-us");
    navigate("/contact-us");
  };
  const navigateToAbout = () => {
    setMenu("about-us");
    navigate("/about-us");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img src={maaheLogo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/services"
          onClick={() => {
            setMenu("services");
            navigate("/services");
          }}
          className={menu == "services" ? "active" : ""}
        >
          Services
        </Link>
        <Link
          to="/how-it-works"
          onClick={() => {
            setMenu("how-it-works");
            navigate("/how-it-works");
          }}
          className={menu == "how-it-works" ? "active" : ""}
        >
          How It Works
        </Link>
        <Link
          to="/testimonials"
          onClick={() => {
            setMenu("testimonials");
            navigate("/testimonials");
          }}
          className={menu == "testimonials" ? "active" : ""}
        >
          Testimonials
        </Link>
        <li
          onClick={() => navigateToAbout()}
          className={menu == "about-us" ? "active" : ""}
        >
          About
        </li>
        <a
          href="#footer"
          onClick={() => navigateToContact()}
          className={menu == "contact-us" ? "active" : ""}
        >
          Contact
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
        {!token ? (
          <button onClick={() => setLoginPopUp(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="" />
                <p onClick={() => navigate("/myorder")}>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
