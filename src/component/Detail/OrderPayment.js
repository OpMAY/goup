import React, { useState } from "react";
import styled from "styled-components";
import SelectProductItem from "./SelectProductItem";
import { Hr } from "../../common/js/style";
import { Box, Stack, Typography } from "@mui/material";
// import { RiArrowRightSLine } from "react-icons/ri";
import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import OrderButton from "./OrderButton";

const panelStyle = {
  padding: "0",
};

const tabListStyle = {
  backgroundColor: "#f4f4f4",
  borderRadius: "80px",
  "& button": {
    borderRadius: 50,
    color: "#222",
    fontSize: "14px",
  },

  "& button.Mui-selected": {
    backgroundColor: "#ef6253",
    color: "#fff",
    fontWeight: 700,
    height: "20px",
  },
};

const tabStyle = {
  color: "#fff",
  // padding: "7px 0 9px",
  // height:"36px"
};

// const tableCellHead = {
//   color: "rgba(34,34,34,.5)",
//   padding: "0 0 9px",
//   fontSize: "12px",
// };

// const tableCell = {
//   border: "none",
//   padding: "9px 0 0",
// };

const OrderContainer = styled.div`
  background-color: #fff;
  /* border: 1px solid pink; */
  .wrapper {
    padding: 32px 32px 0;
    /* background-color: yellow; */
  }
  .delivery_box {
    .section_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      h3 {
        font-size: 18px;
        font-weight: 700;
        color: #222;
      }
      p {
        margin: 0;
        font-size: 13px;
        color: rgba(34, 34, 34, 0.5);
      }
    }
    .delivery_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      table {
        tr {
          line-height: 24px;
          th {
            padding: 0;
            padding-right: 24px;
            text-align: left;
            font-size: 13px;
            color: rgba(34, 34, 34, 0.5);
            font-weight: normal;
          }
          td {
            padding: 0;
            font-size: 14px;
          }
        }
      }
      a {
        padding: 0 14px;
        border: 1px solid #d3d3d3;
        color: rgba(34, 34, 34, 0.8);
        font-size: 12px;
        border-radius: 10px;
        height: 34px;
        line-height: 34px;
        text-decoration: none;
      }
    }
    .button_wrap {
      margin-top: 12px;
      button {
        padding: 14px 12px;
        border-radius: 10px;
        box-shadow: none;
        border-color: #ebebeb;
        text-align: left;
        color: rgba(34, 34, 34, 0.3);
        background-color: #fff;
        min-width: min-content;
        span {
          color: #222;
        }
      }
    }
  }
`;

const BoxStyle = {
  textAlign: "center",
  padding: "28px 22px",
  flexGrow: 1,
  // backgroundColor: "green",
  // border: "1px solid red",
  // mx: "32px",
};

const subText = {
  fontSize: "12px",
  color: "rgba(34,34,34,.5)",
};

const PriceInputBox = styled.dl`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #ebebeb;
  /* dt {
    color: "#222";
    font-weight: 700;
    font-size: "14px";
  } */
  span {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 700;
    input {
      max-width: 200px;
      font-size: 24px;
      line-height: 26px;
      cursor: text;
      color: #222;
      border: 0;
      direction: rtl;
      outline: none;
      font-weight: 700;
      ::placeholder {
        font-weight: 700;
        opacity: 0.5;
        font-size: 20px;
      }
    }
  }
`;

const subTitle = {
  color: "#222",
  fontWeight: 700,
  fontSize: "14px",
  pb: "16px",
};

const dateButton = {
  border: "1px solid #d3d3d3",
  color: "inherit",
  width: "124px",
  borderRadius: "12px",
  height: "42px",
  "&:hover": {
    border: "1px solid #d3d3d3",
    // color: "gray",
    backgroundColor: "#ebebeb",
  },
  "&:focus": {
    border: "1px solid #222",
    // color: "gray",
    // backgroundColor: "#ebebeb",
  },
};

const OrderPayment = () => {
  const [value, setValue] = useState("1");
  // const [listValue, setListValue] = useState("1");

  const handleChange = (event, newValue) => {
    console.log(1, event, newValue);
    setValue(newValue);
  };

  // const handleChangeListValue = (event, newValue) => {
  //   console.log(2, event, newValue);
  //   setListValue(newValue);
  // };

  // const handleSize = e => {
  //   console.log(e.target.value);
  //   // setSize(e.target.value);
  // };

  return (
    <OrderContainer>
      <div className="wrapper">
        <SelectProductItem size="290" />
        <Box
          sx={{
            height: "1px",
            width: "100%",
            backgroundColor: "#ebebeb",
            mt: "32px",
          }}></Box>
      </div>
      <Box sx={{ padding: "0 32px 32px" }}>
        <Stack flexDirection="row">
          <Box sx={BoxStyle}>
            <Typography sx={subText}>즉시 구매가</Typography>
            <Typography>189,000원</Typography>
          </Box>
          <Box sx={BoxStyle}>
            <Typography sx={subText}>즉시 판매가</Typography>
            <Typography>-</Typography>
          </Box>
        </Stack>
        <TabContext value={value}>
          {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
          <TabList
            sx={tabListStyle}
            variant="fullWidth"
            TabIndicatorProps={{ hidden: true }}
            onChange={handleChange}
            aria-label="lab API tabs example">
            <Tab sx={tabStyle} label="구매 입찰" value="1" />
            <Tab sx={tabStyle} label="즉시 구매" value="2" />
          </TabList>
          {/* </Box> */}
          <Box>
            <TabPanel sx={panelStyle} value="1">
              <Box>
                <Box>
                  <PriceInputBox>
                    <Typography sx={subTitle}>구매 희망가</Typography>
                    <span>
                      <input
                        placeholder="희망가 입력"
                        required
                        autoComplete="off"
                      />
                      원
                    </span>
                  </PriceInputBox>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(34,34,34,.5)",
                      paddingTop: "4px",
                    }}>
                    총 결제금액은 다음 화면에서 계산됩니다.
                  </Typography>
                </Box>
                <Box sx={{ backgroundColor: "#fff" }}>
                  <Stack direction="column" sx={{ py: "32px" }}>
                    <Typography sx={subTitle}>입찰 마감기한</Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      1일(2022,22,22 마감)
                    </Typography>
                    <Stack
                      sx={{ mt: "7px" }}
                      direction="row"
                      justifyContent="space-between">
                      {/* <ButtonGroup
                      fullWidth
                      size="large"
                      aria-label="outlined primary button group"> */}
                      <Button sx={dateButton}>1일</Button>
                      {/* <Box sx={{ paddingX: 2 }} /> */}
                      <Button sx={dateButton}>3일</Button>
                      {/* <Box sx={{ paddingX: 2 }} /> */}
                      <Button sx={dateButton}>7일</Button>
                      {/* <Box sx={{ paddingX: 2 }} /> */}
                      <Button sx={dateButton}>30일</Button>
                      {/* <Box sx={{ paddingX: 2 }} /> */}
                      <Button sx={dateButton}>60일</Button>
                      {/* </ButtonGroup> */}
                    </Stack>
                  </Stack>
                </Box>
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={subTitle}>총 결제금액</Typography>
                  <Typography
                    sx={{ fontSize: "16px", color: "rgba(34,34,34,.5)" }}>
                    다음 화면에서 확인
                  </Typography>
                </Stack>
                <OrderButton type="buy_step3" />
              </Box>
            </TabPanel>
            <TabPanel value="2" sx={panelStyle}>
              <Box>
                <Box>
                  <PriceInputBox>
                    <Typography sx={subTitle}>즉시 구매가</Typography>
                    <span>121,111 원</span>
                  </PriceInputBox>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(34,34,34,.5)",
                      paddingTop: "4px",
                    }}>
                    총 결제금액은 다음 화면에서 계산됩니다.
                  </Typography>
                </Box>
                <Hr margin="32px 0 16px" />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={subTitle}>총 결제금액</Typography>
                  <Typography
                    sx={{ fontSize: "16px", color: "rgba(34,34,34,.5)" }}>
                    다음 화면에서 확인
                  </Typography>
                </Stack>
                <OrderButton type="buy_step4" />
              </Box>
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
      {/* <>
        <div className="delivery_box">
          <div className="section_title">
            <h3>배송 주소</h3>
            <p>+ 새 주소 추가</p>
          </div>
          <div className="delivery_info">
            <table>
              <tr>
                <th>받는 분</th>
                <td>이우영</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>01012341234</td>
              </tr>
              <tr>
                <th>배송 주소</th>
                <td>서울 강남구 ㅇㅇㅇ ㅇㅇㅇ동</td>
              </tr>
            </table>
            <a href="3">변경</a>
          </div>
          <div className="button_wrap">
            <button>배송 시 요청사항을 선택하세요.</button>
          </div>
        </div>
        <div className="point_box"></div>
        <div className="final_info_box"></div>
        <div className="payment_box"></div>
        <div className="check_box"></div>
      </> */}
    </OrderContainer>
  );
};

export default OrderPayment;
