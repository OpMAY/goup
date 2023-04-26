import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const BuyButton = styled.span`
  display: flex;
  flex-direction: column;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  list-style-type: none;
  margin: 4px;
  padding: 10px;
  cursor: pointer;

  p {
    margin: 0;
    text-align: center;
    color: #222;
  }
  .size {
    font-size: 14px;
  }
  .price_status {
    font-size: 12px;
    margin-top: 1px;
  }
  .fulfilled {
    color: #f15746;
  }
`;

const BuySelectButton = () => {
  return (
    <Grid item xs={3.84}>
      <BuyButton>
        <p className="size">220</p>
        <p className="price_status pending">구매입찰</p>
        {/* <p className="price_status fulfilled">111,100</p> */}
      </BuyButton>
    </Grid>
  );
};

export default BuySelectButton;
