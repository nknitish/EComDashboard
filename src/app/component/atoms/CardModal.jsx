"use client";

import { Logo } from "@/app/constants/constant";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import { memo } from "react";
import Rating from "./Rating";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CardModal = ({ item, open, handleClose }) => {
  const {
    image = Logo,
    title = "Title",
    rating = { rate: 0 },
    description,
    price,
    category,
  } = item || {};

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        <Card variant="outlined" className="w-full">
          <CardActionArea>
            <img
              loading="lazy"
              className="w-full aspect-[4/3] object-contain"
              src={image}
              alt={title}
            />
            <CardContent>
              <Typography
                id="modal-title"
                gutterBottom
                variant="h5"
                component="div"
              >
                {title}
              </Typography>
              <Typography
                id="modal-description"
                variant="body2"
                gutterBottom
                sx={{ color: "text.secondary" }}
              >
                {description || "No description"}
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
      </Box>
    </Modal>
  );
};

export default memo(CardModal);
