import React from "react";
import styled from "styled-components";
import { Inner } from "../../common/js/style";
import ColumTop from "./ColumTop";
import ProjectInfoWrap from "./ProjectInfoWrap";
import DetailWraper from "./DetailWraper";
import DeliveryWrap from "./DeliveryWrap";

const InfoSection = styled.div`
  padding: 30px 40px 120px;
  border: 2px solid black;
  flex-direction: column;
  flex: 1;
`;

const LeftImage = styled.div`
  padding-right: 40px;
`;

// Wrap 에 overflow

const RightInfo = styled.div`
  /* a {
    text-decoration: none;
    border-bottom: 2px solid black;
    font-weight: 800;
    margin-bottom: 9px;
    color: black;
  }
  .productName {
    margin-bottom: 4px;
  }

  .ProductKoName {
    font-size: 14px;
    line-height: 17px;
    color: rgba(34, 34, 34, 0.5);
  } */
`;

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
            <LeftImage>1</LeftImage>
          </InfoSection>
          <InfoSection>
            <RightInfo>
              <ColumTop />
              <ProjectInfoWrap />
              <DeliveryWrap />
              <BannerBox>
                <a>
                  <img src="https://ssl.pstatic.net/melona/libs/1432/1432951/13d10eb0c9e6e7bab3d5_20230227190423038.jpg" />
                </a>
              </BannerBox>
              {/* <DetailWraper /> */}
            </RightInfo>
          </InfoSection>
        </div>
      </Inner>
    </>
  );
};

export default DetailInfo;
