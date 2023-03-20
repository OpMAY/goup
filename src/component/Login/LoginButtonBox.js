import React from "react";
import styled from "styled-components";
import {FcGoogle} from "react-icons/fc";
import {SiNaver, SiKakao} from "react-icons/si";
import Kakao from "../../module/Kakao";
import axios from "axios";

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

const LoginButtonBox = ({name}) => {
    return (
        <LoginButton onClick={() => doLogin(name)}>
            <div className="button_icon">
                {name === "카카오" && <SiKakao size={24}/>}
                {name === "구글" && <FcGoogle size={24}/>}
                {name === "네이버" && (
                    <div className="naver_icon">
                        <SiNaver size={24}/>
                    </div>
                )}
            </div>
            {name}로 로그인
        </LoginButton>
    );
};

const doLogin = (name) => {
    switch (name) {
        case '카카오' :
            console.log('kakao');
            axios.post('http://localhost:8080/api/sns/key/kakao', {}).then((res) => {
                const data = res.data;
                if (data.status === 'OK') {
                    const clientId = data.data.key;
                    const redirectURI = 'http://localhost:3000/oauth';
                    window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirectURI + '&response_type=code'
                }
            })
            break;
        case '구글' :
            console.log('google');
            break;
        case '네이버' :
            console.log('naver');
            break;
        default:
            break;
    }
}

export default LoginButtonBox;
