import { sortByValues } from "../constants/constant";

export const sortProduct = (data = [], sortBy = "") => {
  //handle Edge Cases
  if (!sortBy) return [];

  if (sortBy === sortByValues.PRICE_HIGH) {
    return data.sort((a, b) => a.price - b.price);
  }
  if (sortBy === sortByValues.PRICE_LOW) {
    return data.sort((a, b) => b.price - a.price);
  }
  if (sortBy === sortByValues.RECOMMEND) {
    return data.sort((a, b) => b.id - a.id);
  }
  return [];
};

export const filterByCategory = (allProducts, categories = []) => {
  if (!categories.length) return allProducts;
  return allProducts.filter((e) => categories.includes(e.category));
};

export const filterByRating = (data = [], value) => {
  if (!value) return data;
  return data.filter((e) => Math.floor(e.rating.rate) === value);
};

export const filterByPriceRange = (data, range = []) => {
  if (!range.length) return data;
  return data.filter((e) => e.price >= range[0] && e.price <= range[1]);
};

export const filterProducts = (allProducts, filters) => {
  let filteredProducts = [...allProducts];

  if (filters.categories.length) {
    filteredProducts = filterByCategory(filteredProducts, filters.categories);
  }

  if (filters.rating) {
    filteredProducts = filterByRating(filteredProducts, filters.rating);
  }

  if (filters.priceRange.length) {
    filteredProducts = filterByPriceRange(filteredProducts, filters.priceRange);
  }

  return filteredProducts;
};
