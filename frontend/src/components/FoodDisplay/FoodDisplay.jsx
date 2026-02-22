import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

import axios from "axios";
const FoodDisplay = ({ category }) => {
  const { url, food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((food, index) => {
          if (category === "All") {
            return <FoodItem key={index} food={food} />;
          } else {
            if (food.category === category) {
              return <FoodItem key={index} food={food} />;
            }
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
