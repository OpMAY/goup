import React from "react";
import { Tab, Tabs, Box, Button, Typography, Stack } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownFill } from "react-icons/ri";

const PeriodNotice = styled.ul`
  margin: 0;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  padding: 12px 0;
  padding-left: 16px;
`;

const PurchaseBox = styled.div`
  display: flex;
  flex-direction: column;
  .purchase_head {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ebebeb;
    button {
      border: 1px solid #d3d3d3;
      width: 120px;
      font-size: 12px;
      border-radius: 12px;
      background-color: #fff;
      justify-content: left;
      padding: 5px 10px;
      justify-content: space-between;
      color: #222;
      p {
        line-height: 24px;
        margin: 0;
      }
    }
  }
  .status {
    font-size: 13px;
    .wish_price {
      padding-left: 40px;
    }
    .expire {
      padding-left: 40px;
    }
  }

  .purchase_content {
    padding: 80px 0;
    text-align: center;
    p {
      font-size: 13px;
      color: rgba(34, 34, 34, 0.5);
      margin: 0;
      margin-bottom: 20px;
    }
    a {
      text-decoration: none;
      border: 1px solid #d3d3d3;
      font-size: 12px;
      border-radius: 10px;
      background-color: #fff;
      padding: 10px 14px;
      color: #222;
    }
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box>
          <Box sx={{ backgroundColor: "orange" }}> 기간 Box</Box>
          <PeriodNotice>
            <li>한 번에 조회 가능한 기간은 최대 6개월입니다.</li>
            <li>기간별 조회 결과는 입찰일 기준으로 노출됩니다.</li>
          </PeriodNotice>
          <PurchaseBox>
            <div className="purchase_head">
              <Button>
                <p>전체</p>
                <RiArrowDropDownFill size={24}></RiArrowDropDownFill>
              </Button>
              <div className="status">
                <span className="wish_price">구매 희망가</span>
                <span className="expire">만료일</span>
              </div>
            </div>
            <div className="purchase_content">
              <p>구매 입찰 내역이 없습니다.</p>
              <a href="#">SHOP 바로가기</a>
            </div>
          </PurchaseBox>

          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const subText = {
  fontSize: "13px",
  color: "rgba(34,34,34,.5)",
};

const boldText = {
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "24px",
  color: "#222",
};

const headline = {
  fontWeight: "700",
  fontSize: "24px",
  padding: "5px 0 16px",
  lineHeight: "29px",
};

const Buying = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography sx={headline}>구매 내역</Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="basic tabs example">
            <Tab
              label={
                <>
                  <Typography sx={boldText}>0</Typography>
                  <Typography sx={subText}>판매 입찰</Typography>
                </>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <>
                  <Typography sx={boldText}>0</Typography>
                  <Typography sx={subText}>진행 중</Typography>
                </>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <>
                  <Typography sx={boldText}>0</Typography>
                  <Typography sx={subText}>종료</Typography>
                </>
              }
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
};

export default Buying;

//       <Typography sx={{ fontSize: "16px", fontWeight: "700", width: "160px" }}>
// {top}
// </Typography>
// <Typography
//   sx={{ fontSize: "13px", width: "160px", color: "rgba(34,34,34,.5)" }}>
//   {bottom}
// </Typography>
