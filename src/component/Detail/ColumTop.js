import React, { useEffect } from "react";
import styled from "styled-components";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import BuySellButton from "./BuySellButton";
import { Link } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { RiArrowDropDownFill } from "react-icons/ri";
import DetailSizeModal from "../modal/DetailSizeModal";
import DetailBookMarkModal from "../modal/DetailBookMarkModal";
import {
  sizeStateAtom,
  paramAtom,
  tokenAtom,
  productDetailAtom,
} from "../../atoms/atom";
import { axiosGetFunction } from "../../module/CustomAxios";
import { Typography } from "@mui/material";

const DetailMainTitle = styled.div`
  font-size: 18px;
  div {
    margin-bottom: 10px;
    a {
      text-decoration: none;
      border-bottom: 2px solid black;
      font-weight: 800;
      color: black;
    }
  }
  .productName {
    margin-bottom: 4px;
  }

  .ProductKoName {
    font-size: 14px;
    line-height: 17px;
    color: rgba(34, 34, 34, 0.5);
  }
`;

const SizeInfo = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  padding: 19px 0 12px;
  border-bottom: 1px solid rgb(235, 235, 235);

  .title {
    font-size: 13px;
    color: rgba(34, 34, 34, 0.8);
  }
  .detail {
    font-weight: 700;
  }
  .button {
    background-color: #fff;
    border: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      margin: 0;
    }
  }
`;

const RecentPrice = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  margin-top: 11px;
  .title {
    font-size: 13px;
    color: rgba(34, 34, 34, 0.8);
  }
  .detail {
    font-weight: 700;
    font-size: 20px;
    text-align: right;
  }
  p {
    font-size: 13px;
    color: rgb(241, 87, 70);
    margin: 0px;
  }
`;

const WishButton = styled(Link)`
  text-decoration: none;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid rgb(235, 235, 235);
  padding: 0 25px;
  color: #333333;
  margin-top: 12px;
  display: flex;
  line-height: 60px;
  gap: 4px;
  font-size: 15px;
  justify-content: center;
  .btn_text {
    box-sizing: border-box;
    text-align: center;
  }
  .wish_count {
    font-weight: 600;
  }
`;

const ColumTop = () => {
  const productDetail = useRecoilValue(productDetailAtom);
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const param = useRecoilValue(paramAtom);

  const oneSize = {
    fontSize: "16px",
    fontWeight: 700,
    textAlign: "center",
  };

  console.log("columtop", productDetail, "사이즈 스테이트", sizeState);

  // useEffect(() => {
  //   axiosGetFunction(
  //     `/api/kream/product/size/` + param,
  //     { user_no: 1 },
  //     token,
  //     setToken
  //   ).then(res => {
  //     const target = res.data.data.sizes[0].size;
  //     target === "ONE SIZE" && setSizeState(target);
  //   });
  // }, []);

  return (
    <div>
      <DetailMainTitle>
        <div>
          <a href="3">{productDetail.brand.name}</a>
        </div>
        <div className="productName">{productDetail.product.en_name}</div>
        <div className="ProductKoName">{productDetail.product.kor_name}</div>
      </DetailMainTitle>
      <div className="product_figure_wrap">
        <SizeInfo>
          <div className="title">사이즈</div>
          {sizeState === "ONE SIZE" ? (
            <Typography sx={oneSize}>ONE SIZE</Typography>
          ) : (
            <DetailSizeModal product={productDetail} />
          )}
        </SizeInfo>
        <RecentPrice>
          <div className="title">최근 거래가</div>
          {productDetail.recent_order_price ? (
            <div>
              <div className="detail">
                {productDetail.recent_order_price.toLocaleString()}원
              </div>
              <p>40,000원(+7.8%)</p>
            </div>
          ) : (
            <div>
              <div className="detail">- 원</div>
              <p>(0%)</p>
            </div>
          )}
        </RecentPrice>
      </div>
      <div className="buttonWrap">
        <BuySellButton />
        <DetailBookMarkModal />
        {/* <WishButton to={getUser ? "#" : "/login"} className="btn_wish">
          <BsBookmark size="20px"></BsBookmark>
          <span className="btn_text">관심상품</span>
          <span className="wish_count">1,231</span>
        </WishButton> */}
      </div>
    </div>
  );
};

export default ColumTop;
