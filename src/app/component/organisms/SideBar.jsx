import {
  drawerWidth,
  Logo,
  RangeData,
  StartRating,
  URLS,
} from "@/app/constants/constant";
import AppContext from "@/app/context/AppContext";
import { useFetch } from "@/app/hooks/customHooks";
import { filterProducts } from "@/app/utilities/ProductUtilities";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useContext, useState } from "react";
import CheckboxList from "../atoms/CheckBoxList";
import RadioButtonList from "../atoms/RadioButtonList";
import Range from "../atoms/Range";

const Sidebar = ({
  mobileOpen,
  handleDrawerClose,
  handleDrawerTransitionEnd,
}) => {
  const { min, max } = RangeData;
  const { state: categories, isLoading } = useFetch(URLS.categories, []);
  const { setProduct, productRaw: allProducts } = useContext(AppContext);

  const [filters, setFilters] = useState({
    categories: [],
    rating: null,
    priceRange: [min, max],
  });

  const handleCategoryChange = (value) => {
    //Reset record once change in catogery
    const updatedFilters = {
      rating: null,
      priceRange: [min, max],
      categories: value,
    };

    const filteredProducts = filterProducts(allProducts, updatedFilters);
    setProduct(filteredProducts);
    setFilters(updatedFilters);
  };

  const handleRatingChange = (value) => {
    const updatedFilters = { ...filters, rating: value };
    const filteredProducts = filterProducts(allProducts, updatedFilters);
    setProduct(filteredProducts);
    setFilters(updatedFilters);
  };

  const handlePriceChange = (value) => {
    const updatedFilters = { ...filters, priceRange: value };
    const filteredProducts = filterProducts(allProducts, updatedFilters);
    setProduct(filteredProducts);
    setFilters(updatedFilters);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img className="h-[50px]" src={Logo} alt="logo" />
      </Toolbar>

      <Divider />

      <CheckboxList
        text="CATEGORIES"
        data={categories}
        handleChange={handleCategoryChange}
      />

      <RadioButtonList
        value={filters.rating}
        text="RATINGS"
        handleChange={handleRatingChange}
        data={StartRating}
      />
      <Range
        text="PRICE RANGE"
        value={filters.priceRange}
        handleChange={handlePriceChange}
      />
    </div>
  );

  if (isLoading) return <h1>Loading......</h1>;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
