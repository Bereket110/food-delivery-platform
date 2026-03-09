import React from "react";
import "./Footer.css";
import maaheLogo from "/favicon.svg";
import { assets } from "../../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.logo} alt="" /> */}
          <h1 className="maaheLogo">MaaHe Delivery</h1>
          {/* <img className="maaheLogo" src={maaheLogo} alt="" /> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            inventore corporis rem quidem id itaque quod rerum maiores sint,
            impedit iure nesciunt reiciendis, qui in voluptatum perspiciatis
            explicabo numquam eveniet.
          </p>
          <div className="footer-social-links">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <p>Phone: +251 949658591</p>
          <p>Phone: +251 937618191</p>
          <p>
            <a href="https://t.me/mahe3649" target="_blank">
              Telegram: mahe3649
            </a>
          </p>
          <p>
            <a href="https://tiktok.com/@delivery464" target="_blank">
              TikTok: @delivery464
            </a>
          </p>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2026 Maahedelivery. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
