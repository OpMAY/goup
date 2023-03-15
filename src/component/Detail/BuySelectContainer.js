import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Hr } from "../../common/js/style";
import BuySelectButton from "./BuySelectButton";
import SelectProductItem from "./SelectProductItem";
import OrderButton from "./OrderButton";

const SelectContainer = styled.div`
  .size_container {
    list-style: none;
    padding: 20px 0;
  }
`;

const BuySelectContainer = () => {
  return (
    <SelectContainer>
      <SelectProductItem />
      <Hr margin="0;" />
      <Grid container className="size_container">
        <BuySelectButton />
        <BuySelectButton />
        <BuySelectButton />
        <BuySelectButton />
        <BuySelectButton />
      </Grid>
      <Hr margin="0;" />
      {/* 사이즈 클릭하면 버튼 OrderButton visible */}
      <OrderButton type="buy_step1" />
    </SelectContainer>
  );
};

export default BuySelectContainer;
