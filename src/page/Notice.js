import React, { useEffect } from "react";
import { Inner } from "../common/js/style";
import { Box, Stack, Typography } from "@mui/material";
import NoticeList from "../component/profile/NoticeList";
import Faq from "../component/Notice/faq";
import { axiosGetFunction } from "../module/CustomAxios";
import { useRecoilState } from "recoil";
import { NoticeAtom, tokenAtom } from "../atoms/atom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NoticeDetail from "../component/Notice/noticeDetail";
import Layout from "../component/Layout";

const ListStyle = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    font-size: 15px;
    padding: 17px 0 19px;
    border-bottom: 1px solid #ebebeb;
    a {
      color: rgba(34, 34, 34, 0.8);
      text-decoration: none;
    }
  }
`;

const Notice = ({ path }) => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [notice, setNotice] = useRecoilState(NoticeAtom);

  useEffect(() => {
    axiosGetFunction(
      `/api/kream/notice/1`,
      { user_no: 1 },
      token,
      setToken
    ).then(res => {
      setNotice(res.data.data.notices);
    });
  }, []);

  console.log("---------->", notice);

  return (
    <Layout>
      <Inner padding="40px 40px;">
        <Stack direction="row">
          <NoticeList />
          <Box sx={{ width: "100%" }}>
            {path === "faq" && <Faq />}
            {path === "detail" && <NoticeDetail />}
            {path === undefined && (
              <>
                <Box
                  sx={{
                    borderBottom: "3px solid #222",
                    paddingBottom: "16px",
                  }}>
                  <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                    공지사항
                  </Typography>
                </Box>
                <ListStyle>
                  {notice.map(item => (
                    <li key={item.no}>
                      <Link to={`/notice/${item.no}`}>
                        {item.title ? item.title : "무제"}
                      </Link>
                    </li>
                  ))}
                </ListStyle>
              </>
            )}
          </Box>
        </Stack>
      </Inner>
    </Layout>
  );
};

export default Notice;
