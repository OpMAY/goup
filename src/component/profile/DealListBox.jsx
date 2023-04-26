import React from "react";
import { Box, Typography } from "@mui/material";

const DealListBox = () => {
  return (
    <>
      {true ? (
        <Box className="deal_list_box">
          <Typography
            sx={{
              padding: "80px",
              textAlign: "center",
              fontSize: "13px",
              color: "rgba(34,34,34,.5)",
            }}>
            거래 내역이 없습니다.
          </Typography>
        </Box>
      ) : (
        <>내용</>
      )}
    </>
  );
};

export default DealListBox;
