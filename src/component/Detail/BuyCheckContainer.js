import React, { useState } from "react";
import styled from "styled-components";
import { Hr } from "../../common/js/style";
import SelectProductItem from "./SelectProductItem";
import CheckArea from "./CheckArea";
import OrderButton from "./OrderButton";


const CheckContainer = styled.div`
  .notice {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    padding-bottom: 40px;
    .strong {
      color: #f15746;
    }
  }
  hr{
    margin: 20px 0 0;
    border : 1px solid #222;
  }
`;

const BuyCheckContainer = () => {
  return (
    <CheckContainer>
      <p className="notice">
        <span className="strong">구매</span>
        하시기 전에 꼭 확인하세요.
      </p>
      <SelectProductItem size="290" />
      {/* <Hr margin="20px 0 0;" /> */}
      <hr/>
      <CheckArea status={false} />
      <CheckArea />
      <CheckArea />
      <CheckArea />
      <OrderButton type="buy_step2" />
    </CheckContainer>
  );
};

export default BuyCheckContainer;
