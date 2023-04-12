import React from "react";
import styled from "styled-components";

const DeliveryWay = styled.div`
  &:focus {
    border: 1px solid black;
  }
  padding: 12px 0 18px;
  color: #222;
  position: relative;
  border: ${props => props.order ? "1px solid #222;" : null}
  border-radius: ${props => props.order ? "10px;" : null}
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
    padding-left: ${props => props.order ? "15px;" : null}
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
        .title{
          margin-left:4px;
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

const DeliveryIconBox = ({order, title, side, sub}) => {
  return (
    <DeliveryWay order={order}>
      <div className="way_info">
        <div className="way_status">
          <img src="/images/delivery_1.png" alt="일반배송" />
        </div>
        <div className="way_desc">
          <p className="company">
            <span className="badge_title">{title}</span>
            <span className="title">{side}</span>
            {/* <span>아이콘</span> */}
          </p>
          <p className="sub_text">{sub}</p>
        </div>
      </div>
    </DeliveryWay>
  );
};

export default DeliveryIconBox;
