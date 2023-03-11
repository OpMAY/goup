import React from "react";
import { Box, Stack } from "@mui/material";
import MyListTitle from "./MyListTitle";
import DealListHead from "./DealListHead";
import DealListBox from "./DealListBox";

const SellingContent = () => {
  return (
    <>
      <MyListTitle title="selling" name="판매 내역" more={true} />
      <Stack direction="column">
        <DealListHead title="selling" />
        <DealListBox />
      </Stack>
    </>
  );
};

export default SellingContent;
