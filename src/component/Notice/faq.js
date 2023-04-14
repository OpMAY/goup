import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import FaqList from "./faqList";
import { Link } from "react-router-dom";
import { tokenAtom, qnaAtom } from "../../atoms/atom";
import { axiosGetFunction } from "../../module/CustomAxios";
import { useRecoilState } from "recoil";

const Table = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ebebeb;
  margin-top: 20px;
  li {
    text-align: center;
    flex: 33.3333%;
    text-decoration: none;
    font-size: 18px;
    padding: 26px;
    cursor: pointer;
    a {
      color: rgba(34, 34, 34, 0.8);
      text-decoration: none;
    }
    &:nth-child(1) {
      border-right: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
    }
    &:nth-child(2) {
      border-right: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
    }
    &:nth-child(3) {
      border-bottom: 1px solid #ebebeb;
    }
    &:nth-child(4) {
      border-right: 1px solid #ebebeb;
    }
    &:nth-child(5) {
      border-right: 1px solid #ebebeb;
    }
  }
`;

const Faq = () => {
  const [tab, setTab] = useState(1);
  const [token, setToken] = useRecoilState(tokenAtom);
  const [qna, setQna] = useRecoilState(qnaAtom);

  const handleTab = e => {
    setTab(e.currentTarget.value);
  };

  useEffect(() => {
    axiosGetFunction(
      `/api/kream/qna?type=`,
      { user_no: 1 },
      token,
      setToken
    ).then(res => {
      setQna(res.data.data.qna);
    });
  }, []);


  //qna API의 원하는 type을 넣으면 해당 타입의 배열만 반환하는 함수
  function qnaType(RequireType) {
    const returnValue = qna.filter(item => {
      console.log(item);
      return item.type === RequireType;
    });
    return returnValue;
  }

  return (
    <>
      <Box sx={{ borderBottom: "3px solid #222", paddingBottom: "16px" }}>
        <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
          자주 묻는 질문
        </Typography>
      </Box>
      <Table>
        <li value="1" onClick={handleTab}>
          <Link to={`/faq?category=all&list=true`}>전체</Link>
        </li>
        <li value="2" onClick={handleTab}>
          <Link to={`/faq?category=policy&list=true`}>이용정책</Link>
        </li>
        <li value="3" onClick={handleTab}>
          <Link to={`/faq?category=common&list=true`}>공통</Link>
        </li>
        <li value="4" onClick={handleTab}>
          <Link to={`/faq?category=buying&list=true`}>구매</Link>
        </li>
        <li value="5" onClick={handleTab}>
          <Link to={`/faq?category=selling&list=true`}>판매</Link>
        </li>
        <li value="0" onClick={handleTab}></li>
      </Table>
      {tab === 1 && <FaqList qna={qna} tab={tab} />}
      {tab === 2 && <FaqList qna={qnaType("이용정책")} tab={tab} />}
      {tab === 3 && <FaqList qna={qnaType("공통")} tab={tab} />}
      {tab === 4 && <FaqList qna={qnaType("구매")} tab={tab} />}
      {tab === 5 && <FaqList qna={qnaType("판매")} tab={tab} />}
    </>
  );
};

export default Faq;
