import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Hr } from "../../common/js/style";
import SelectProductItem from "./SelectProductItem";
import OrderButton from "./OrderButton";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  productDetailAtom,
  sizeAtom,
  sizeStateAtom,
  tokenAtom,
  userAtom,
  paramAtom,
  productSellAtom,
  productPurchaseAtom,
} from "../../atoms/atom";
import { axiosGetFunction } from "../../module/CustomAxios";
import SizeButton from "../modal/DetailSizeModal/SizeButton";

const SelectContainer = styled.div`
  .size_container {
    list-style: none;
    padding: 20px 0;
  }
`;

const SellSelectContainer = () => {
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const user = useRecoilValue(userAtom);
  const param = useRecoilValue(paramAtom);
  const [productSell, setProductSell] = useRecoilState(productSellAtom);
  const [productPurchase, setProductPurchase] = useRecoilState(productPurchaseAtom);

  const handleButton = e => {
    console.log('sell 버튼 누름~~~~',e);
    setSizeState(e.target.value);
  };


  useEffect(() => {
    axiosGetFunction(
      `/api/kream/product/size/${param}`,
      { user_no: user, is_price: "y", type: "SELL" },
      token,
      setToken
    ).then(res => {
      console.log('SELL',res.data.data.sizes);
      setProductPurchase([])
      setProductSell(res.data.data.sizes);
    });
  }, []);


  console.log("0000",productPurchase, productSell) 
  return (
    <SelectContainer>
      <SelectProductItem state="sell"/>
      <Hr margin="20px 0 0;" />
      <Grid container className="size_container">
        <Grid container className="content" sx={{}}>
          {productSell.map(size => (
            <Grid key={size.no} item xs={3.75} sx={{ margin: "4px" }}>
              <SizeButton
                onClick={handleButton}
                size={size.size}
                price={size.price}
                reg_datetime={size.reg_datetime}
                value={size.size}
                state="판매 입찰"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Hr margin="0;" />
      {/* <OrderButton type="sell_step1" /> */}
      {sizeState !== "모든 사이즈" && <OrderButton type="sell_step1" />}
    </SelectContainer>
  );
};

export default SellSelectContainer;
