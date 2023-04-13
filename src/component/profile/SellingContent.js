import React from "react";
import { Box, Stack } from "@mui/material";
import MyListTitle from "./MyListTitle";
import DealListHead from "./DealListHead";
import EmptyContent from "./Buying/EmptyContent";

const SellingContent = () => {
  return (
    <>
      <MyListTitle title="selling" name="판매 내역" more={true} />
      <Stack direction="column">
        <DealListHead title="selling" />
        <EmptyContent text="거래 내역이 없습니다." shopButton={false} />
      </Stack>
    </>
  );
};

export default SellingContent;
