import React from "react";
import styled from "styled-components";
import { BsBookmarkFill } from "react-icons/bs";

const ItemBlock = styled.div`
  color: #222;
  p {
    margin: 0;
  }
  .img-box {
    border: "1px solid red";
    .img-box-main {
      border-radius: 8px;
      position: relative;
      height: 230px;
      background-image: url(https://image.a-rt.com/art/product/upload6/M9622C_Navy/S1.jpg?shrink=560:560);
      background-size: cover;
      background-position-y: center;
      background-repeat: no-repeat;
      .img-box-bookmark {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 34px;
        height: 34px;
        right: 8px;
        bottom: 8px;
      }
    }
  }
  .product-info {
    padding-top: 8px;
    margin-bottom: 12px;
    .name {
      display: inline-block;
      font-size: 13px;
      color: #333;
      font-weight: 700;
      margin-bottom: 2px;
      border-bottom: 1px solid #333;
    }
    .item-detail {
      margin: 8.5px 0 2px;
      font-size: 14px;
      line-height: 17px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .price-info {
    .price {
      font-size: 15px;
      font-weight: 700;
    }
    .desc {
      font-size: 11px;
      color: rgba(34, 34, 34, 0.5);
    }
  }
`;

const WishItem = () => {
  return (
    <ItemBlock>
      <div className="img-box">
        <div className="img-box-main">
          <div className="img-box-bookmark">
            <BsBookmarkFill size={24}></BsBookmarkFill>
          </div>
        </div>
      </div>
      <div>
        <div className="product-info">
          <p className="name">삼품이름</p>
          <p className="item-detail">상품 상세</p>
        </div>
        <div className="price-info">
          <p className="price">000,000 원</p>
          <p className="desc">즉시 구매가</p>
        </div>
      </div>
    </ItemBlock>
  );
};

export default WishItem;
