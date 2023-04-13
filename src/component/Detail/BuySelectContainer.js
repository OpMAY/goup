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

const BuySelectContainer = () => {
  const size = useRecoilValue(sizeAtom);
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const [productPurchase, setProductPurchase] =
    useRecoilState(productPurchaseAtom);
  const [productSell, setProductSell] = useRecoilState(productSellAtom);
  const user = useRecoilValue(userAtom);
  const param = useRecoilValue(paramAtom);

  const handleButton = e => {
    setSizeState(e.target.value);
    console.log(sizeState);
  };

  useEffect(() => {
    axiosGetFunction(
      `/api/kream/product/size/${param}`,
      { user_no: user, is_price: "y", type: "PURCHASE" },
      token,
      setToken
    ).then(res => {
      console.log(res.data.data.sizes);
      setProductSell([]);
      setProductPurchase(res.data.data.sizes);
    });
  }, []);

  return (
    <>
      <SelectContainer>
        <SelectProductItem state="purchase" />
        <Hr margin="20px 0 0;" />
        <Grid container className="size_container">
          <Grid container className="content" sx={{}}>
            {productPurchase.map(size => (
              <Grid key={size.no} item xs={3.75} sx={{ margin: "4px" }}>
                <SizeButton
                  onClick={handleButton}
                  size={size.size}
                  price={size.price}
                  reg_datetime={size.reg_datetime}
                  value={size.size}
                  state="구매 입찰"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Hr margin="0;" />
        {sizeState !== "모든 사이즈" && <OrderButton type="buy_step1" />}
      </SelectContainer>
    </>
  );
};

export default BuySelectContainer;
