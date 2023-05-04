import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { axiosGetFunction } from "../../../module/CustomAxios";
import { useRecoilState, useRecoilValue } from "recoil";
import { tokenAtom, userAccountAtom, userAtom } from "../../../atoms/atom";

const Block = styled.div`
  width: 50%;
  .title {
    font-size: 24px;
    margin: 0 0 25px;
    color: #000;
    font-weight: bold;
  }
  .account_box {
    padding: 15px 16px;
    border-radius: 10px;
    border: 1px solid #ebebeb;
    background-color: #fafafa;
    .sub_title {
      font-size: 12px;
      margin-top: 0;
      margin-bottom: 5px;
      color: #222;
    }
    .account_info {
      font-size: 15px;
      margin: 0;
      color: #222;
      .account_num {
        &::after {
          display: inline;
          content: "/";
          margin: 0 4px;
        }
      }
    }
  }
  .account_input {
    padding-top: 20px;
    .input_box {
      padding: 16px 0 14px;
      .input_title {
        margin: 0;
      }
      .input_style {
        width: 100%;
        border: 0;
        border-bottom: 1px solid #ccc;
        padding: 16.5px 32px 16.5px 14px;
        font-size: 15px;
        &:focus {
          outline: none;
          border-bottom: 1px solid #000;
        }
      }
    }
  }
  fieldset {
    border: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    &:focus-visible {
      outline: none;
    }
  }
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = [
  "신한은행",
  "국민은행",
  "IBK기업은행",
  "카카오뱅크",
  "하나은행",
  "우리은행",
  "부산은행",
  "농협은행",
  "대구은행",
];

const Account = () => {
  const [personName, setPersonName] = useState("");
  const user = useRecoilValue(userAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const [userAccount, setUserAccount] = useRecoilState(userAccountAtom);

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0,0);
    axiosGetFunction(`/api/kream/my/account/` + 1, {}, token, setToken).then(
      res => {
        setUserAccount(res.data.data.accountInfo);
      }
    );
  }, []);

  return (
    <>
      <Block>
        <h3 className="title">정산 계좌 정보</h3>
        <div className="account_box">
          <h4 className="sub_title">등록된 계좌</h4>
          <p className="account_info">
            <span className="account_num">카카오 2222222222222222</span>
            <span className="name">윤현호</span>
          </p>
        </div>
        <div className="account_input">
          <div className="input_box">
            <h4 className="input_title">형태</h4>
            <FormControl fullWidth>
              <Select
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem disabled value="">
                  <label>미선택</label>
                </MenuItem>
                {names.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="input_box">
            <h4 className="input_title">계좌번호</h4>
            <input
              className="input_style"
              type="text"
              placeholder="- 없이 입력하세요."></input>
          </div>
          <div className="input_box">
            <h4 className="input_title">예금주</h4>
            <input
              className="input_style"
              type="text"
              placeholder="예금주명을 정확히 입력하세요."></input>
          </div>
        </div>
      </Block>
    </>
  );
};

export default Account;
