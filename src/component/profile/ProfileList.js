import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import UnorderedList from "./UnorderedList";
import { Link } from "react-router-dom";

const MyPageText = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ProfileList = () => {
  return (
    <Box sx={{ width: "180px", marginRight: "20px" }}>
      <MyPageText>
        <Link to={"/my"}>마이 페이지</Link>
      </MyPageText>
      <UnorderedList listName="쇼핑 정보" list={SHOPPING_LIST} />
      <UnorderedList listName="내 정보" list={MY_LIST} />
    </Box>
  );
};

export default ProfileList;

const SHOPPING_LIST = [
  {
    name: "구매 내역",
    link: "/my/buying",
  },
  {
    name: "판매 내역",
    link: "/my/selling",
  },
  {
    name: "관심 상품",
    link: "/my/wish",
  },
];

const MY_LIST = [
  {
    name: "프로필 정보",
    link: "/my/profile",
  },
  {
    name: "주소록",
    link: "/my/address",
  },
  {
    name: "결제 정보",
    link: "/my/payment",
  },
  {
    name: "판매 정산 계좌",
    link: "/my/account",
  },
  {
    name: "현금영수증 정보",
    link: "/my/receipt",
  },
  {
    name: "포인트",
    link: "/my/point",
  },
];
