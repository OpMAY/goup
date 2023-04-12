import React from "react";
import { Stack, Button } from "@mui/material";

const TwoButton = ({ handleClose, solid, padding, disabled }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      gap="8px"
      sx={{ padding: padding }}>
      <Button
        onClick={handleClose}
        variant="outlined"
        sx={{
          backgroundColor: "#fff",
          color: "rgba(34,34,34,.8)",
          borderColor: " #d3d3d3",
          padding: "10px",
          borderRadius: "12px",
          width: "120px",
          "&:hover": {
            borderColor: "#d3d3d3",
          },
        }}>
        취소
      </Button>
      <Button
        disabled={disabled}
        variant="contained"
        sx={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "10px",
          borderRadius: "12px",
          width: "120px",
          fontWeight: "700",
          "&:hover": {
            backgroundColor: "#222",
          },
        }}>
        {solid}
      </Button>
    </Stack>
  );
};

export default TwoButton;
