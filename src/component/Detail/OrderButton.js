import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { userAtom, paramAtom, sizeStateAtom } from "../../atoms/atom";
import { useRecoilValue } from "recoil";

const Button = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const OrderButton = ({ type, onClick }) => {
  const param = useRecoilValue(paramAtom);
  const size = useRecoilValue(sizeStateAtom);

  return (
    <Button onClick={onClick}>
      {type === "buy_step1" && (
        <Link to={`/buy/check/${param}?size=${size}&type=buy`}>
          <p className="status pending">구매입찰</p>
          <p className="delivery_notice">일반배송(5~7일소요)</p>
        </Link>
      )}
      {type === "buy_step2" && (
        <Link to={`/buy/${param}`}>
          <p className="status pending">구매 계속</p>
        </Link>
      )}
      {type === "buy_step3" && (
        <Link to={`/buy/${param}/?size=${size}`}>
          <p className="status keepBid">구매 입찰 계속</p>
        </Link>
      )}
      {type === "buy_step4" && (
        <Link to={`/buy/${param}/?size=${size}`}>
          <p className="status keepBuy">즉시 구매 계속</p>
        </Link>
      )}
      {type === "sell_step1" && (
        <Link to={`/sell/check/${param}?size=${size}&type=sell`}>
          <p className="status sell">판매 입찰</p>
        </Link>
      )}
      {type === "sell_step2" && (
        <Link to={`/sell/${param}`}>
          <p className="status pending">판매 계속</p>
        </Link>
      )}
      {type === "sell_step3" && (
        <Link to={`/sell/${param}/?size=${size}`}>
          <p className="status keepBid">판매 입찰 계속</p>
        </Link>
      )}
      {type === "sell_step4" && (
        <Link to={`/sell/${param}/?size=${size}`}>
          <p className="status keepSell">즉시 판매 계속</p>
        </Link>
      )}
    </Button>
  );
};

export default OrderButton;
