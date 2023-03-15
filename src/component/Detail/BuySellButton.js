import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BuySellButtonContainer = styled.div`
  display: flex;
  margin-top: 17px;
  box-sizing: border-box;
  height: 60px;
  gap: 10px;
`;

const BtnDivisionLink = styled(Link)`
  position: relative;
  background-color: ${props =>
    props.primary ? "rgb(239, 98, 83)" : "rgb(65, 185, 121)"};
  border-radius: 10px;
  display: flex;
  color: rgb(255, 255, 255);
  text-decoration-line: none;
  flex-grow: 1;
  align-items: center;
  &:before {
    position: absolute;
    content: "";
    width: 1px;
    background-color: rgba(34, 34, 34, 0.1);
    left: 55px;
    bottom: 0;
    top: 0;
  }
  .title {
    font-size: 18px;
    width: 55px;
    text-align: center;
  }
  .price {
    margin: 10px;
    display: flex;
    flex-direction: column;
    .amount {
      font-size: 15px;
      font-weight: 700;
    }
    .desc {
      font-size: 11px;
    }
  }
`;

const BuySellButton = () => {
  return (
    <BuySellButtonContainer>
      <BtnDivisionLink to="/buy/select" className="buy" href="a" primary>
        <strong className="title">구매</strong>
        <div className="price">
          <span className="amount">655,000원</span>
          <span className="desc">즉시 구매가</span>
        </div>
      </BtnDivisionLink>
      <BtnDivisionLink to="/sell/select" className="sell" href="a">
        <strong className="title">판매</strong>
        <div className="price">
          <span className="amount">777,000원</span>
          <span className="desc">즉시 판매가</span>
        </div>
      </BtnDivisionLink>
    </BuySellButtonContainer>
  );
};

export default BuySellButton;
