import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";
import "./Section_2.css";
const Section_2 = () => {
  return (
    <>
      <section className="section-2">
        <section className="section-2-inner">
          <div className="section-2-text">
            <h1 className="section-2-title">
              We help our community by giving fast service
            </h1>
            <p className="section-2-description">
              We are committed to providing quick and reliable service to meet
              the needs of our community. Our team is dedicated to ensuring that
              our customers receive prompt assistance and support, making their
              experience with us as seamless and efficient as possible. Whether
              it's through our responsive
            </p>
          </div>
          <div className="section-2-image-container">
            <img className="section-2-image" src={assets.henok_photo} alt="" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Section_2;
