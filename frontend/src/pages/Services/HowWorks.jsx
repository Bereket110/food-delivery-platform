import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./HowWorks.css";
const HowWorks = () => {
  return (
    <>
      <section className="how_it_works_container">
        <section className="how_left_side">
          <div className="how_header">
            <h3 className="how_title">How It Works</h3>
            <h1 className="how_subtitle">
              It happens effortlessly, this is how
            </h1>
          </div>
          <div className="how_it_works_step">
            <div className="how_it_works_step_number">
              <p>1</p>
            </div>
            <div className="how_it_works_step_content">
              <h3 className="how_it_works_step_title">
                Start application process
              </h3>
              <p className="how_it_works_step_description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                blanditiis placeat perspiciatis consequatur eaque, quae iure
              </p>
            </div>
          </div>
          <div className="how_it_works_step">
            <div className="how_it_works_step_number">
              <p>2</p>
            </div>
            <div className="how_it_works_step_content">
              <h3 className="how_it_works_step_title">
                Start application process
              </h3>
              <p className="how_it_works_step_description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                blanditiis placeat perspiciatis consequatur eaque, quae iure
              </p>
            </div>
          </div>
          <div className="how_it_works_step">
            <div className="how_it_works_step_number">
              <p>3</p>
            </div>
            <div className="how_it_works_step_content">
              <h3 className="how_it_works_step_title">
                Start application process
              </h3>
              <p className="how_it_works_step_description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                blanditiis placeat perspiciatis consequatur eaque, quae iure
              </p>
            </div>
          </div>
        </section>
        <section className="how_right_side">
          <img src={assets.food_1} alt="" />
        </section>
      </section>
    </>
  );
};

export default HowWorks;
