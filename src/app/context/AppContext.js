"use client";
import React, { createContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  //Mainting a state to store original data that we get from API
  const [productRaw, setProductRaw] = useState([]);

  //For filtering and shortign
  const [product, setProduct] = useState([]);

  return (
    <AppContext.Provider
      value={{ product, setProduct, productRaw, setProductRaw }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
