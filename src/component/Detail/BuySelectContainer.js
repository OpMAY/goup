import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Hr } from "../../common/js/style";
import SelectProductItem from "./SelectProductItem";
import OrderButton from "./OrderButton";
import { useRecoilValue, useRecoilState } from "recoil";
import { productDetailAtom, sizeAtom, sizeStateAtom } from "../../atoms/atom";
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

  const handleButton = e => {
    setSizeState(e.target.value);
  };
  return (
    <SelectContainer>
      <SelectProductItem />
      <Hr margin="20px 0 0;" />
      <Grid container className="size_container">
        <Grid container className="content" sx={{}}>
          {size.map(size => (
            <Grid key={size.no} item xs={3.75} sx={{ margin: "4px" }}>
              <SizeButton
                onClick={handleButton}
                size={size.size}
                price={size.price}
                reg_datetime={size.reg_datetime}
                value={size.size}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Hr margin="0;" />
      {sizeState !== "모든 사이즈" && <OrderButton type="buy_step1" />}
    </SelectContainer>
  );
};

export default BuySelectContainer;
