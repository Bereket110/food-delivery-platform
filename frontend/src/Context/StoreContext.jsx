import React, { Children, createContext } from "react";

export const StoreContext = createContext(null);
const StoreContextProvider = ({ Children }) => {
  let contextValue = {};
  return (
    <StoreContext.Provider value={contextValue}>
      {Children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
