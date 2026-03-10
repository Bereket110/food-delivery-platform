import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";
import "./Section_4.css";
const Section_4 = () => {
  return (
    <>
      <section className="section-4">
        <section className="section-4-wrapper">
          <section className="section-4-header">
            <h1 className="section-4-title">Lets Meet Our Team</h1>
            <p className="section-4-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              voluptate. Lorem ipsum dolor
            </p>
          </section>
          <section className="section-4-team">
            <div className="team-member">
              <div className="team-member-photo">
                <img className="team-member-img" src={assets.person_1} alt="" />
              </div>
              <div className="team-member-info">
                <h1 className="team-member-name">Henok Yakob</h1>
                <p className="team-member-role">CEO & Founder</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-photo">
                <img className="team-member-img" src={assets.person_2} alt="" />
              </div>
              <div className="team-member-info">
                <h1 className="team-member-name">Samuel Miskel</h1>
                <p className="team-member-role">CEO & Founder</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-photo">
                <img className="team-member-img" src={assets.person_3} alt="" />
              </div>
              <div className="team-member-info">
                <h1 className="team-member-name">Samuel Miskel</h1>
                <p className="team-member-role">CEO & Founder</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Section_4;
