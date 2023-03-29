import React from "react";
import styled from "styled-components";
import BuySelectContainer from "./BuySelectContainer";
import BuyCheckContainer from "./BuyCheckContainer";
import OrderPayment from "./OrderPayment";

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
    /* background-color: #fff; */
    /* border: 1px solid green; */
  }
`;

const BuySelect = ({ path }) => {
  console.log(path);
  return (
    <Container>
      {path === "select" && (
        <div className="box">
          <BuySelectContainer />
        </div>
      )}
      {path === "check" && (
        <div className="box">
          <BuyCheckContainer />
        </div>
      )}
      {path === "order" && (
        <div className="box_2">
          <OrderPayment />
        </div>
      )}
    </Container>
  );
};

export default BuySelect;
