import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { productSellAtom, sizeStateAtom } from "../../../atoms/atom";
import { Button, Box } from "@mui/material";

const button = {
  textAlign: "center",
  height: "50px",
  color: "#222",
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "10px",
  border: "1px solid #ebebeb",
};

const redButton = {
  textAlign: "center",
  height: "50px",
  color: "#f15746",
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "10px",
  border: "1px solid #ebebeb",
};

const SizeButton = ({ onClick, size, reg_datetime, price, value, state, red }) => {
  const sizeState = useRecoilValue(sizeStateAtom);

  return (
    <Button
      sx={red ? redButton : button}
      autoFocus={sizeState === size ? true : false}
      onClick={onClick}
      value={value}>
      {size}
      <br />
      {price ? price : state}
    </Button>
  );
};

export default SizeButton;
