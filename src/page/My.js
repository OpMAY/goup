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
import SellingContent from "../component/profile/SellingContent";
import ProfileCard from "../component/profile/ProfileCard";
import BuyingContent from "../component/profile/BuyingContent";
import WishContent from "../component/profile/WishContent";
import {useRecoilState} from "recoil";
import { userAtom } from "../atoms/atom";

const My = ({ path }) => {
  console.log(path);
  
  return (
    <Inner padding="40px 40px;">
      <Stack direction="row">
        <ProfileList />
        <Box sx={{ width: "100%" }}>
          {path === "buying" && <Buying />}
          {path === "selling" && <Selling />}
          {path === "wish" && <Wish />}
          {path === "profile" && <Profile />}
          {path === "address" && <Address />}
          {path === "payment" && <Payment />}
          {path === "account" && <Account />}
          {path === "receipt" && <Receipt />}
          {path === "point" && <Point />}
          {path === undefined && (
            <>
              <ProfileCard />
              <BuyingContent />
              <SellingContent />
              <WishContent />
            </>
          )}
        </Box>
      </Stack>
    </Inner>
  );
};

export default My;
