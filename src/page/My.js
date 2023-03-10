import React from "react";
import { Inner } from "../common/js/style";
import ProfileList from "../component/profile/ProfileList";
import Buying from "../component/profile/Buying/Buying";
import Selling from "../component/profile/Selling/Selling";
import Wish from "../component/profile/Wish/Wish";
import Profile from "../component/profile/Profile/Profile";
import Address from "../component/profile/Address/Address";
import Payment from "../component/profile/Payment/Payment";
import Account from "../component/profile/Account/Account";
import Receipt from "../component/profile/Receipt/Receipt";
import Point from "../component/profile/Point/Point";
import { Box, Stack } from "@mui/material";

const My = ({ path }) => {
  console.log(path);
  return (
    <Inner padding="40px 40px;">
      <Stack direction="row" border="1px solid gray">
        <ProfileList />
        <Box sx={{ width: "100%", bgcolor: "blue" }}>
          {path === "buying" && <Buying />}
          {path === "selling" && <Selling />}
          {path === "wish" && <Wish />}
          {path === "profile" && <Profile />}
          {path === "address" && <Address />}
          {path === "payment" && <Payment />}
          {path === "account" && <Account />}
          {path === "receipt" && <Receipt />}
          {path === "point" && <Point />}
        </Box>
      </Stack>
    </Inner>
  );
};

export default My;
