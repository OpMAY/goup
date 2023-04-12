import React from "react";
import styled from "styled-components";
import { Checkbox } from "@mui/material";

const CheckAreaBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
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

const CheckArea = ({ title, content, no }) => {

  return (
    <CheckAreaBox>
      <div>
        <p className="main_text">{title}</p>
        {content ? <p className="sub_text">{content}</p> : null}
      </div>
      <Checkbox
        value={no}
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
