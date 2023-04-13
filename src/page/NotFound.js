import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: calc(100vh - 105px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image_container {
    height: "400px";
    background-size: "contain";
    background-position: "center";
    background-repeat: "no-repeat";
    background-image: "/images/not_found";
  }
  .text_field {
    text-align: center;
    h3 {
    }
    p {
      margin: 0;
      font-size: 13px;
      color: rgba(34, 34, 34, 0.6);
      line-height: 21px;
    }
  }
`;

const NotFound = () => {
  return (
    <Container>
      <div className="image_container">
        <img src="/images/not_found.png" alt="not_found_page" />
      </div>
      <div className="text_field">
        <h2>찾을 수 없는 페이지입니다.</h2>
        <p>
          주소가 올바르지 않거나 알 수 없는 오류로 인해
          <br />
          페이지를 찾을 수 없습니다.
        </p>
      </div>
    </Container>
  );
};

export default NotFound;
