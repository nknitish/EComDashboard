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
  const [page, setPage] = useState(1);

  const { state: productList, isLoading } = useFetch(URLS.product(page), []);

  useEffect(() => {
    if (productList.length) {
      // keep it original to reset filter and soring
      setProductRaw((curent) => [...curent, ...productList]);
      // for sorting and filtering
      setProduct((current) => [...current, ...productList]);
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

  const handleLoadMore = () => {
    setPage((currentPage) => currentPage + 1);
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
        <Products mobileOpen={mobileOpen} handleLoadMore={handleLoadMore} />
      </Suspense>
    </Box>
  );
}

export default Home;
