import React from "react";
import { food_list, service_list } from "../../assets/frontend_assets/assets";
import "./Servicess.css";
import MediaCard from "./ServiceCard";
import HowWorks from "./HowWorks";

const Servicess = () => {
  return (
    <>
      <section className="service_container">
        <section className="service_header">
          <h2 className="service_title">Our services</h2>
          <p className="service_description">
            We offer a wide range of services to meet all your needs.
          </p>
        </section>
        <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {service_list.map((item) => (
            <MediaCard key={item._id} data={item} />
          ))}
        </section>
        <HowWorks />
      </section>
    </>
  );
};

export default Servicess;
