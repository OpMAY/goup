import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import UnorderedList from "./UnorderedList";

const ProfileList = () => {
  return (
    <Box sx={{ width: "180px", marginRight: "20px" }}>
      <Typography variant="h5" paddingBottom="30px" fontWeight="700">
        마이 페이지
      </Typography>
      <UnorderedList listName="쇼핑 정보" list={SHOPPING_LIST} />
      <UnorderedList listName="내 정보" list={MY_LIST} />
    </Box>
  );
};

export default ProfileList;

const SHOPPING_LIST = [
  {
    name: "구매 내역",
    link: "buying",
  },
  {
    name: "판매 내역",
    link: "selling",
  },
  {
    name: "관심 상품",
    link: "wish",
  },
];

const MY_LIST = [
  {
    name: "프로필 정보",
    link: "profile",
  },
  {
    name: "주소록",
    link: "address",
  },
  {
    name: "결제 정보",
    link: "payment",
  },
  {
    name: "판매 정산 계좌",
    link: "account",
  },
  {
    name: "현금영수증 정보",
    link: "receipt",
  },
  {
    name: "포인트",
    link: "point",
  },
];
