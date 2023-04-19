import React from "react";
import styled from "styled-components";
import BuySellButton from "./BuySellButton";
import {useRecoilValue, useRecoilState} from "recoil";
import DetailSizeModal from "../modal/DetailSizeModal";
import DetailBookMarkModal from "../modal/DetailBookMarkModal";
import {sizeStateAtom, productDetailAtom} from "../../atoms/atom";
import {Typography} from "@mui/material";

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
    margin: 0px;
    text-align: right;

    &.plus {
      color: rgb(241, 87, 70);
    }

    &.minus {
      color: rgb(65, 185, 121);
    }
  }
`;

// const WishButton = styled(Link)`
//   text-decoration: none;
//   align-items: center;
//   background-color: #fff;
//   border-radius: 10px;
//   border: 1px solid rgb(235, 235, 235);
//   padding: 0 25px;
//   color: #333333;
//   margin-top: 12px;
//   display: flex;
//   line-height: 60px;
//   gap: 4px;
//   font-size: 15px;
//   justify-content: center;
//   .btn_text {
//     box-sizing: border-box;
//     text-align: center;
//   }
//   .wish_count {
//     font-weight: 600;
//   }
// `;

const ColumTop = () => {
    const productDetail = useRecoilValue(productDetailAtom);
    const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);

    const oneSize = {
        fontSize: "16px",
        fontWeight: 700,
        textAlign: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Roboto', 'AppleSDGothicNeo-Regular', 'NanumBarunGothic', 'NanumGothic', '나눔고딕', 'Segoe UI', 'Helveica', 'Arial', 'Malgun Gothic', 'Dotum', sans-serif"
    };

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
                    {sizeState && sizeState.size === "ONE SIZE" ? (
                        <Typography sx={oneSize}>ONE SIZE</Typography>
                    ) : (
                        <DetailSizeModal product={productDetail}/>
                    )}
                </SizeInfo>
                <RecentPrice>
                    <div className="title">최근 거래가</div>
                    {productDetail.recent_order_price ? (
                        <div>
                            <div className="detail">
                                {productDetail.recent_order_price.toLocaleString()}원
                            </div>
                            {
                                productDetail && productDetail.recent_2nd_order_price !== null && productDetail.recent_2nd_order_price !== 0 ?
                                    <p className={productDetail.recent_order_price - productDetail.recent_2nd_order_price > 0 ? 'plus' : productDetail.recent_order_price - productDetail.recent_2nd_order_price < 0 ? 'minus' : ''}>
                                        {((productDetail.recent_order_price -
                                            productDetail.recent_2nd_order_price)).toLocaleString()}원
                                        (
                                        {Math.round((((productDetail.recent_order_price -
                                                    productDetail.recent_2nd_order_price) /
                                                productDetail.recent_2nd_order_price) *
                                            100) * 10) / 10}
                                        %)
                                    </p> : null
                            }

                        </div>
                    ) : (
                        <div>
                            <div className="detail">-</div>
                            <p>-</p>
                        </div>
                    )}
                </RecentPrice>
            </div>
            <div className="buttonWrap">
                <BuySellButton/>
                <DetailBookMarkModal/>
            </div>
        </div>
    );
};

export default ColumTop;
