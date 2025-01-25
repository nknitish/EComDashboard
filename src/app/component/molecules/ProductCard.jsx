"use client";

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import Rating from "../atoms/Rating";

const ProductCard = ({ item, handleClick }) => {
  const {
    image = "/vercel.png",
    title = "Default Title",
    rating = { rate: 0 },
    description = "No description available.",
    price = 0,
    category = "",
  } = item || {};

  return (
    <Card
      variant="outlined"
      className="w-full sm:w-[100%] md:w-[45%] mb-10 max-w-[400px]"
    >
      <CardActionArea
        onClick={handleClick}
        aria-label={`View details of ${title}`}
      >
        <img
          loading="lazy"
          className="w-full aspect-[4/3] object-contain mt-5"
          src={image}
          alt={title}
        />
        <CardContent>
          <Typography
            className="truncate w-[100%]"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            className="truncate w-[90%]"
            sx={{ color: "text.secondary" }}
          >
            {description}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            sx={{ color: "text.secondary" }}
          >
            <span>$</span>
            {price}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            sx={{ color: "text.secondary" }}
          >
            {category}
          </Typography>
          <Rating rating={rating.rate} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default React.memo(ProductCard);
