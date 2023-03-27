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
  margin-top: 20px;
  background-color: #333;
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

const OrderButton = ({ type }) => {
  const param = useRecoilValue(paramAtom);
  const size = useRecoilValue(sizeStateAtom)
  return (
    <Button>
      {type === "buy_step1" && (
        <Link to={`/buy/check/${param}?size=${size}&type=buy`}>
          <p className="status pending">구매입찰</p>
          <p className="delivery_notice">일반배송(5~7일소요)</p>
        </Link>
      )}
      {type === "buy_step2" && (
        <Link to="/buy/id">
          <p className="status pending">구매 계속</p>
        </Link>
      )}
    </Button>
  );
};

export default OrderButton;
