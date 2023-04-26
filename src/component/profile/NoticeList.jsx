import React from "react";
import { Box } from "@mui/material";
import UnorderedList from "./UnorderedList";


const NoticeList = ({ path }) => {
  return (
    <Box sx={{ width: "200px", marginRight: "20px" }}>
      <UnorderedList path={path} link="notice" listName="고객센터" list={SHOPPING_LIST} />
    </Box>
  );
};

export default NoticeList;

const SHOPPING_LIST = [
  {
    name: "공지사항",
    link: "/notice",
    main: "main",
  },
  {
    name: "자주 묻는 질문",
    link: "/faq",
    main: "faq",
  }
];
