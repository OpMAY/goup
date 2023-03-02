import React, { useState } from "react";
import styled from "styled-components";
import ConfirmList from "./ConfirmList";

const ConfirmWrapContainer = styled.div`
  padding-top: 39px;
  .confirm_title {
    margin: 0;
    padding-bottom: 12px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
  .confirm_content {
    border-top: 1px solid #ebebeb;
    color: #222;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
`;

const ConfirmWrap = () => {
  return (
    <ConfirmWrapContainer>
      <h3 className="confirm_title">구매 전 꼭 확인해주세요!</h3>
      <div className="confirm_content">
        <ul>
          <ConfirmList title="배송 기간 안내" />
          <ConfirmList title="검수 안내" />
          <ConfirmList title="구매 환불/취소/교환 안내" />
        </ul>
      </div>
    </ConfirmWrapContainer>
  );
};

export default ConfirmWrap;
