import React from "react";
import styled from "styled-components";
import BuySelectContainer from "./BuySelectContainer";
import BuyCheckContainer from "./BuyCheckContainer";
import OrderPayment from "./OrderPayment";
import SellSelectContainer from "./SellSelectContainer";
import SellCheckContainer from "./SellCheckContainer";
import SellOrderPayment from "./SellOrderPayment";
import Header from "../Header";
import { useRecoilValue } from "recoil";
import { orderToggleAtom } from "../../atoms/atom";

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  .box {
    margin: 20px 0 160px;
    width: 700px;
    padding: 32px;
    background-color: #fff;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
  }
  .box_2 {
    margin-top: 20px;
    width: 780px;
    padding: 20px 40px 160px;
  }
`;

const Select = ({ path }) => {
  const orderPageState = useRecoilValue(orderToggleAtom);

  const titleName = (path, orderPageState) => {
    if (path === "purchase_select") {
      return "구매하기";
    } else if (path === "sell_select") {
      return "판매하기";
    } else if (path === "purchase_check") {
      return "구매 동의";
    } else if (path === "sell_check") {
      return "판매 동의";
    } else if (path === "purchase_order") {
      return orderPageState === "1" ? "구매 입찰하기" : "즉시 구매하기";
    } else if (path === "sell_order") {
      return orderPageState === "1" ? "판매 입찰하기" : "즉시 판매하기";
    }
  };

  console.log(path);

  return (
    <>
      <Header title={titleName(path, orderPageState)} />
      <Container>
        {path === "purchase_select" && (
          <div className="box">
            <BuySelectContainer />
          </div>
        )}
        {path === "sell_select" && (
          <div className="box">
            <SellSelectContainer />
          </div>
        )}
        {path === "purchase_check" && (
          <div className="box">
            <BuyCheckContainer />
          </div>
        )}
        {path === "sell_check" && (
          <div className="box">
            <SellCheckContainer />
          </div>
        )}
        {path === "purchase_order" && (
          <div className="box_2">
            <OrderPayment />
          </div>
        )}
        {path === "sell_order" && (
          <div className="box_2">
            <SellOrderPayment />
          </div>
        )}
      </Container>
    </>
  );
};

export default Select;
