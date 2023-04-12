import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SelectProductItem from "./SelectProductItem";
import CheckArea from "./CheckArea";
import OrderButton from "./OrderButton";
import {useRecoilState} from "recoil";
import {checkAtom} from "../../atoms/atom";

const CheckContainer = styled.div`
  .notice {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    padding-bottom: 40px;
    .strong {
      color: #31b46e;
    }
  }
  hr {
    margin: 20px 0 0;
    border: 1px solid #222;
  }
`;

const SellCheckContainer = () => {
  const [check, setCheck] = useRecoilState(checkAtom);
  const initCheck = () => {
    const c = [];
    for(let i = 0; i < CHECK_TEXT.length; i++) {
      c.push(false);
    }
    setCheck(c);
  }


  useEffect(() => {
    initCheck();
  }, [])

  return (
    <CheckContainer>
      <p className="notice">
        <span className="strong">판매</span>
        하시기 전에 꼭 확인하세요.
      </p>
      <SelectProductItem />
      {/* <Hr margin="20px 0 0;" /> */}
      <hr />
      {CHECK_TEXT.map((item, id) => (
        <CheckArea key={id} title={item.title} content={item.content} no={id} />
      ))}
      <OrderButton type="sell_step2" />
    </CheckContainer>
  );
};

export default SellCheckContainer;

const CHECK_TEXT = [
  {
    title: "판매하려는 상품이 맞습니다.",
    content:
      "상품 이미지, 모델번호, 출시일, 상품명, 사이즈를 한 번 더 확인했습니다.",
  },
  {
    title: "국내/해외에서 발매한 정품 · 새상품입니다.",
    content:
      "모든 구성품이 그대로이며, 한 번도 착용하지 않은 정품・새상품입니다. 손상/오염/사용감 있는 상품은 판매가 불가능합니다.",
  },
  {
    title: "박스/패키지의 상태를 확인합니다.",
    content: "박스/패키지 상태에 따른 검수 기준을 확인했습니다.",
  },
  {
    title: "이중 포장하여 선불 발송합니다.",
    content:
      "반드시 이중 포장하여 택배 상자에 담아 선불 발송합니다. 합배송은 권장하지 않으며 이로 인한 박스/패키지 훼손은 판매자의 책임입니다.",
  },
  {
    title: "KREAM의 최신 이용정책을 모두 확인하였으며, 판매를 계속합니다.",
    content:
      "건전하고 안전한 거래를 위해 반드시 숙지해야 할 미입고, 페널티, 부정거래 등의 이용정책을 확인했습니다.",
  },
];
