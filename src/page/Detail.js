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
import NotFound from "./NotFound";
import Layout from "../component/Layout";

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

  return <Layout>{productDetail ? <DetailInfo /> : <></>}</Layout>;
};
export default Detail;
