import React, { useEffect } from "react";
import DetailInfo from "../component/Detail/DetailInfo";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { productAtom, sizeAtom, tokenAtom } from "../atoms/atom";
import { axiosGetFunction } from "../module/CustomAxios";

const Detail = () => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [product, setProduct] = useRecoilState(productAtom);
  const [size, setSize] = useRecoilState(sizeAtom);

  useEffect(() => {
    console.log(555, token);
    axiosGetFunction(
      "/api/kream/product/1",
      {
        cursor: 2,
      },
      token,
      setToken
    ).then(res => {
      setProduct(null);
      setProduct(res.data.data.product);
    });
  }, []);

  useEffect(() => {
    console.log(555, token);
    axiosGetFunction(
      "/api/kream/product/size/1",
      {
        cursor: 2,
      },
      token,
      setToken
    ).then(res => {
      console.log("sizes->", res.data.data.sizes);
      setSize(null);
      setSize(res.data.data.sizes);
    });
  }, []);

  return <>{product !== null && <DetailInfo size={size}/>}</>;
};
export default Detail;
