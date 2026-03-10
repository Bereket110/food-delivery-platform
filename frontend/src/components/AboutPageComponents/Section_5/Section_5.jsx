import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";
import "./Section_5.css";
const Section_5 = () => {
  const testimonials = [
    {
      name: "Alemayehu",
      role: "Regular Customer",
      photo: assets.person_1,
      quote:
        "The delivery was blazing fast and the food was still hot. Highly recommend!",
    },
    {
      name: "Selam",
      role: "Food Lover",
      photo: assets.person_2,
      quote: "Great variety of restaurants and the app is super easy to use.",
    },
    {
      name: "Getachew",
      role: "Business User",
      photo: assets.person_3,
      quote:
        "I use this platform for all of our office lunches. Reliable every time.",
    },
  ];

  return (
    <section className="section-5">
      {/* testimonials grid */}
      <div className="s5-testimonials">
        <h2 className="s5-heading">What Our Customers Say</h2>
        <div className="s5-testimonial-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="s5-testimonial-card">
              <img
                className="s5-testimonial-photo"
                src={t.photo}
                alt={t.name}
              />
              <p className="s5-testimonial-quote">"{t.quote}"</p>
              <h3 className="s5-testimonial-name">{t.name}</h3>
              <span className="s5-testimonial-role">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_5;
