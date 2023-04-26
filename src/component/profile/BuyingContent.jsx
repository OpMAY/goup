import React from "react";
import { Box, Stack } from "@mui/material";
import MyListTitle from "./MyListTitle";
import DealListHead from "./DealListHead";
import EmptyContent from "./Buying/EmptyContent";
const BuyingContent = () => {
  return (
    <>
      <MyListTitle title="buying" name="구매 내역" more={true} />
      <Stack direction="column">
        <DealListHead title="buying" />
        <EmptyContent text="거래 내역이 없습니다." shopButton={false} />
      </Stack>
    </>
  );
};

export default BuyingContent;
