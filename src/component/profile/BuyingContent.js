import React from "react";
import { Box, Stack } from "@mui/material";
import MyListTitle from "./MyListTitle";
import DealListHead from "./DealListHead";
import DealListBox from "./DealListBox";

const BuyingContent = () => {
  return (
    <>
      <MyListTitle title="buying" name="구매 내역" more={true} />
      <Stack direction="column">
        <DealListHead title="buying"/>
        <DealListBox/>
      </Stack>
    </>
  );
};

export default BuyingContent;
