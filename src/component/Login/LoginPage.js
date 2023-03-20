import React from "react";
import styled from "styled-components";
import { Inner } from "../../common/js/style";
import LoginButtonBox from "./LoginButtonBox";
import { Stack } from "@mui/material";
import {useRecoilState, useRecoilValue} from "recoil";
import {userAtom} from "../../atoms/atom";

const LogoContainer = styled.div`
  margin-bottom: 40px;
  img {
    width: 250px;
    height: 56px;
  }
`;

const LoginPage = () => {
    const user = useRecoilValue(userAtom);
    console.log(user);
  return (
    <Inner padding="0 40px;">
      <Stack
        className="login_container"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        padding="60px 0 160px"
        marginX="400px">
        <LogoContainer>
          <img
            alt="logo_image"
            src="https://kream.co.kr/_nuxt/img/login_title.9f9ccc8.png"
          />
        </LogoContainer>
        <Stack direction="column" spacing={1}>
          <LoginButtonBox name="카카오" color="orange"/>
          <LoginButtonBox name="네이버" color="green"/>
          <LoginButtonBox name="구글" color="blue"/>
        </Stack>
      </Stack>
      ;
    </Inner>
  );
};

export default LoginPage;
