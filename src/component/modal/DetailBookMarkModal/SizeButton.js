import React from "react";
import styled from "@emotion/styled";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

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
  border: 1px solid #d3d3d3;
  cursor: pointer;
  p {
    margin: 0;
  }
  .top {
    font-size: 14px;
  }
  .bottom{
    width: 16px;
    height: 16px;
  }
`;
const SizeButton = ({ size }) => {
  return (
    <Button>
      <p className="top">{size}</p>
      <span className="bottom">
        <BsBookmark size={16}></BsBookmark>
        {/* <BsBookmarkFill size={16}></BsBookmarkFill> */}
      </span>
    </Button>
  );
};

export default SizeButton;
