import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Box, Select } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Plans.module.css";

const Plans = ({ value, pointerData }) => {
  // const options = [
  //     ...option
  //   ];
  console.log(value);

  return (
    <>
      <Box style={{ width: "80%", margin: "auto" }}></Box>
    </>
  );
};

export default Plans;

const ITEM_HEIGHT = 48;

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch"
          }
        }}
      >
        <MenuItem>Edit</MenuItem>
        <MenuItem>Manage Access</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>
    </div>
  );
}
