import React from "react";
import styled from "styled-components";

const NoticeContainer = styled.div`
  p {
    border-top: 1px solid #ebebeb;
    padding-top: 40px;
    margin: 0;
    margin-top: 20px;
    color: rgba(34, 34, 34, 0.5);
    font-size: 12px;
  }
`;

const MeditationNotice = () => {
  return (
    <NoticeContainer>
      <p>
        크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은
        개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은
        각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서
        고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 크림(주)에
        있습니다.
      </p>
    </NoticeContainer>
  );
};

export default MeditationNotice;
