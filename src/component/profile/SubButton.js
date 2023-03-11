import React from "react";
import { Button } from "@mui/material";

const SubButton = ({name}) => {
  return (
    <Button
      variant="outlined"
      sx={{
        padding: "0 15px",
        fontSize: "12px",
        borderRadius: "10px",
        borderColor: "#d3d3d3",
        lineHeight: "34px",
        color: "rgba(34,34,34,.8)",
      }}>
      {name}
    </Button>
  );
};

export default SubButton;
