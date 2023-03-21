import { Stack, Typography } from "@mui/material";
import React from "react";
import BtnDivision from "../../Detail/BtnDivision";
import WishBox from "./WishBox";

const HeadlineText = {
  fontWeight: "700",
  fontSize: "24px",
  padding: "5px 0 16px",
  borderBottom: "3px solid #222",
  lineHeight: "29px",
};

const Wish = () => {
  return (
    <>
      <Typography sx={HeadlineText}>관심 상품</Typography>
      <Stack direction="column">
        <WishBox />
        <WishBox />
        <WishBox />
        <WishBox />
      </Stack>
    </>
  );
};

export default Wish;
