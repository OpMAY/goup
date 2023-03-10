import React from "react";
import { Box, Typography } from "@mui/material";

const ProfileList = () => {
  return (
    <Box sx={{ width: "180px", marginRight: "20px", bgcolor: "red" }}>
      <Typography variant="h5" paddingBottom="30px" fontWeight="700">
        마이 페이지
      </Typography>
      <Typography variant="h6" mBottom="30px" fontWeight="700">
        쇼핑 정보
      </Typography>
      <ol>
        <li>
          <a></a>
        </li>
      </ol>
    </Box>
  );
};

export default ProfileList;

const MYPAGE_LIST = [
  {
    name: "구매 내역",
    link: "1",
  },
  {
    name: "판매 내역",
    link: "1",
  },
  {
    name: "보관 판매",
    link: "1",
  },
  {
    name: "관심 상",
    link: "1",
  },
];
