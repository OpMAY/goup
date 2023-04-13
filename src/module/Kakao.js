import React, { useEffect } from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {tokenAtom, userAtom} from "../atoms/atom";
import {axiosGetFunction, axiosPostFunction} from "./CustomAxios";

const Kakao = () => {
  let url = new URL(window.location.href);
  let params = url.searchParams;
  let code = params.get("code");

    const setUser = useSetRecoilState(userAtom);
    const [token, setToken] = useRecoilState(tokenAtom);

    useEffect(() => {
        axiosGetFunction('/api/oauth/callback?code=' + code, {}, token, setToken).then((res) => {
            console.log(res.data);
            if (res.data.status === 'OK') {
                if (res.data.data.success) {
                    const user = res.data.data.user;
                    // TODO 유저 데이터 내부 세팅
                    // TODO 로그인 세팅
                    // TODO 기존 페이지로 리다이렉트
                    if (user !== null && user !== undefined) {
                        const id = user.id;
                        const login_type = '카카오';
                        const data = {};
                        data.access_token = id;
                        data.login_type = login_type;
                        data.profile_img = user.profile_img;
                        data.name = user.name;
                        data.email = user.email;
                        axiosPostFunction('/api/kream/my/join', data, false, token, setToken).then((res) => {
                            console.log('join : ', res);
                            if (res.data.status === 'OK') {
                                setUser(res.data.data.user.no);
                                window.location.href = '/';
                            }
                        })
                    }
                }
            }
        })
    }, []);

  return '';
};

export default Kakao;
