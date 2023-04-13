import React from "react";
import { Tab, Stack, Tabs, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownFill } from "react-icons/ri";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
import BuySellFilterModal from "../../modal/BuySellFilterModal";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

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
    .state_button {
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

function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}
const dateButton = {
  backgroundColor: "#fff",
  color: "rgba(34,34,34,.8)",
  fontSize: "13px",
  padding: "2px 4px",
  boxShadow: "none",
  border: "1px solid #ebebeb",
  borderRadius: "0",
  "&:hover": { backgroundColor: "#fff", boxShadow: "none" },
};

const checkButton = {
  backgroundColor: "#222",
  color: "#fff",
  fontSize: "13px",
  padding: "2px 4px",
  boxShadow: "none",
  border: "1px solid #ebebeb",
  borderRadius: "0",
  "&:hover": { backgroundColor: "#222", boxShadow: "none" },
};

const picker = {
  "& .MuiInputBase-root": {},
  "& .MuiInputBase-input": {
    width: "82px",
    fontSize: "13px",
    color: "rgba(34,34,34,.8)",
    padding: "8px 0 4px 8px",
    borderColor: "#ebebeb",
  },
};

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
          <Stack
            gap={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "14px 0" }}>
            <Stack direction="row" gap={0.5}>
              <Button sx={dateButton} variant="contained">
                최근 2개월
              </Button>
              <Button sx={dateButton} variant="contained">
                4개월
              </Button>
              <Button sx={dateButton} variant="contained">
                6개월
              </Button>
            </Stack>
            <Stack direction="row">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker sx={picker} defaultValue={dayjs(getToday())} />
                ~
                <DatePicker sx={picker} defaultValue={dayjs(getToday())} />
              </LocalizationProvider>
              <Button sx={checkButton} variant="contained">
                조회
              </Button>
            </Stack>
          </Stack>
          <PeriodNotice>
            <li>한 번에 조회 가능한 기간은 최대 6개월입니다.</li>
            <li>기간별 조회 결과는 입찰일 기준으로 노출됩니다.</li>
          </PeriodNotice>
          {value === 0 && (
            <PurchaseBox className="changed_box">
              <div className="purchase_head">
                <BuySellFilterModal className="modal_button" arr={OPTION_1} />
                <div className="status">
                  <Button className="state_button" endIcon={<UnfoldMoreIcon />}>
                    판매 희망가
                  </Button>
                  <Button className="state_button" endIcon={<UnfoldMoreIcon />}>
                    만료일
                  </Button>
                </div>
              </div>
              <div className="purchase_content">
                <p>판매 입찰 내역이 없습니다.</p>
                <Link to="/shop">SHOP 바로가기</Link>
              </div>
            </PurchaseBox>
          )}
          {value === 1 && (
            <PurchaseBox className="changed_box">
              <div className="purchase_head">
                <BuySellFilterModal className="modal_button" arr={OPTION_2} />
                <div className="status">
                  <Button className="state_button" endIcon={<UnfoldMoreIcon />}>
                    상태
                  </Button>
                </div>
              </div>
              <div className="purchase_content">
                <p>판매 입찰 내역이 없습니다.</p>
                <Link to="/shop">SHOP 바로가기</Link>
              </div>
            </PurchaseBox>
          )}
          {value === 2 && (
            <PurchaseBox className="changed_box">
              <div className="purchase_head">
                <BuySellFilterModal className="modal_button" arr={OPTION_3} />
                <div className="status">
                  <Button className="state_button" endIcon={<UnfoldMoreIcon />}>
                    정산일
                  </Button>
                  <Button className="state_button" endIcon={<UnfoldMoreIcon />}>
                    상태
                  </Button>
                </div>
              </div>
              <div className="purchase_content">
                <p>판매 입찰 내역이 없습니다.</p>
                <Link to="/shop">SHOP 바로가기</Link>
              </div>
            </PurchaseBox>
          )}

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
const boldText2 = {
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "24px",
  color: "#f15746",
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
      <Typography sx={headline}>판매 내역</Typography>
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
                  <Typography sx={boldText2}>0</Typography>
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
        <TabPanel value={value} index={0} />
        <TabPanel value={value} index={1} />
        <TabPanel value={value} index={2} />
      </Box>
    </>
  );
};

export default Buying;

const OPTION_1 = ["전체", "입찰중", "기한만료"];
const OPTION_2 = ["전체", "발송요청", "발송완료"];
const OPTION_3 = ["전체", "정산완료"];
