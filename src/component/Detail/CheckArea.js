import React from "react";
import styled from "styled-components";
import { Checkbox } from "@mui/material";
import CheckingModal from "../modal/CheckingModal";
import {useRecoilState, useRecoilValue} from "recoil";
import {checkAtom} from "../../atoms/atom";

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
    const [check, setCheck] = useRecoilState(checkAtom);

    const handleCheck = (e) => {
        const o = [...check];
        o[e.target.value] = e.target.checked;
        setCheck(o);
    }

  return (
    <CheckAreaBox>
      <div>
        <p className="main_text">{title}</p>
        {content ? <p className="sub_text">{content}</p> : null}
      </div>
        {
            no === 0 ? <CheckingModal /> : <Checkbox
                value={no}
                checked={check[no]}
                sx={{
                    "& .MuiSvgIcon-root": { fontSize: 28 },
                    color: "#ebebeb",
                    "&.Mui-checked": {
                        color: "black",
                    },
                }}
                onClick={handleCheck}
            />
        }
    </CheckAreaBox>
  );
};

export default CheckArea;
