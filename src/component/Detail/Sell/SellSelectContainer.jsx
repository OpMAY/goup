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

const SellSelectContainer = () => {
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const setPriceState = useSetRecoilState(priceStateAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const user = useRecoilValue(userAtom);
  const param = useRecoilValue(paramAtom);
  const [productSell, setProductSell] = useRecoilState(productSellAtom);
  const setProductPurchase = useSetRecoilState(productPurchaseAtom);
  const setCheck = useSetRecoilState(checkAtom);

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

  const checkInit = () => {
    const c = [];
    for (let i = 0; i < 5; i++) {
      c.push(false);
    }
    setCheck(c);
  };

  useEffect(() => {
    setCheck([]);
    axiosGetFunction(
      `/api/kream/product/size/${param}`,
      { user_no: user, is_price: "y", type: "SELL" },
      token,
      setToken
    ).then(res => {
      setProductPurchase([]);
      setProductSell(res.data.data.sizes);
    });
  }, []);

  return (
    <SelectContainer>
      <SelectProductItem state="sell" />
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
                no={size.no}
                isSell={true}
                state="판매 입찰"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      {sizeState !== null && <Hr margin="0 0 20px 0;" />}
      {/* <OrderButton type="sell_step1" /> */}
      {sizeState !== null && (
        <OrderButton type="sell_step1" onClick={checkInit} />
      )}
    </SelectContainer>
  );
};

export default SellSelectContainer;
