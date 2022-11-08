import React,{useState} from 'react'
import {Box,Typography,Modal,Button,TextField,Avatar, Select} from "@mui/material";
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Plans from './Plans';
import ItemLists from "./ItemLists"

const ActionPlans = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [categoryHandler,setCategoryHandler] = useState("");
    const [,pointerHandler,setPointerHandler] = useState("");
    const [marketingData,setMarketingData] = useState([]);
    const [designData, setDesignData] = useState([]);
    const [salesData,setSalesData] = useState([]);
    const [pointerData, setPointerData] = useState([]);
    const [planName, setPlanName] = useState("");
    const [pointerName,setPointerName] = useState("");

    const addMarketingData = (newData) => {
        setMarketingData([...marketingData,newData])
    };

    const addDesignData = (newData) => {
        setDesignData([...designData,newData])
    };

    const addSalesData = (newData) => {
        setSalesData([...salesData,newData])
    };

    const addPointerData = (newPointer) => {
        setPointerData([...pointerData,newPointer])
    }

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
    if(categoryHandler =="Marketing"){
        addMarketingData(planName);
    } else if(categoryHandler == "Design"){
        addDesignData(planName)
    } else {
        addSalesData(planName);
    }
    console.log(marketingData,designData,salesData)
    handleOpen2();
  }
  console.log(marketingData,designData,salesData)

  const handleThirdModalClick = () => {
     addPointerData(pointerName);
    handleClose2();
    handleClose1();
    console.log(pointerData)
  }
  

  const teamMates = [
    { name: 'Aryan talwar', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiojqfxTt5goerxFtlvh1oPpbQRngoARtEFktExOlq&s" },
    { name: 'Karan', img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiojqfxTt5goerxFtlvh1oPpbQRngoARtEFktExOlq&s' },
    { name: 'Kishan', img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiojqfxTt5goerxFtlvh1oPpbQRngoARtEFktExOlq&s"},
    { name: 'Rishi', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiojqfxTt5goerxFtlvh1oPpbQRngoARtEFktExOlq&s" },
   
  ];

 
  return (
    <>
    <Box style={{width:"80%",margin:"auto"}}>
        <Typography>SOP</Typography>
       <Box style={{display:"flex",border: "1px solid"}}>
       <Typography style={{
        fontSize: "44px",
        width: "300px",
        left: "120px",
        top: "144px",
        border:"1px solid",
        borderRadis: "nullpx"
        
       }}>Actions Plans</Typography>
       <Box style={{textAlign : "right",border:"1px solid",width:"800px",justifyContent: "space-around"}}>
       
       {/* First Modal */}
       <Button onClick={handleOpen} variant="outlined"><GroupRoundedIcon /> Manage Access</Button>
       {" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">SOP Access</h2>
          <p id="parent-modal-description">
            Sales
           </p>
           <Autocomplete
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
            <Avatar alt="Remy Sharp" src={option.img}/>
            {option.name}
        
          
        </li>
      )}
      style={{  }}
      renderInput={(params) => (
        <TextField {...params} label="TeamMates" placeholder="Select Members" />
      )}
    />
 
           <p id="parent-modal-description">
            Marketing
           </p>
           <Autocomplete
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
            <Avatar alt="Remy Sharp" src={option.img}/>
            {option.name}
        
          
        </li>
      )}
      style={{  }}
      renderInput={(params) => (
        <TextField {...params} label="TeamMates" placeholder="Select Members" />
      )}
    />

           <p id="parent-modal-description">
            Design
           </p>
           <Autocomplete
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
            <Avatar alt="Remy Sharp" src={option.img}/>
            {option.name}
        
          
        </li>
      )}
      style={{  }}
      renderInput={(params) => (
        <TextField {...params} label="TeamMates" placeholder="Select Members" />
      )}
    />
           <Button onClick={() => handleClose()}  color="error">Cancel</Button> { " "}
           <Button variant="contained" disableElevation>Update</Button>
        </Box>
      </Modal>

{/* Second Modal For Adding New Plans */}
     <Button onClick={handleOpen1} variant="contained"><AddBoxRoundedIcon variant="contained" /> New Plan</Button>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Plan name</h2>
          <p id="parent-modal-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor. Sit amet, consectetur adipiscing consectetur adipiscing elit.
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
            <br /><br />
            <select  onChange={(e) =>setCategoryHandler(e.target.value)} 
            style=
            {{border:'1px solid',width:"90%",height:"35px",fontStyle:"italic",fontSize:"18px"}}>
              <option value="">Department</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Sales">Sales</option>
            </select>
            <br />
            <br />
           <Button onClick={() => handleClose1()}  color="error">Cancel</Button> { " "}
           <Button variant="contained" disableElevation onClick={()=> handleSecondModalClick()}>Create</Button>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor. Sit amet, consectetur adipiscing consectetur adipiscing elit.
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
            /> <br /> <br />
            <br /><br />
            <select  onChange={(e) =>setPointerHandler(e.target.value)} 
            style=
            {{border:'1px solid',width:"90%",height:"35px",fontStyle:"italic",fontSize:"18px"}}>
              <option value="">Department</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Sales">Sales</option>
            </select>
           <Button onClick={() => handleClose2()}  color="error">Cancel</Button> { " "}
           <Button variant="contained" disableElevation onClick={() => handleThirdModalClick()}>Create</Button>
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
  <span >Marketing</span>
  <Box class="dropdown-content">
  {marketingData.length > 0 ? (marketingData.length > 0 && marketingData.map((el)=> <p>{el}</p>)) : <p>No Data</p> }
 
  </Box>
</Box>
 <br />
 
   <Box class="dropdown">
  <span>Design</span>
  <Box class="dropdown-content">
  {designData.length > 0 ? (designData.length > 0 && designData.map((el)=> <p>{el}</p>)) : <p>No Data</p> }
  </Box>
</Box>
<br />


<Box class="dropdown">
  <span>Sales</span>
  <Box class="dropdown-content">
  {salesData.length > 0 ? (salesData.length > 0 && salesData.map((el)=> <p>{el}</p>)) : <p>No Data</p> }
  </Box>
</Box>
</Box>    
    </>
  )
}

export default ActionPlans
