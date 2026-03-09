import React from "react";
import "./ServiceHeader2.css";
import { assets } from "../../../assets/frontend_assets/assets";
const ServiceHeader2 = () => {
  return (
    <>
      <div className="header2-container">
        {/* Left Side Image container  */}
        <div className="left-container">
          <img src={assets.hero} alt="" width={200} />
        </div>
        {/* Right Side Text */}
        <div className="right-container">
          <h1>Sample Header 2 Text</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
            voluptatem pariatur deserunt quod adipisci, sequi minus expedita eos
            laudantium eveniet sunt dolorum rem? Architecto aspernatur quae
            nihil quos animi odit?
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceHeader2;
