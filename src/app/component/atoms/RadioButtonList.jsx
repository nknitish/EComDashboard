import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Radio from "@mui/material/Radio";
import { useState } from "react";

import { Divider } from "@mui/material";

export const RadioButtonList = ({
  text = "",
  value = null,
  data = [],
  handleChange,
}) => {
  const [isExpand, setIsExpand] = useState(true);

  const handleSelect = (value) => {
    handleChange(value);
  };

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setIsExpand(!isExpand)}>
            <ListItemIcon>
              {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>

        {isExpand &&
          data.map((e) => {
            const labelId = `radio-list-label-${e.value}`;

            return (
              <ListItem key={e?.value} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={() => handleSelect(e?.value)}
                  dense
                >
                  <ListItemIcon>
                    <Radio
                      edge="start"
                      checked={value === e?.value}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={e.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
      <Divider />
    </>
  );
};

export default RadioButtonList;
