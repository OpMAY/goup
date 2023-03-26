import React from "react";
import styled from "styled-components";
import InfoTitle from "./InfoTitle";
import { useRecoilValue } from "recoil";
import { productDetailAtom } from "../../atoms/atom";

const ProductInfoWrap = styled.div`
  .detail_product_info_wrap {
    .detail_product {
      padding: 20px 0;
      display: flex;
      color: rgba(34, 34, 34, 0.5);
      border-top: 1px solid rgb(235, 235, 235);
      border-bottom: 1px solid rgb(235, 235, 235);
      min-height: 20px;
      margin: 0;
      .detail_box {
        padding: 0 12px;
        flex-grow: 1;
        flex-shrink: 1;
        dt {
          color: rgba(34, 34, 34, 0.5);
          line-height: 14px;
          font-size: 12px;
        }
        .model_num {
          font-weight: 600;
        }
        dd {
          margin: 0;
          margin-top: 4px;
          font-size: 14px;
          line-height: 17px;
          color: #222;
        }
      }
    }
  }
`;

const ProjectInfoWrap = () => {
  const productDetail = useRecoilValue(productDetailAtom);
  console.log("projectinfoWrap", productDetail);
  return (
    <ProductInfoWrap>
      <InfoTitle class="detail_title" title="상품정보" />
      <div className="detail_product_info_wrap">
        <dl className="detail_product">
          <div className="detail_box">
            <dt>모델번호</dt>
            <dd className="model_num">
              {productDetail.product.product_info.model_code}
            </dd>
          </div>
          <div className="detail_box">
            <dt>출시일</dt>
            <dd>{productDetail.product.product_info.released_date}</dd>
          </div>
          <div className="detail_box">
            <dt>컬러</dt>
            <dd>{productDetail.product.product_info.color}</dd>
          </div>
          <div className="detail_box">
            <dt>발매가</dt>
            <dd>
              {productDetail.product.product_info.released_price.toLocaleString()}
              원
            </dd>
          </div>
        </dl>
      </div>
    </ProductInfoWrap>
  );
};

export default ProjectInfoWrap;
