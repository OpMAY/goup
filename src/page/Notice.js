import React, { useState } from "react";
import { Inner } from "../common/js/style";
import { Box, Stack, ListItem, Typography, Pagination } from "@mui/material";
import NoticeList from "../component/profile/NoticeList";
import Faq from "../component/Notice/faq";

const Notice = ({ path }) => {
  console.log(path);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Inner padding="40px 40px;">
      <Stack direction="row">
        <NoticeList />
        <Box sx={{ width: "100%" }}>
          {path === "faq" && <Faq />}
          {path === undefined && (
            <>
              <Box
                sx={{ borderBottom: "3px solid #222", paddingBottom: "16px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                  공지사항
                </Typography>
              </Box>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, id) => (
                <ListItem
                  key={id}
                  sx={{
                    fontSize: "15px",
                    padding: "17px 0 19px",
                    borderBottom: "1px solid #ebebeb",
                  }}>
                  [이벤트 발표] WELCOME DRAW - 티파니 세트
                </ListItem>
              ))}
              {page}
              <Stack spacing={2} sx={{ padding: "28px 0" }}>
                <Pagination
                  onChange={handleChange}
                  count={5}
                  size="large"
                  page={page}
                  defaultPage={1}
                  sx={{ "& .MuiPagination-ul": { justifyContent: "center" } }}
                />
              </Stack>
            </>
          )}
        </Box>
      </Stack>
    </Inner>
  );
};

export default Notice;
