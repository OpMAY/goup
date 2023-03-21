import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
&:focus{
  border: 1px solid #222;
}
  text-align: center;
  height: 50px;
  color: #222;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid rgba(34, 34, 34, 0.4);
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
const SizeButton = ({ onClick ,size}) => {

  return (
    <Button onClick={onClick}>
      <p className="top">{size}</p>
      {true ? (
        <p className="bottom price">210,000</p>
      ) : (
        <p className="bottom pending">구매입찰</p>
      )}
    </Button>
  );
};

export default SizeButton;
