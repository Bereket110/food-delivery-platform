import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  let contextValue = {
    food_list,
    setCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
