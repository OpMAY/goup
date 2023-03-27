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
  const [size, setSize] = useRecoilState(sizeAtom);
  const param = useRecoilValue(paramAtom);

  useEffect(() => {
    setProductDetail(null);
    axiosGetFunction(
      `/api/kream/product/${param}`,
      {
        cursor: 2,
      },
      token,
      setToken
      ).then(res => {
        setProductDetail(res.data.data.product);
      });
    }, []);

  useEffect(() => {
    axiosGetFunction(
      `/api/kream/product/size/${param}`,
      {
        cursor: 2,
      },
      token,
      setToken
    ).then(res => {
      setSize(null);
      setSize(res.data.data.sizes);
    });
  }, []);

  return (
    <>
      {productDetail ? <DetailInfo size={size} /> : <h1>상품이 없습니다.</h1>}
    </>
  );
};
export default Detail;
