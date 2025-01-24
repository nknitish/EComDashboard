import { sortByList } from "@/app/constants/constant";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";

const Select = ({ value, handleChange }) => {
  return (
    <FormControl variant="outlined" fullWidth sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
      <MuiSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Sort By"
        onChange={handleChange}
      >
        {sortByList.map((e) => (
          <MenuItem key={e.text} value={e.value}>
            {e.text}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
