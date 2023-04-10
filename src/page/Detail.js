import React, { useEffect } from "react";
import DetailInfo from "../component/Detail/DetailInfo";
import { useRecoilValue, useRecoilState } from "recoil";
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
  const param = useRecoilValue(paramAtom);

  useEffect(() => {
    setProductDetail(null);
    console.log(`${param}`);
    axiosGetFunction(`/api/kream/product/${param}`, {}, token, setToken).then(
      res => {
        console.log(res);
        setProductDetail(res.data.data.product);
      }
    );
  }, []);

  return <>{productDetail ? <DetailInfo /> : <h1>상품이 없습니다.</h1>}</>;
};
export default Detail;
