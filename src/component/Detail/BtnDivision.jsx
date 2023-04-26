import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BtnDivisionStyle = styled(Link)`
  position: relative;
  background-color: ${props => props.background};
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

const BtnDivision = ({ link, title, price, background }) => {
  return (
    <BtnDivisionStyle className={title} to={link} background={background}>
      <strong className="title">{title}</strong>
      <div className="price">
        <span className="amount">{price}원</span>
        {title === "구매" ? (
          <span className="desc">즉시 구매가</span>
        ) : (
          <span className="desc">즉시 판매가</span>
        )}
      </div>
    </BtnDivisionStyle>
  );
};

export default BtnDivision;
