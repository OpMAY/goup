import React from 'react';
import axios from "axios";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {userAtom} from "../atoms/atom";

const Kakao = () => {
    let url = new URL(window.location.href);
    let params = url.searchParams;
    let code = params.get('code');
    console.log(code);

    const [user, setUser] = useRecoilState(userAtom);


    axios.get('http://localhost:8080/api/oauth/callback?code=' + code, {}).then((res) => {
        console.log(res.data);
        if (res.data.status === 'OK') {
            if (res.data.data.success) {
                const user = res.data.data.user;
                // TODO 유저 데이터 내부 세팅
                // TODO 로그인 세팅
                // TODO 기존 페이지로 리다이렉트
                if (user !== null && user !== undefined) {
                    alert('로그인 성공');
                    setUser(user);
                    // window.location.href = '/';
                }
            }
        }
    });
    return (
        <div>
            oauth call page
        </div>
    );
};

export default Kakao;