import React from "react";
import styled from "styled-components";

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding: 40px 0 13px;
  margin: 0;
`;

const InfoTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default InfoTitle;
