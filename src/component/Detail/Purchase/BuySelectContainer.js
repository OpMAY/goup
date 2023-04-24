import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Hr } from "../../../common/js/style";
import SelectProductItem from "../SelectProductItem";
import OrderButton from "../OrderButton";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  productDetailAtom,
  sizeAtom,
  sizeStateAtom,
  tokenAtom,
  userAtom,
  paramAtom,
  productSellAtom,
  productPurchaseAtom,
  checkAtom,
  priceStateAtom,
} from "../../../atoms/atom";
import { axiosGetFunction } from "../../../module/CustomAxios";
import SizeButton from "../../modal/DetailSizeModal/SizeButton";

const SelectContainer = styled.div`
  .size_container {
    list-style: none;
    padding: 20px 0;
    align-items: flex-start;
    min-height: 488px;
  }
`;

const BuySelectContainer = () => {
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const [productPurchase, setProductPurchase] =
    useRecoilState(productPurchaseAtom);
  const setProductSell = useSetRecoilState(productSellAtom);
  const user = useRecoilValue(userAtom);
  const param = useRecoilValue(paramAtom);
  const setCheck = useSetRecoilState(checkAtom);
  const setPriceState = useSetRecoilState(priceStateAtom);

  const handleButton = e => {
    const clicked = e.target;
    let priceH4;
    if (clicked.tagName === "BUTTON") {
      priceH4 = e.target.querySelector("h4");
      setSizeState({ size: clicked.value, no: clicked.getAttribute("no") });
    } else if (clicked.tagName === "H4") {
      priceH4 = e.target;
      const btn = clicked.closest("button");
      setSizeState({ size: btn.value, no: btn.getAttribute("no") });
    }
    if (priceH4.classList.contains("_price")) {
      setPriceState(priceH4.textContent);
    } else {
      setPriceState(null);
    }
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

  const checkInit = () => {
    const c = [];
    for (let i = 0; i < 4; i++) {
      c.push(false);
    }
    setCheck(c);
  };

  return (
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
                no={size.no}
                state="구매 입찰"
                isSell={false}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      {sizeState !== null && <Hr margin="0 0 20px 0;" />}
      {sizeState !== null && (
        <OrderButton type="buy_step1" onClick={checkInit} />
      )}
    </SelectContainer>
  );
};

export default BuySelectContainer;
