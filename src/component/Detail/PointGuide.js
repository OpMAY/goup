import React from "react";
import styled from "styled-components";

const PointGuideContainer = styled.div`
  padding-top: 40px;
`;

const GuideBox = styled.div`
  display: flex;
  margin-top: ${props => (props.margin ? "20px" : "0")};
  .icon_section {
    min-width: 40px;
    height: 36px;
    background-color: orange;
    margin-right: 14px;
    border: 1px solid gray;
  }
  .content_section {
    font-size: 13px;
    display: flex;
    flex-direction: column;
    .title {
      font-weight: 600;
    }
    .content {
      color: rgba(34, 34, 34, 0.5);
    }
  }
`;

const PointGuide = () => {
  return (
    <PointGuideContainer>
      <GuideBox>
        <span className="icon_section"></span>
        <div className="content_section">
          <div className="title">100% 정품 보증</div>
          <div className="content">
            KREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.
          </div>
        </div>
      </GuideBox>
      <GuideBox margin>
        <span className="icon_section"></span>
        <div className="content_section">
          <div className="title">엄격한 다중 검수</div>
          <div className="content">
            모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인
            시스템을 거쳐 검수를 진행합니다.
          </div>
        </div>
      </GuideBox>
      <GuideBox margin>
        <span className="icon_section"></span>
        <div className="content_section">
          <div className="title">정품 인증 패키지</div>
          <div className="content">
            검수에 합격한 경우에 한하여 KREAM의 정품 인증 패키지가 포함된 상품이
            배송됩니다.
          </div>
        </div>
      </GuideBox>
    </PointGuideContainer>
  );
};

export default PointGuide;
