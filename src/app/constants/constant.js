import Rating from "../component/atoms/Rating";
export const Logo =
  "https://strategywerks.com/wp-content/uploads/2021/06/SW_Logo.svg";

export const drawerWidth = 300;

export const sortByValues = {
  PRICE_LOW: "PRICE_LOW",
  PRICE_HIGH: "PRICE_HIGH",
  RECOMMEND: "RECOMMEND",
};

export const defaultSortBy = {
  text: "Recommend",
  value: sortByValues.RECOMMEND,
};

export const sortByList = [
  { text: defaultSortBy.text, value: sortByValues.RECOMMEND },
  { text: "Price : Low to High", value: sortByValues.PRICE_HIGH },
  { text: "Price : High to Low", value: sortByValues.PRICE_LOW },
];

export const URLS = {
  product: "https://fakestoreapi.com/products",
  categories: "https://fakestoreapi.com/products/categories",
};

export const StartRating = [
  { value: 5, text: <Rating rating={5} /> },
  { value: 4, text: <Rating rating={4} /> },
  { value: 3, text: <Rating rating={3} /> },
  { value: 2, text: <Rating rating={2} /> },
  { value: 1, text: <Rating rating={1} /> },
];

export const RangeData = {
  minDistance: 20,
  min: 0,
  max: 1000,
};
