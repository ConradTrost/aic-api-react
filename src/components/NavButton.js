import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const styles = {
  position: "fixed",
  bottom: "0",
  right: "0",
  padding: "20px",
};

const NavButton = ({ onButtonClick }) => {
  const handleClick = () => {
    onButtonClick();
  };

  return (
    <Box className="nav-btn" style={styles}>
      <Button variant="contained" onClick={handleClick} endIcon={<ArrowCircleRightOutlinedIcon />}>
        Next
      </Button>
    </Box>
  );
};

export default NavButton;
