import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { productSellAtom, sizeStateAtom } from "../../../atoms/atom";
import { Button, Box } from "@mui/material";

// const Button = styled.button`
//   &:focus {
//     border: 1px solid #222;
//   }
//   text-align: center;
//   height: 50px;
//   color: #222;
//   width: 100%;
//   background-color: #fff;
//   border-radius: 10px;
//   border: 1px solid #ebebeb;
//   cursor: pointer;
//   p {
//     margin: 0;
//   }
//   .top {
//     font-size: 14px;
//   }
//   .pending {
//     color: inherit;
//   }
// `;

const button = {
  textAlign: "center",
  height: "50px",
  color: "#222",
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "10px",
  border: "1px solid #ebebeb",
};

const SizeButton = ({ onClick, size, reg_datetime, price, value, state }) => {
  const sizeState = useRecoilValue(sizeStateAtom);

  return (
    <Button
      sx={button}
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
