import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {userAtom, paramAtom, sizeStateAtom, checkAtom, priceStateAtom} from "../../atoms/atom";
import { useRecoilValue } from "recoil";

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  padding: 16px 18px;
  /* margin-top: 20px; */
  background-color: #222;
  a {
    text-decoration: none;
    color: #fff;
    p {
      margin: 0;
      text-align: center;
    }
    .price {
      font-size: 12px;
      font-weight: 700;
      line-height: 18px;
    }
    .status {
      font-size: 15px;
      font-weight: 700;
      line-height: 18px;
    }
    .delivery_notice {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  
  &:disabled {
    background-color: grey;
  }
`;

const OrderButton = ({ type, onClick, input = false }) => {
  const param = useRecoilValue(paramAtom);
  const size = useRecoilValue(sizeStateAtom);
  const check = useRecoilValue(checkAtom);
  const priceState = useRecoilValue(priceStateAtom);

  return (
      <Button
          disabled={(type === 'buy_step3' || type === 'sell_step3') ? input : (check.length > 0 ? !check.every(v => v === true) : false)}
          onClick={onClick}>
      {type === "buy_step1" && (
        <Link to={`/buy/check/${param}?size=${size.size}&type=buy`}>
          <p className="status pending">{priceState !== null ? priceState : '구매 입찰'}</p>
          {
            priceState !== null ? <p className="price pending">즉시 구매</p> : null
          }
          <p className="delivery_notice">일반배송(5~7일소요)</p>
        </LinkStyle>
      )}
      {type === "buy_step2" && (
        <LinkStyle to={`/buy/${param}`}>
          <p className="status pending">구매 계속</p>
        </LinkStyle>
      )}
      {type === "buy_step3" && (
        <Link to={`/buy/${param}/?size=${size.size}`}>
          <p className="status keepBid">구매 입찰 계속</p>
        </LinkStyle>
      )}
      {type === "buy_step4" && (
        <Link to={`/buy/${param}/?size=${size.size}`}>
          <p className="status keepBuy">즉시 구매 계속</p>
        </LinkStyle>
      )}
      {type === "sell_step1" && (
        <Link to={`/sell/check/${param}?size=${size.size}&type=sell`}>
          <p className="status sell">{priceState !== null ? priceState : '판매 입찰'}</p>
          {
            priceState !== null ? <p className="price sell">즉시 판매</p> : null
          }
        </Link>
      )}
      {type === "sell_step2" && (
        <LinkStyle to={`/sell/${param}`}>
          <p className="status pending">판매 계속</p>
        </LinkStyle>
      )}
      {type === "sell_step3" && (
        <Link to={`/sell/${param}/?size=${size.size}`}>
          <p className="status keepBid">판매 입찰 계속</p>
        </LinkStyle>
      )}
      {type === "sell_step4" && (
        <Link to={`/sell/${param}/?size=${size.size}`}>
          <p className="status keepSell">즉시 판매 계속</p>
        </LinkStyle>
      )}
    </Button>
  );
};

export default OrderButton;
