import React, { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  console.log(cartItems);
  const [token, setToken] = useState("");
  const [food_list, setFood_list] = useState([]);
  const url = "http://localhost:4000";
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(
        "http://localhost:4000/api/cart/add",
        { itemId },
        {
          headers: {
            token,
          },
        },
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        "http://localhost:4000/api/cart/remove",
        { itemId },
        { headers: { token } },
      );
    }
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        console.log(food_list);
        let itemInfo = food_list.find((product) => product._id == item);
        totalAmount += itemInfo?.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    setFood_list(response.data.data);
  };

  const fetchCartItems = async (token) => {
    if (token) {
      const response = await axios.post(
        "http://localhost:4000/api/cart/get",
        {},
        {
          headers: {
            token,
          },
        },
      );
      setCartItems(response.data.cartData);
    }
  };

  // useEffect(() => {
  //   fetchCartItems();
  // }, [addToCart]);
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();

      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await fetchCartItems(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);
  let contextValue = {
    food_list,
    setCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    url,
    setToken,
    token,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
