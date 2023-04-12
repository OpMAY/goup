import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { productDetailAtom, sizeStateAtom } from "../../atoms/atom";

const ProductItem = styled.div`
  display: flex;
  /* padding-bottom: 20px; */
  /* padding: 32px; */
  .img {
    border-radius: 8px;
    width: 80px;
    height: 80px;
    background-size: cover;
    background-position-y: center;
    background-repeat: no-repeat;
  }
  .info {
    padding-left: 16px;
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
    .name {
      font-weight: 700;
    }
    .en_name {
      margin-top: 2px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .ko_name {
      color: rgba(34, 34, 34, 0.5);
      font-size: 13px;
      line-height: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .size {
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

const SelectProductItem = ({ state }) => {
  const productDetail = useRecoilValue(productDetailAtom);
  const sizeState = useRecoilValue(sizeStateAtom);

  return (
    <ProductItem className="product">
      <div
        className="img"
        style={{
          backgroundImage: `url(${productDetail.product.images[0].url})`,
        }}></div>
      <div className="info">
        <p className="name">{productDetail.product.product_info.model_code}</p>
        <p className="en_name">{productDetail.product.en_name}</p>
        <p className="ko_name">{productDetail.product.kor_name}</p>
        {sizeState && <span className="size">{sizeState}</span>}
      </div>
    </ProductItem>
  );
};

export default SelectProductItem;
