import React from "react";
import styled from "styled-components";

const ProjectInfoWrap = () => {
  const ProductInfoWrap = styled.div`
    h3 {
      font-size: 18px;
      font-weight: 700;
      padding: 40px 0 13px;
      margin: 0;
    }
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

  return (
    <ProductInfoWrap>
      <h3 className="info_title">상품정보</h3>
      <div className="detail_product_info_wrap">
        <dl className="detail_product">
          <div className="detail_box">
            <dt>모델번호</dt>
            <dd>SSLF12333</dd>
          </div>
          <div className="detail_box">
            <dt>출시일</dt>
            <dd>23/11/22</dd>
          </div>
          <div className="detail_box">
            <dt>컬러</dt>
            <dd>INDIGO WASH</dd>
          </div>
          <div className="detail_box">
            <dt>발매가</dt>
            <dd>330,000원</dd>
          </div>
        </dl>
      </div>
    </ProductInfoWrap>
  );
};

export default ProjectInfoWrap;
