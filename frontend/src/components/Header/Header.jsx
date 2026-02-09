import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favorite Food</h2>
        <p>
          Choose from a wide variety of delicious meals and have them delivered
          to your doorstep in no time. With our easy-to-use platform, you can
          browse through menus, customize your order, and enjoy a seamless food
          delivery experience. Whether you're craving pizza, sushi, or a healthy
          salad, we've got you covered. Place your order now and satisfy your
          hunger with just a few clicks!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
