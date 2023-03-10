import React from "react";
import { Inner } from "../../common/js/style";
import { Stack } from "@mui/material";
import ProfileList from "./ProfileList";
import ProfileContent from "./ProfileContent";

const ProfilePage = () => {
  return (
    <Inner padding="40px 40px;">
      <Stack direction="row" border="1px solid gray">
        <ProfileList />
        {<ProfileContent />}
        {<ProfileContent />}
        {<ProfileContent />}
        {<ProfileContent />}
        {<ProfileContent />}
        {<ProfileContent />}
      </Stack>
    </Inner>
  );
};

export default ProfilePage;
