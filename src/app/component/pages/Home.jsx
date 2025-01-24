"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Header from "../organisms/Header";
import Sidebar from "../organisms/SideBar";

import { useFetch } from "@/app/hooks/customHooks";
import { URLS } from "@/app/constants/constant";
import AppContext from "@/app/context/AppContext";

const Products = React.lazy(() => import("../templates/Products"));

function Home() {
  const { setProduct, setProductRaw } = useContext(AppContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { state: productList, isLoading } = useFetch(URLS.product, []);

  useEffect(() => {
    if (productList.length) {
      // keep it original to reset filter and soring
      setProductRaw([...productList]);
      // for sorting and filtering
      setProduct(productList);
    }
  }, [productList]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Products mobileOpen={mobileOpen} />
      </Suspense>
    </Box>
  );
}

export default Home;
