import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  TextField,
  Avatar,
  Select,
  IconButton
} from "@mui/material";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Plans from "./Plans";
import ItemLists from "./ItemLists";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Plans.module.css";

const ActionPlans = () => {
  const style = {
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
    pb: 3
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [categoryHandler, setCategoryHandler] = useState("");
  const [, pointerHandler, setPointerHandler] = useState("");
  const [marketingData, setMarketingData] = useState([]);
  const [designData, setDesignData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [pointerData, setPointerData] = useState([]);
  const [planName, setPlanName] = useState("");
  const [pointerName, setPointerName] = useState("");
  const [marketingDataModal, setMarketingDataModal] = useState([]);
  const [designDataModa, setDesignDataModal] = useState([]);
  const [salesDataModal, setSalesDataModal] = useState([]);

  console.log(marketingDataModal, designDataModa, salesDataModal);
  const addMarketingData = (newData) => {
    setMarketingData([...marketingData, newData]);
  };

  const addDesignData = (newData) => {
    setDesignData([...designData, newData]);
  };

  const addSalesData = (newData) => {
    setSalesData([...salesData, newData]);
  };

  const addPointerData = (newPointer) => {
    setPointerData([...pointerData, newPointer]);
  };

  // const deleteCategory = (value) => {
  //     setCategories(categories.filter((item) => item !== value))
  // }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleSecondModalClick = () => {
    if (categoryHandler == "Marketing") {
      addMarketingData(planName);
      handleOpen2();
    } else if (categoryHandler == "Design") {
      addDesignData(planName);
      handleOpen2();
    } else if (categoryHandler == "Sales") {
      addSalesData(planName);
      handleOpen2();
    } else {
      alert("Please Choose Department");
    }
  };
  console.log(marketingData, designData, salesData);

  const handleThirdModalClick = () => {
    addPointerData(pointerName);
    handleClose2();
    handleClose1();
    console.log(pointerData);
  };

  const teamMates = [
    {
      name: "Aryan talwar",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiojqfxTt5goerxFtlvh1oPpbQRngoARtEFktExOlq&s"
    },
    {
      name: "Karan",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiojqfxTt5goerxFtlvh1oPpbQRngoARtEFktExOlq&s"
    },
    {
      name: "Kishan",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiojqfxTt5goerxFtlvh1oPpbQRngoARtEFktExOlq&s"
    },
    {
      name: "Rishi",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiojqfxTt5goerxFtlvh1oPpbQRngoARtEFktExOlq&s"
    }
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open5 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose5 = () => {
    setAnchorEl(null);
  };

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0"
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5)
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          )
        }
      }
    }
  }));

  const [marketingDataStatus, setMarketingDataStatus] = useState("");
  const handleMarketingDataEdit = () => {
    const updatedData = prompt("Please Enter New Category");
    if (updatedData !== null) {
      setMarketingDataStatus(updatedData);
    }
    // handleClose5()
  };

  return (
    <>
      <Box style={{ width: "80%", margin: "auto" }}>
        <Typography
          clas="topText"
          style={{
            fontSize: "14px",
            color: "grey",
            fontSyle: "italic",
            marginTop: "120px",
            lineHeight: "19.12px"
          }}
        >
          SOP
        </Typography>
        <Box style={{ display: "flex" }}>
          <Typography
            style={{
              fontSize: "32px",
              width: "300px",
              left: "120px",
              top: "144px",
              borderRadis: ""
            }}
            className="actionText"
          >
            Actions Plans
          </Typography>
          <Box
            style={{
              textAlign: "right",
              width: "800px",
              justifyContent: "space-around"
            }}
          >
            {/* First Modal */}
            <Button onClick={handleOpen} variant="outlined">
              <GroupRoundedIcon /> Manage Access
            </Button>{" "}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">SOP Access</h2>
                <p
                  id="parent-modal-description"
                  style={{
                    fontFamily: "Manrope",
                    color: "#2563EB",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700"
                  }}
                >
                  Sales
                </p>
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={teamMates}
                  disableCloseOnSelect
                  onChange={(event, newValue: "") => {
                    setSalesDataModal(newValue);
                  }}
                  getOptionLabel={(option) => option.name}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      <Avatar alt="Remy Sharp" src={option.img} />
                      {option.name}
                    </li>
                  )}
                  style={{}}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="TeamMates"
                      placeholder="Select Members"
                    />
                  )}
                />
                <p
                  id="parent-modal-description"
                  style={{
                    fontFamily: "Manrope",
                    color: "#2563EB",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700"
                  }}
                >
                  Marketing
                </p>
                <Autocomplete
                  onChange={(event, newValue: "") => {
                    setMarketingDataModal(newValue);
                  }}
                  multiple
                  id="checkboxes-tags-demo"
                  options={teamMates}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.name}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      <Avatar alt="Remy Sharp" src={option.img} />
                      {option.name}
                    </li>
                  )}
                  style={{}}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="TeamMates"
                      placeholder="Select Members"
                    />
                  )}
                />
                <p
                  id="parent-modal-description"
                  style={{
                    fontFamily: "Manrope",
                    color: "#2563EB",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700"
                  }}
                >
                  Design
                </p>
                <Autocomplete
                  onChange={(event, newValue: "") => {
                    setDesignDataModal(newValue);
                  }}
                  style={{ border: "3px solid teal" }}
                  multiple
                  id="checkboxes-tags-demo"
                  options={teamMates}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.name}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      <Avatar alt="Remy Sharp" src={option.img} />
                      {option.name}
                    </li>
                  )}
                  style={{}}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="TeamMates"
                      placeholder="Select Members"
                    />
                  )}
                />{" "}
                <br />
                <Button onClick={() => handleClose()} color="error">
                  Cancel
                </Button>{" "}
                <Button
                  onClick={() => {
                    alert("You Have Succesfully Added Peoples");
                    handleClose();
                  }}
                  variant="contained"
                  disableElevation
                >
                  Update
                </Button>
              </Box>
            </Modal>
            {/* Second Modal For Adding New Plans */}
            <Button onClick={handleOpen1} variant="contained">
              <AddBoxRoundedIcon variant="contained" /> New Plan
            </Button>
            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Plan name</h2>
                <p id="parent-modal-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  auctor. Sit amet, consectetur adipiscing consectetur
                  adipiscing elit.
                </p>
                <TextField
                  onChange={(e) => setPlanName(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name "
                  name="Name"
                  autoComplete="Name"
                  autoFocus
                  placeholder="Name Your Plan"
                />
                <br />
                <br />
                <select
                  onChange={(e) => setCategoryHandler(e.target.value)}
                  style={{
                    border: "1px solid #e6f1f9",
                    width: "90%",
                    height: "45px",
                    fontStyle: "normal",
                    fontSize: "18px"
                  }}
                >
                  <option value="">Department</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Design">Design</option>
                  <option value="Sales">Sales</option>
                </select>
                <br />
                <br />
                <Button onClick={() => handleClose1()} color="error">
                  Cancel
                </Button>{" "}
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => handleSecondModalClick()}
                >
                  Create
                </Button>
              </Box>
            </Modal>
            {/* Third Modal For Pointer Name */}
            <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Pointer name</h2>
                <p id="parent-modal-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  auctor. Sit amet, consectetur adipiscing consectetur
                  adipiscing elit.
                </p>
                <TextField
                  onChange={(e) => setPointerName(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="Pointer"
                  label="Pointer Name "
                  name="Name"
                  autoComplete="Pointer Name"
                  autoFocus
                  placeholder="Name Pointer"
                />{" "}
                <br /> <br />
                <br />
                <br />
                <select
                  onChange={(e) => setPointerHandler(e.target.value)}
                  style={{
                    border: "1px solid #e6f1f9",
                    width: "90%",
                    height: "45px",
                    fontStyle: "normal",
                    fontSize: "18px"
                  }}
                >
                  <option value="">Department</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Design">Design</option>
                  <option value="Sales">Sales</option>
                </select>
                <Button onClick={() => handleClose2()} color="error">
                  Cancel
                </Button>{" "}
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => handleThirdModalClick()}
                >
                  Create
                </Button>
              </Box>
            </Modal>
          </Box>
        </Box>
      </Box>
      {/* <ItemLists>
    {categories && categories.map((value) => <Plans value={value} pointerData={pointerData} />)}
    </ItemLists> */}

      <Box className="dropDiv">
        <Box class="dropdown">
          <span>{marketingDataStatus ? marketingDataStatus : "Marketing"}</span>

          <Box class="dropdown-content">
            {marketingData.length > 0 && marketingData.map((el) => <p>{el}</p>)}
            {marketingDataModal.length > 0 &&
              marketingDataModal.map((el) => <p>{el.name}</p>)}
          </Box>
          {/* ------------------------------ */}

          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open5 ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open5 ? "true" : undefined}
              variant=""
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Avatar src="https://image.shutterstock.com/image-illustration/menu-three-dots-line-icon-260nw-2200198353.jpg" />
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button"
              }}
              anchorEl={anchorEl}
              open={open5}
              onClose={handleClose5}
            >
            <p style={{
                fontSize: "15px",fontStyle: "italic"
            }}
             onClick={() => alert("Workign")}>
                Edit
                </p>
              
              <p onClick={handleClose5} disableRipple>
                Manage Access
              </p>
              <Divider sx={{ my: 0.5 }} />
              <p
                onClick={handleClose5}
                disableRipple
                style={{ color: "red" }}
              >
                Delete
              </p>
            </StyledMenu>
          </div>
          {/* ------------------------- */}
        </Box>
        <br />

        <Box class="dropdown">
          <span>Design</span>

          <Box class="dropdown-content">
            {designData.length > 0 && designData.map((el) => <p>{el}</p>)}
            {designDataModa.length > 0 &&
              designDataModa.map((el) => <p>{el.name}</p>)}
          </Box>
          {/* --------------- */}

          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open5 ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open5 ? "true" : undefined}
              variant=""
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Avatar src="https://image.shutterstock.com/image-illustration/menu-three-dots-line-icon-260nw-2200198353.jpg" />
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button"
              }}
              anchorEl={anchorEl}
              open={open5}
              onClose={handleClose5}
            >
              <p onClick={() => alert("Working")} disableRipple>
                Edit
              </p>
              <p onClick={handleClose5} disableRipple>
                Manage Access
              </p>
              <Divider sx={{ my: 0.5 }} />
              <p
                onClick={handleClose5}
                disableRipple
                style={{ color: "red" }}
              >
                Delete
              </p>
            </StyledMenu>
          </div>
          {/* ------------------- */}
        </Box>
        <br />

        <Box class="dropdown">
          <span>Sales</span>

          <Box class="dropdown-content">
            {salesData.length > 0 && salesData.map((el) => <p>{el}</p>)}
            {salesDataModal.length > 0 &&
              salesDataModal.map((el) => <p>{el.name}</p>)}
          </Box>

          {/* ------------------- */}

          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open5 ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open5 ? "true" : undefined}
              variant=""
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Avatar src="https://image.shutterstock.com/image-illustration/menu-three-dots-line-icon-260nw-2200198353.jpg" />
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button"
              }}
              anchorEl={anchorEl}
              open={open5}
              onClose={handleClose5}
            >
              <p onClick={handleClose5} disableRipple>
                Edit
              </p>
              <p onClick={handleClose5} disableRipple>
                Manage Access
              </p>
              <Divider sx={{ my: 0.5 }} />
              <p
                onClick={() => handleClose5}
                disableRipple
                style={{ color: "red" }}
              >
                Delete
              </p>
            </StyledMenu>
          </div>
          {/* -------------------- */}
        </Box>
      </Box>
    </>
  );
};

export default ActionPlans;
