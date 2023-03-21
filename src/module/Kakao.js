import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom } from "../atoms/atom";

const Kakao = () => {
  let url = new URL(window.location.href);
  let params = url.searchParams;
  let code = params.get("code");
  console.log(code);
<<<<<<< HEAD
  const [getUser, setUser] = useRecoilState(userAtom);

  console.log(getUser);
=======

  const [getUser, setUser] = useRecoilState(userAtom);
>>>>>>> d2bf019 (충돌 해결)

  useEffect(() => {
    axios
      .get("http://3.35.219.16/api/oauth/callback?code=" + code, {})
      .then(res => {
        console.log(res.data);
        if (res.data.status === "OK") {
          if (res.data.data.success) {
            const user = res.data.data.user;
            // TODO 유저 데이터 내부 세팅
            // TODO 로그인 세팅
            // TODO 기존 페이지로 리다이렉트
            if (user !== null && user !== undefined) {
              const id = user.id;
              const login_type = "카카오";
              const data = {};
              data.access_token = id;
              data.login_type = login_type;
              data.profile_img = user.profile_img;
              data.name = user.name;
<<<<<<< HEAD
              data.email = user.email;
              data.id = user.id;
=======
>>>>>>> d2bf019 (충돌 해결)
              axios
                .post("http://3.35.219.16/api/kream/my/join", data, {})
                .then(res => {
                  console.log("join : ", res);
                  if (res.data.status === "OK") {
                    setUser(res.data.data.user.no);
                    window.location.href = "/";
                  }
                });
<<<<<<< HEAD
              console.log(user);
=======
>>>>>>> d2bf019 (충돌 해결)
            }
          }
        }
      });
  }, []);

  return <div>oauth call page</div>;
};

export default Kakao;
