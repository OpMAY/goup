import React from "react";
import { Box, Typography } from "@mui/material";

const EmptyOrder = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        padding: "42px 0 22px",
        color: "rgba(34,34,34,.4)",
      }}>
      <Box
        component="img"
        sx={{
          height: 58,
          width: 58,
          margin: "auto",
        }}
        alt="The house from the offer."
        src="/images/detail_empty.png"
      />
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "8px",
          fontSize: "13px",
        }}>
        {text} 아직 없습니다.
      </Typography>
    </Box>
  );
};

export default EmptyOrder;
