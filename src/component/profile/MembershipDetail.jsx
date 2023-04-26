import React from "react";
import { Stack, Typography, Box } from "@mui/material";

const MembershipDetail = ({ top, bottom }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      sx={{ textAlign: "center" }}>
      <Typography sx={{ fontSize: "16px", fontWeight: "700", width: "160px" }}>
        {top}
      </Typography>
      <Typography
        sx={{ fontSize: "13px", width: "160px", color: "rgba(34,34,34,.5)" }}>
        {bottom}
      </Typography>
    </Stack>
  );
};

export default MembershipDetail;
