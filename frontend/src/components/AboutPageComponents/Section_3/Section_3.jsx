import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";
import "./Section_3.css";
const Section_3 = () => {
  return (
    <>
      <section className="section-3">
        <section className="section-3-inner">
          {/* Section for Our Mission */}
          <div className="section-3-item">
            <div className="section-3-image-container">
              <img
                className="section-3-image"
                src={assets.mission}
                alt="Our Mission"
              />
            </div>
            <div className="section-3-content">
              <h1 className="section-3-title">Our Mission</h1>
              <p className="section-3-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptas, voluptate.
              </p>
            </div>
          </div>
          {/* Section for Our Vision */}
          <div className="section-3-item">
            <div className="section-3-image-container">
              <img
                className="section-3-image"
                src={assets.vision}
                alt="Our Vision"
              />
            </div>
            <div className="section-3-content">
              <h1 className="section-3-title">Our Vision</h1>
              <p className="section-3-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptas, voluptate.
              </p>
            </div>
          </div>
          {/* Section for Our Values */}
          <div className="section-3-item">
            <div className="section-3-image-container">
              <img
                className="section-3-image"
                src={assets.values}
                alt="Our Values"
              />
            </div>
            <div className="section-3-content">
              <h1 className="section-3-title">Our Values</h1>
              <p className="section-3-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptas, voluptate.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Section_3;
