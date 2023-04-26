import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EmptyContainer = styled.div`
  padding: 80px 0;
  text-align: center;
  p {
    font-size: 13px;
    color: rgba(34, 34, 34, 0.5);
    margin: 0;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    border: 1px solid #d3d3d3;
    font-size: 12px;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px 14px;
    color: #222;
  }
`;

const EmptyContent = ({ text, shopButton }) => {
  return (
    <EmptyContainer className="purchase_content">
      <p>{text ? text : null}</p>
      {shopButton ? <Link to="/shop">SHOP 바로가기</Link> : null}
    </EmptyContainer>
  );
};

export default EmptyContent;
