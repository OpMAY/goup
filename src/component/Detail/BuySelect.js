import React from "react";
import styled from "styled-components";
import BuySelectContainer from "./BuySelectContainer";
import BuyCheckContainer from "./BuyCheckContainer";
import OrderPayment from "./OrderPayment";

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  .box {
    margin: 20px 0 160px;
    width: 700px;
    padding: 32px;
    background-color: #fff;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
  }
  .box_2{
    margin: 20px 0 160px;
    width: 700px;
    padding: 32px;
    background-color: #fff;
  }
`;

const BuySelect = ({ path }) => {
  console.log(path);
  return (
    <Container>
      {/* <div className="box"> */}
      {/* </div> */}
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
      {/* {path === "check" && <BuyCheckContainer />} */}
      {/* {path === "order" && <OrderPayment />} */}
    </Container>
  );
};

export default BuySelect;
