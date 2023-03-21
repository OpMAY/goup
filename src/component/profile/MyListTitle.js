import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "@emotion/styled";

const MoreLink = styled(Link)`
  text-decoration: none;
  color: rgba(34, 34, 34, 0.5);
`;

const MyListTitle = ({ title, name, more }) => {
  return (
    <Stack direction="row" sx={{ margin: "42px 0 16px", color: "#222" }}>
      <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
        {name}
      </Typography>
      {more && (
        <Stack direction="row" alignItems="center" marginLeft="auto">
          <MoreLink to={`/my/${title}`}>
            <Stack direction="row" alignItems="center">
              <Typography sx={{ fontSize: "13px" }}>더 보기</Typography>
              <Box width="20px" height="20px">
                <MdKeyboardArrowRight size={20}></MdKeyboardArrowRight>
              </Box>
            </Stack>
          </MoreLink>
        </Stack>
      )}
    </Stack>
  );
};

export default MyListTitle;
