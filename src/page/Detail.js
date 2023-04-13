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
import NotFound from "./NotFound";
import Layout from "../component/Layout";

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

  return <Layout>{productDetail ? <DetailInfo /> : <NotFound />}</Layout>;
};
export default Detail;
