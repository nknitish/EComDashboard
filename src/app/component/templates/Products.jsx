import React, { useContext, useState } from "react";
import { defaultSortBy, drawerWidth } from "@/app/constants/constant";
import AppContext from "@/app/context/AppContext";
import { sortProduct } from "@/app/utilities/ProductUtilities";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

// Lazy load components
const CardModal = React.lazy(() => import("../atoms/CardModal"));
const Select = React.lazy(() => import("../atoms/Select"));
const ProductCard = React.lazy(() => import("../molecules/ProductCard"));

const Products = ({}) => {
  const { product, setProduct } = useContext(AppContext);
  const [sortBy, setSortBy] = useState(defaultSortBy.value);
  const [open, setOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct(sortProduct(product, value));
    setSortBy(value);
  };

  const handleCardClick = (item) => {
    setModalItem(item);
    setOpen(true);
  };
  return (
    <Box
      component="main"
      className="px-20 py-5 bg-slate-400 h-[100vh] overflow-scroll "
      sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar sx={{ display: { xs: "block", sm: "block", md: "none" } }} />
      <div className="flex">
        <div className="ml-auto mb-5">
          <Select value={sortBy} handleChange={handleChange} />
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        {product.map((item) => (
          <ProductCard
            key={item?.id}
            item={item}
            handleClick={() => handleCardClick(item)}
          />
        ))}
      </div>

      <CardModal
        item={modalItem}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </Box>
  );
};

export default Products;
