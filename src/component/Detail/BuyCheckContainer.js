import React, { useState } from "react";
import styled from "styled-components";
import { Hr } from "../../common/js/style";
import SelectProductItem from "./SelectProductItem";
import CheckArea from "./CheckArea";
import OrderButton from "./OrderButton";
import CheckingModal from "../modal/CheckingModal";

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
  hr {
    margin: 20px 0 0;
    border: 1px solid #222;
  }
`;

const BuyCheckContainer = () => {
  return (
    <CheckContainer>
      <p className="notice">
        <span className="strong">구매</span>
        하시기 전에 꼭 확인하세요.
      </p>
      <CheckingModal/>
      <SelectProductItem />
      <hr />
      {CHECK_TEXT.map((item, id) => (
        <CheckArea key={id} title={item.title} content={item.content} />
      ))}

      <OrderButton type="buy_step2" />
    </CheckContainer>
  );
};

export default BuyCheckContainer;

const CHECK_TEXT = [
  {
    title: "구매하려는 상품이 맞습니다.",
    content:
      "상품 이미지, 모델번호, 출시일, 상품명, 사이즈를 한 번 더 확인했습니다.",
  },
  {
    title: "국내/해외에서 발매한 정품 · 새상품입니다.",
    content:
      "모든 구성품이 그대로이며, 한 번도 착용하지 않은 정품・새상품입니다. 국내 발매 상품 여부는 확인드리지 않습니다.",
  },
  {
    title: "제조사에서 불량으로 인정하지 않는 기준은 하자로 판단하지 않습니다.",
    content:
      "박스/패키지와 상품 컨디션에 민감하시다면 검수 기준을 반드시 확인하시기 바랍니다.",
  },
  {
    title: "KREAM의 최신 이용정책을 모두 확인하였으며, 구매를 계속합니다.",
    content:
      "건전하고 안전한 거래를 위해 반드시 숙지해야 할 미입고, 페널티, 부정거래 등의 이용정책을 확인했습니다.",
  },
];
