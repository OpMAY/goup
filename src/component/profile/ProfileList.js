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
    color: #222;
  }
`;

const ProfileList = ({ path }) => {
  return (
    <Box sx={{ width: "200px", marginRight: "20px" }}>
      <MyPageText>
        <Link to={"/my"}>마이 페이지</Link>
      </MyPageText>
      <UnorderedList path={path} listName="쇼핑 정보" list={SHOPPING_LIST} />
      <UnorderedList path={path} listName="내 정보" list={MY_LIST} />
    </Box>
  );
};

export default ProfileList;

const SHOPPING_LIST = [
  {
    name: "구매 내역",
    link: "/my/buying",
    main: "buying",
  },
  {
    name: "판매 내역",
    link: "/my/selling",
    main: "selling",
  },
  {
    name: "관심 상품",
    link: "/my/wish",
    main: "wish",
  },
];

const MY_LIST = [
  {
    name: "프로필 정보",
    link: "/my/profile",
    main: "profile",
  },
  {
    name: "주소록",
    link: "/my/address",
    main: "address",
  },
  {
    name: "판매 정산 계좌",
    link: "/my/account",
    main: "account",
  },
  {
    name: "현금영수증 정보",
    link: "/my/receipt",
    main: "receipt",
  },
  {
    name: "포인트",
    link: "/my/point",
    main: "point",
  },
];
