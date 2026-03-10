import React from "react";
import "./Contact.css";
import { assets } from "../../assets/frontend_assets/assets";
const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <section className="contact-header">
          <div className="contact-header-content">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">
              We'd love to hear from you! Reach out to us with any questions or
              feedback.
            </p>
          </div>
        </section>
        <section className="contact-info-section">
          {/* contact information */}
          <div className="contact-info-grid">
            {/* Visit Us */}
            <div className="contact-card">
              {/*visit us icon */}
              <div className="contact-icon-container">
                <img className="contact-icon" src={assets.home_icon} alt="" />
              </div>
              <h3 className="contact-card-title">Visit Us</h3>
              <p className="contact-card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                et blanditiis a ratione iure laboriosam ad eius, nostrum harum
              </p>
              <p className="contact-card-detail">
                123 Main Street, City, Country
              </p>
            </div>
            {/* Call Us */}
            <div className="contact-card">
              {/* call us icon */}
              <div className="contact-icon-container">
                <img className="contact-icon" src={assets.call_icon} alt="" />
              </div>
              <h3 className="contact-card-title">Call Us</h3>
              <p className="contact-card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                et blanditiis a ratione iure laboriosam ad eius, nostrum harum
              </p>
              <p className="contact-card-detail">+1 (123) 456-7890</p>
            </div>
            {/* Email Us */}
            <div className="contact-card">
              {/* email us icon */}
              <div className="contact-icon-container">
                <img className="contact-icon" src={assets.email_icon} alt="" />
              </div>
              <h3 className="contact-card-title">Email Us</h3>
              <p className="contact-card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                et blanditiis a ratione iure laboriosam ad eius, nostrum harum
              </p>
              <p className="contact-card-detail">info@company.com</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
