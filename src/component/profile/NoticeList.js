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

const NoticeList = () => {
  return (
    <Box sx={{ width: "200px", marginRight: "20px" }}>
      <MyPageText>
        <Link to={"/notice"}>고객센터</Link>
      </MyPageText>
      <UnorderedList list={SHOPPING_LIST} />
    </Box>
  );
};

export default NoticeList;

const SHOPPING_LIST = [
  {
    name: "공지사항",
    link: "/notice",
  },
  {
    name: "자주 묻는 질문",
    link: "/faq",
  },
  // {
  //   name: "검수 기준",
  //   link: "/auth_policy",
  // },
];
