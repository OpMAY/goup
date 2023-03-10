import React from "react";
import { Inner } from "../../common/js/style";
import { Stack } from "@mui/material";
import ProfileList from "./ProfileList";
import ProfileContent from "./ProfileContent";

const ProfilePage = () => {
  return (
    <Inner padding="0 40px;">
      <Stack direction="row" bgcolor="gray">
        <ProfileList />
        <ProfileContent />
      </Stack>
    </Inner>
  );
};

export default ProfilePage;
