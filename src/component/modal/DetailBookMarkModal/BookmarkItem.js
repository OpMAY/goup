import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import styled from "styled-components";

const ProductItem = styled.div`
  display: flex;
  /* padding-bottom: 20px; */
  padding: 0 32px;
  align-items: center;
  .img {
    border-radius: 8px;
    width: 70px;
    height: 70px;
    background-image: url(https://image.a-rt.com/art/product/upload6/M9622C_Navy/S1.jpg?shrink=80:80);
    background-size: cover;
    background-position-y: center;
    background-repeat: no-repeat;
  }
  .info {
    padding-left: 7px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    p {
      margin: 0;
      color: #222;
      font-size: 14px;
      line-height: 17px;
    }
    .en_name {
      margin-top: 2px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 20px;
    }
    .ko_name {
      color: rgba(34, 34, 34, 0.5);
      font-size: 11px;
      line-height: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .size{
      font-weight: 700;
      font-size: 14px;
    }
    .icon {
      width: 65px;
      display: flex;
      margin-top: 6px;
      color: #31b46e;
      border-radius: 4px;
      align-items: center;
      background-color: rgb(242, 249, 246);
      p {
        font-size: 11px;
        color: inherit;
      }
    }
  }
`;

const BookmarkItem = () => {
  return (
    <ProductItem className="product">
      <div className="img"></div>
      <div className="info">
        <p className="en_name">Nike x Ambush Air 1231-123</p>
        <p className="ko_name">나이키 엠부쉬 에어</p>
      </div>
    </ProductItem>
  );
};

export default BookmarkItem;
