import React from "react";
import { Avatar, Box, Stack, Typography, Button } from "@mui/material";
import SubButton from "./SubButton";
import MembershipDetail from "./MembershipDetail";

const ProfileCard = () => {
  return (
    <Box
      sx={{
        padding: "24px 0 24px 24px",
        border: "1px solid #ebebeb",
        borderRadius: "10px",
      }}>
      <Stack direction="row">
        <Box sx={{ display: "flex" }}>
          <Avatar
            alt="user_profile_image"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{
              border: "1px solid #ebebeb",
              width: 100,
              height: 100,
              marginRight: "14px",
            }}></Avatar>
          <Stack>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "21px" }}>
              myId123123
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(34,34,34,.5)" }}>
              myId123123@gmail.com
            </Typography>
            <Stack
              direction="row"
              spacing="7px"
              sx={{ fontSize: "12px", marginTop: "12px" }}>
              <SubButton name="프로필 수정" />
              <SubButton name="내 스타일" />
            </Stack>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", marginLeft: "auto" }}>
          <MembershipDetail top="일반 회원" bottom="회원 등급" />
          <Box sx={{width:"1px", height:"100%", backgroundColor:"#ebebeb"}}></Box>
          <MembershipDetail  top="0P" bottom="포인트" />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProfileCard;
