import React from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Buying from "./Buying/Buying";

const ProfileContent = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Box sx={{ width: "1000px", bgcolor: "blue" }}>
      {location.pathname === "/my/buying" ? <Buying /> : null}
    </Box>
  );
};

export default ProfileContent;
