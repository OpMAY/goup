import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SubButton = ({ name, link }) => {
  return (
    <Button
      component={Link}
      link
      to={link}
      variant="outlined"
      sx={{
        padding: "0 15px",
        fontSize: "12px",
        borderRadius: "10px",
        borderColor: "#d3d3d3",
        lineHeight: "34px",
        color: "rgba(34,34,34,.8)",
        "&:hover": {
          borderColor: "#d3d3d3",
        },
      }}>
      {name}
    </Button>
  );
};

export default SubButton;
