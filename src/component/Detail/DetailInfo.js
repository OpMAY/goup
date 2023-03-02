import React from "react";
import styled from "styled-components";
import { Inner } from "../../common/js/style";
import ColumTop from "./ColumTop";
import ProjectInfoWrap from "./ProjectInfoWrap";
import DetailWraper from "./DetailWraper";
import DeliveryWrap from "./DeliveryWrap";
import { BsArrowRight } from "react-icons/bs";

const InfoSection = styled.div`
  flex-direction: column;
  flex: 1;
  ${props => (props.padding ? "padding-left: 39.5px;" : "padding-right: 39.5px;")}
  ${props => props.divider && "border-left: 1px solid #ebebeb;"}
  .product_image {
    background-color: yellow;
  }
`;

// Wrap 에 overflow

const BannerBox = styled.div`
  margin-top: 20px;
  a {
    background-color: rgb(39, 39, 39);
    display: flex;

    height: 80px;
    justify-content: center;
    img {
    }
  }
`;

const LeftInfo = styled.div`
  .product_image_container {
    .product_image {
      background-repeat: no-repeat;
      background-size: contain;
      height: 560px;
      background-color: transparent;
      background-image: url("https://shopping-phinf.pstatic.net/main_3319750/33197507754.20221017111653.jpg?type=f640");
    }
  }
  .alert_box {
    display: flex;
    align-items: center;
    padding: 12px;
    margin-top: 20px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgb(0 0 0 / 12%);
    .content {
      font-size: 12px;
      .title {
        display: flex;
        span {
          background-color: #ff8824;
          color: #fff;
          line-height: 12px;
          font-weight: 600;
          margin-right: 4px;
          padding: 3px 5px 2px;
          border-radius: 2px;
        }
        p {
          margin: 0;
          font-size: 13px;
          font-weight: 600;
        }
      }
      .detail {
        margin-top: 4px;
        color: rgba(34, 34, 34, 0.5);
      }
    }
    .arrow_icon {
      margin-left: auto;
      width: 25px;
      height: 21px;
    }
  }
`;

const DetailInfo = () => {
  return (
    <>
      <Inner padding="30px 40px 120px;">
        <div
          style={{
            display: "flex",
            direction: "row",
          }}>
          <InfoSection>
            <LeftInfo>
              <div className="product_image_container">
                <div className="product_image"></div>
                <div />
              </div>
              <div className="alert_box">
                <div className="content">
                  <div className="title">
                    <span>주의</span>
                    <p>판매 거래 주의사항</p>
                  </div>
                  <div className="detail">반드시 보유한 상품만 판매하세요.</div>
                </div>
                <span className="arrow_icon">
                  <BsArrowRight size={25}></BsArrowRight>
                </span>
              </div>
            </LeftInfo>
          </InfoSection>
          <InfoSection divider padding>
            <div>
              <ColumTop />
              <ProjectInfoWrap />
              <DeliveryWrap />
              <BannerBox>
                <a href="?">
                  <img
                    src="https://ssl.pstatic.net/melona/libs/1432/1432951/13d10eb0c9e6e7bab3d5_20230227190423038.jpg"
                    alt="`banner_image"
                  />
                </a>
              </BannerBox>
              <DetailWraper />
            </div>
          </InfoSection>
        </div>
      </Inner>
    </>
  );
};

export default DetailInfo;
