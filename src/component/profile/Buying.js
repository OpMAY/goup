import React from "react";
import { Inner } from "../../common/js/style";
import { Stack } from "@mui/material";
import ProfileList from "./ProfileList";
import ProfileContent from "./ProfileContent";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const Buying = () => {
  const location = useLocation();
  return (
    <Inner padding="40px 40px;">
      <Stack direction="row" border="1px solid gray">
        <ProfileList />
        <Box sx={{ width: "1000px", bgcolor: "blue" }}>
          <>buying</>
        </Box>
      </Stack>
    </Inner>
  );
};

export default Buying;
