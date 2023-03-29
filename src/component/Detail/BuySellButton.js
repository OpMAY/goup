import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { paramAtom, userAtom } from "../../atoms/atom";
import BtnDivision from "./BtnDivision";

const BuySellButtonContainer = styled.div`
  display: flex;
  margin-top: 17px;
  box-sizing: border-box;
  height: 60px;
  gap: 10px;
`;

const BuySellButton = () => {
  const user = useRecoilValue(userAtom);
  const param = useRecoilValue(paramAtom);

  return (
    <BuySellButtonContainer>
      <BtnDivision
        link={user ? `/buy/select/${param}?size=` : "/login"}
        title="구매"
        price="112,123"
        background="rgb(239, 98, 83)"
      />
      <BtnDivision
        link={user ? `/sell/select/${param}?size=` : "/login"}
        title="판매"
        price="112,123"
        background="rgb(65, 185, 121)"
      />
    </BuySellButtonContainer>
  );
};

export default BuySellButton;
