import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { NoticeAtom } from "../../atoms/atom";
import { useRecoilValue } from "recoil";

const NoticeDetail = () => {
  const notice = useRecoilValue(NoticeAtom);
  let { id } = useParams();

  const noticeMatch = () => {
    const noticeTarget = notice.filter(item => {
      return item.no === Number(id);
    });
    return noticeTarget;
  };

  return (
    <Box sx={{}}>
      {noticeMatch() &&
        noticeMatch().map(item => (
          <Box key={item.no}>
            <Box
              sx={{
                padding: "17px 0 20px",
                borderBottom: "1px solid #ebebeb",
                color: "#222",
              }}>
              <Typography sx={{ fontSize: "12px" }}>
                {item.reg_datetime.year}.{item.reg_datetime.monthValue}.
                {item.reg_datetime.dayOfMonth}
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>
                {item.title ? item.title : "무제"}
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "1px solid #ebebeb",
                padding: "30px",
                fontSize: "15px",
              }}>
              {item.content ? item.content : "내용이 없습니다."}
            </Box>
            <Button
              variant="outlined"
              component={Link}
              to="/notice"
              sx={{
                marginTop: "30px",
                left: "50%",
                color: "rgba(34,34,34,.8)",
                borderColor: "#d3d3d3",
                borderRadius: "12px",
              }}>
              목록보기
            </Button>
          </Box>
        ))}
    </Box>
  );
};

export default NoticeDetail;
