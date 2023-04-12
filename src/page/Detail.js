import React, { useEffect } from "react";
import DetailInfo from "../component/Detail/DetailInfo";
import {useRecoilValue, useRecoilState, useSetRecoilState} from "recoil";
import {
  productDetailAtom,
  paramAtom,
  sizeAtom,
  tokenAtom,
} from "../atoms/atom";
import { axiosGetFunction } from "../module/CustomAxios";

const Detail = () => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [productDetail, setProductDetail] = useRecoilState(productDetailAtom);
  const setParam = useSetRecoilState(paramAtom)

  useEffect(() => {
    setProductDetail(null);
    const lastPath = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    if(lastPath) {
      setParam(lastPath);
      axiosGetFunction(`/api/kream/product/${lastPath}`, {}, token, setToken).then(
          res => {
            console.log(res);
            setProductDetail(res.data.data.product);
          }
      );
    } else {

    }
  }, []);

  return <>{productDetail ? <DetailInfo /> : <h1>상품이 없습니다.</h1>}</>;
};
export default Detail;
