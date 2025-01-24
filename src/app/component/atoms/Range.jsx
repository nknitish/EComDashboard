import { RangeData } from "@/app/constants/constant";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Slider from "@mui/material/Slider";

const Range = ({ value = [], text = "", handleChange }) => {
  const { min, max, minDistance } = RangeData;
  const handleSliderChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], max - minDistance);
        handleChange([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        handleChange([clamped - minDistance, clamped]);
      }
    } else {
      handleChange(newValue);
    }
  };

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PriceChangeIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
        <ListItem className="flex flex-col">
          <Slider
            min={min}
            step={minDistance}
            max={max}
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            sx={{
              color: "#FF3861",
              height: 4,
            }}
          />
          <div className="flex w-full justify-between">
            <p>{`$ ${value[0]}`}</p>
            <p>{`$ ${value[1]}`}</p>
          </div>
        </ListItem>
      </List>
      <div></div>
    </div>
  );
};

export default Range;
