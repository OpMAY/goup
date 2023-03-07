import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { SiNaver, SiKakao } from "react-icons/si";

const LoginButton = styled.button`
  display: flex;
  border-radius: 10px;
  border: 1px solid #ebebeb;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 52px;
  background-color: #fff;
  position: relative;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  .button_icon {
    width: 22px;
    position: absolute;
    left: 15px;
    top: 13px;
    .naver_icon {
      color: #2db400;
    }
  }
`;

const LoginButtonBox = ({ name }) => {
  return (
    <LoginButton>
      <div className="button_icon" name>
        {name === "카카오" && <SiKakao size={24} />}
        {name === "다음으" && <FcGoogle size={24} />}
        {name === "네이버" && (
          <div className="naver_icon">
            <SiNaver size={24} />
          </div>
        )}
      </div>
      {name}로 로그인
    </LoginButton>
  );
};

export default LoginButtonBox;
