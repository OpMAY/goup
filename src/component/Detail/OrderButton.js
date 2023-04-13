import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { paramAtom, sizeStateAtom } from "../../atoms/atom";
import { useRecoilValue } from "recoil";

const LinkStyle = styled(Link)`
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
`;

const OrderButton = ({ type, onClick }) => {
  const param = useRecoilValue(paramAtom);
  const size = useRecoilValue(sizeStateAtom);

  return (
    <Button
      fullWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        padding: "10px 18px",
        backgroundColor: "#222",
        "&:hover": {
          backgroundColor: "#222",
        },
      }}
      onClick={onClick}>
      {type === "buy_step1" && (
        <LinkStyle to={`/buy/check/${param}?size=${size}&type=buy`}>
          <p className="status pending">구매입찰</p>
          <p className="delivery_notice">일반배송(5~7일소요)</p>
        </LinkStyle>
      )}
      {type === "buy_step2" && (
        <LinkStyle to={`/buy/${param}`}>
          <p className="status pending">구매 계속</p>
        </LinkStyle>
      )}
      {type === "buy_step3" && (
        <LinkStyle to={`/buy/${param}/?size=${size}`}>
          <p className="status keepBid">구매 입찰 계속</p>
        </LinkStyle>
      )}
      {type === "buy_step4" && (
        <LinkStyle to={`/buy/${param}/?size=${size}`}>
          <p className="status keepBuy">즉시 구매 계속</p>
        </LinkStyle>
      )}
      {type === "sell_step1" && (
        <LinkStyle to={`/sell/check/${param}?size=${size}&type=sell`}>
          <p className="status sell">판매 입찰</p>
        </LinkStyle>
      )}
      {type === "sell_step2" && (
        <LinkStyle to={`/sell/${param}`}>
          <p className="status pending">판매 계속</p>
        </LinkStyle>
      )}
      {type === "sell_step3" && (
        <LinkStyle to={`/sell/${param}/?size=${size}`}>
          <p className="status keepBid">판매 입찰 계속</p>
        </LinkStyle>
      )}
      {type === "sell_step4" && (
        <LinkStyle to={`/sell/${param}/?size=${size}`}>
          <p className="status keepSell">즉시 판매 계속</p>
        </LinkStyle>
      )}
    </Button>
  );
};

export default OrderButton;
