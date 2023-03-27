import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { sizeStateAtom } from "../../../atoms/atom";

const Button = styled.button`
  &:focus {
    border: 1px solid #222;
  }
  text-align: center;
  height: 50px;
  color: #222;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ebebeb;
  cursor: pointer;
  p {
    margin: 0;
  }
  .top {
    font-size: 14px;
  }
  .price {
    font-size: 12px;
    color: #f15746;
  }
  .pending {
    color: inherit;
  }
`;
const SizeButton = ({ onClick, size, reg_datetime, price, value }) => {
  const sizeState = useRecoilValue(sizeStateAtom);
  return (
    <Button
      autoFocus={sizeState === size ? true : false}
      onClick={onClick}
      value={value}>
      {size}
      <br />
      {price ? <span className="price">{price}</span> : "구매입찰"}
    </Button>
  );
};

export default SizeButton;
