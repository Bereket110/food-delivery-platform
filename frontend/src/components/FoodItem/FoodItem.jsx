import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ food }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const { _id, name, image, price, description } = food;
  // const [itemCount, setItemCount] = useState(0);

  return (
    <div>
      <div className="food-item">
        <div className="food-item-img-container">
          <img src={image} alt="" className="food-item-img" />
          {!cartItems[_id] ? (
            <img
              // onClick={() => setItemCount((prev) => prev + 1)}
              onClick={() => addToCart(_id)}
              src={assets.add_icon_white}
              className="add"
              alt=""
            />
          ) : (
            <div className="add-sub">
              <img
                onClick={() => removeFromCart(_id)}
                src={assets.remove_icon_red}
                alt=""
              />

              <p>{cartItems[_id]}</p>
              <img
                onClick={() => addToCart(_id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">{price}Birr</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
