import React from "react";
import styled from "styled-components";
import BtnDivision from "../../Detail/BtnDivision";
import { Hr } from "../../../common/js/style";

const WishContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  .left {
    display: flex;
    .product_img {
      border-radius: 8px;
      background-color: yellow;
      width: 80px;
      height: 80px;
      background-image: url(https://image.a-rt.com/art/product/upload6/M9622C_Navy/S1.jpg?shrink=80:80);
      background-repeat: no-repeat;
      background-size: contain;
      background-position-y: center;
    }
    .product_info {
      color: #222;
      margin-left: 13px;

      .brand_name {
        color: #333;
        display: inline-block;
        font-size: 14px;
        font-weight: 700;
        padding-bottom: 2px;
        line-height: 17px;
        border-bottom: 1px solid #333;
      }
      .product_name {
        margin-top: 2px;
        font-size: 13px;
        line-height: 18px;
        max-height: 36px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .wish_size {
        margin-top: 25px;
        font-size: 13px;
        line-height: 16px;
        font-weight: 700;
      }
    }
  }
  .right {
    width: 164px;
    display: flex;
    flex-direction: column;
    .delete {
      text-align: right;
      margin-top: 6px;
      color: rgba(34, 34, 34, 0.8);
      font-size: 12px;
      padding: 0 3px;
      text-decoration-color: rgba(34, 34, 34, 0.8);
    }
  }
`;

const WishBox = () => {
  return (
    <>
      <WishContainer className="wish_container">
        <div className="left">
          <div className="product_img"></div>
          <div className="product_info">
            <div className="brand_name">Nike</div>
            <div className="product_name">
              Nike x Ambush Air Force 1 Low SP Black
            </div>
            <div className="wish_size">235(US 5)</div>
          </div>
        </div>
        <div className="right">
          <BtnDivision title="구매" price="112,123" primary />
          <a className="delete" href="delete">
            삭제
          </a>
        </div>
      </WishContainer>
      <Hr margin="0;"></Hr>
    </>
  );
};

export default WishBox;
