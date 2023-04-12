import React from "react";
import styled from "styled-components";
import { BsQuestionCircle } from "react-icons/bs";
// import { delivery_1, delivery_2 } from "../../../public/images";

const DeliveryWay = styled.div`
  padding: 12px 0 18px;
  color: #222;
  position: relative;
  &:before {
    left: 56px;
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    ${props =>
      props.before ? "border-top: 1px solid #f0f0f0;" : "border-top: none;"}
  }
  .way_info {
    display: flex;
    align-items: center;
    .way_status {
      margin-right: 14px;
      height: 40px;
      width: 40px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .way_desc {
      flex-grow: 1;
      flex-shrink: 1;
      font-size: 14px;
      .company {
        margin: 0;
        .badge_title {
          font-weight: 600;
        }
      }
      .sub_text {
        margin: 0;
        margin-top: 3px;
        color: rgba(34, 34, 34, 0.5);
        line-height: 16px;
      }
    }
  }
`;

const DeliveryWayWrap = styled.div`
  color: #333;
  h3 {
    color: rgb(34, 34, 34, 0.8);
    font-size: 14px;
    margin: 0;
    line-height: 17px;
    padding-top: 40px;
    font-weight: 400;
  }
`;

const DeliveryWrap = () => {
  return (
    <DeliveryWayWrap>
      <h3>배송 정보</h3>
      <DeliveryWay>
        <div className="way_info">
          <div className="way_status">
            <img src="/images/delivery_1.png" alt="일반배송" />
          </div>
          <div className="way_desc">
            <p className="company">
              <span className="badge_title">일반배송 </span>
              <span className="title">3,000원</span>
            </p>
            <p className="sub_text">검수 후 배송 ・ 5-7일 내 도착 예정</p>
          </div>
        </div>
      </DeliveryWay>
      <DeliveryWay before>
        <div className="way_info">
          <div className="way_status">
            <img src="/images/delivery_2.png" alt="창고보관" />
          </div>
          <div className="way_desc">
            <p className="company">
              <span className="badge_title">창고보관 </span>
              <span className="title">첫 30일 무료</span>
              <BsQuestionCircle>아이콘</BsQuestionCircle>
            </p>
            <p className="sub_text">
              배송 없이 창고에 보관 ・ 빠르게 판매 가능
            </p>
          </div>
        </div>
      </DeliveryWay>
    </DeliveryWayWrap>
  );
};

export default DeliveryWrap;
