import React from "react";
import styled from "styled-components";
import SelectProductItem from "./SelectProductItem";
import { Hr } from "../../common/js/style";
import { Button } from "@mui/material";
import { RiArrowRightSLine } from "react-icons/ri";

const OrderContainer = styled.div`
  border: 1px solid pink;
  .wrapper {
    padding: 32px;
  }
  .delivery_box {
    .section_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      h3 {
        font-size: 18px;
        font-weight: 700;
        color: #222;
      }
      p {
        margin: 0;
        font-size: 13px;
        color: rgba(34, 34, 34, 0.5);
      }
    }
    .delivery_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      table {
        tr {
          line-height: 24px;
          th {
            padding: 0;
            padding-right: 24px;
            text-align: left;
            font-size: 13px;
            color: rgba(34, 34, 34, 0.5);
            font-weight: normal;
          }
          td {
            padding: 0;
            font-size: 14px;
          }
        }
      }
      a {
        padding: 0 14px;
        border: 1px solid #d3d3d3;
        color: rgba(34, 34, 34, 0.8);
        font-size: 12px;
        border-radius: 10px;
        height: 34px;
        line-height: 34px;
        text-decoration: none;
      }
    }
    .button_wrap{
      margin-top: 12px;
      button{
        padding: 14px 12px;
        border-radius: 10px;
        box-shadow: none;
        border-color: #ebebeb;
        text-align: left;
        color: rgba(34, 34, 34, 0.3);
        background-color: #fff;
        min-width: min-content;
        span{
          color: #222;
        }
      }
    }
  }
`;

const OrderPayment = () => {
  return (
    <OrderContainer>
      <div className="wrapper">
        <SelectProductItem size="290" />
      </div>
      <div className="delivery_box">
        <div className="section_title">
          <h3>배송 주소</h3>
          <p>+ 새 주소 추가</p>
        </div>
        <div className="delivery_info">
          <table>
            <tr>
              <th>받는 분</th>
              <td>이우영</td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>01012341234</td>
            </tr>
            <tr>
              <th>배송 주소</th>
              <td>서울 강남구 ㅇㅇㅇ ㅇㅇㅇ동</td>
            </tr>
          </table>
          <a href="3">변경</a>
        </div>
        <div className="button_wrap">
          <button>배송 시 요청사항을 선택하세요.</button>
        </div>
      </div>
      <div className="point_box"></div>
      <div className="final_info_box"></div>
      <div className="payment_box"></div>
      <div className="check_box"></div>
    </OrderContainer>
  );
};

export default OrderPayment;
