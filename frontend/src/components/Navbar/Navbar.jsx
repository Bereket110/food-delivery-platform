import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import maaheLogo from "/favicon.svg";
const Navbar = ({ setLoginPopUp }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
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

      {/* hamburger toggle for mobile */}
      <div
        className="navbar-toggle"
        onClick={() => setMobileOpen((open) => !open)}
        aria-label="Menu"
      >
        <span className={mobileOpen ? "bar open" : "bar"} />
        <span className={mobileOpen ? "bar open" : "bar"} />
        <span className={mobileOpen ? "bar open" : "bar"} />
      </div>

      <ul className={`navbar-menu ${mobileOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
              setMobileOpen(false);
            }}
            className={menu == "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            onClick={() => {
              setMenu("services");
              navigate("/services");
              setMobileOpen(false);
            }}
            className={menu == "services" ? "active" : ""}
          >
            Services
          </Link>
        </li>
        <li
          onClick={() => {
            navigateToAbout();
            setMobileOpen(false);
          }}
          className={menu == "about-us" ? "active" : ""}
        >
          About
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => {
              navigateToContact();
              setMobileOpen(false);
            }}
            className={menu == "contact-us" ? "active" : ""}
          >
            Contact
          </a>
        </li>
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
