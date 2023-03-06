import React from "react";
import styled from "styled-components";
import MyResponsiveLine from "./MyResponsiveLine";
// import MyResponsiveLine from "./MyResponsiveLine";

const ProductContainer = styled.div`
  height: 300px;
`;

const ProductGraph = () => (
  <ProductContainer>
    <MyResponsiveLine />
  </ProductContainer>
);

export default ProductGraph;
