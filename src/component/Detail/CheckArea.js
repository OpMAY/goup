import React from "react";
import styled from "styled-components";
import { Checkbox } from "@mui/material";

const CheckAreaBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  div {
    p {
      margin: 0;
    }
    .main_text {
      color: #222;
      font-size: 15px;
      line-height: 18px;
    }
    .sub_text {
      margin-top: 4px;
      color: rgba(34, 34, 34, 0.5);
      font-size: 13px;
      line-height: 16px;
    }
  }
  span {
  }
`;

const CheckArea = () => {
  return (
    <CheckAreaBox>
      <div>
        <p className="main_text">구매하려는 상품이 맞습니다.</p>
        <p className="sub_text">
          상품 이미지, 모델번호, 출시일, 상품명, 사이즈를 한 번 더 확인했습니다.
        </p>
      </div>
      <Checkbox
        // {clicked}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 28 },
          color: "#ebebeb",
          "&.Mui-checked": {
            color: "black",
          },
        }}
      />
    </CheckAreaBox>
  );
};

export default CheckArea;
