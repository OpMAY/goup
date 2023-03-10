import React from "react";
import { Inner } from "../common/js/style";
import ProfileList from "../component/profile/ProfileList";
import Buying from "../component/profile/Buying";
import Selling from "../component/profile/Selling";
import Wish from "../component/profile/Wish";
import Profile from "../component/profile/Profile";
import Address from "../component/profile/Address";
import Payment from "../component/profile/Payment";
import Account from "../component/profile/Account";
import Receipt from "../component/profile/Receipt";
import Point from "../component/profile/Point";
import {Box, Stack} from "@mui/material";

const My = ({path}) => {
  console.log(path)
  return (
    <Inner padding="40px 40px;">
      <Stack direction="row" border="1px solid gray">
        <ProfileList />
        <Box sx={{ width: "100%", bgcolor: "blue" }}>
          {path === 'buying' && <Buying />}
          {path === 'selling' && <Selling />}
          {path === 'wish' && <Wish />}
          {path === 'profile' && <Profile />}
          {path === 'address' && <Address />}
          {path === 'payment' && <Payment />}
          {path === 'account' && <Account />}
          {path === 'receipt' && <Receipt />}
          {path === 'point' && <Point />}
        </Box>
      </Stack>
    </Inner>
  );
};

export default My;
