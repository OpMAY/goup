import React, { useState } from "react";
import styled from "@emotion/styled";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import InfoTitle from "./InfoTitle";
import MyResponsiveLine from "./MyResponsiveLine";
import dayjs from "dayjs";
import { Box, Tab, Typography, Button } from "@mui/material";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  productDetailAtom,
  userAtom,
  sizeAtom,
  sizeStateAtom,
} from "../../atoms/atom";
import { Link } from "react-router-dom";
import TabPanelWrap from "./TabPanelWrap";

const ProductContainer = styled(Box)`
  position: relative;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      padding-top: 10px;
      .size_select {
        width: 140px;
        border: none;
        .default_option {
        }
      }
    }
  }
  .button_filter {
    color: rgba(34, 34, 34, 0.8);
    cursor: pointer;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border: none;
    padding: 0;
    .list_name {
    }
  }
`;

const panelStyle = {
  padding: "0",
};

const tabListStyle = {
  height: "36px",
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
  minHeight: "28px",
  "& .MuiButtonBase-root": {
    color: "rgba(34,34,34,.8)",
    height: "36px",
    minHeight: "18px",
    "&:select": {
      backgroundColor: "red",
    },
  },
  "& .css-1ujykiq-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    color: "#222",
    fontWeight: 700,
    border: "0px",
    backgroundColor: "#fff",
    height: "28px",
    borderRadius: "8px",
    margin: "4px 2px",
  },
  "& .MuiTabs-fixed": {
    borderRadius: "10px",
  },
  "& .MuiTabs-indicator": {
    height: 0,
    backgroundColor: "none",
  },
};

const boxStyle = {
  backgroundColor: "hsla(0, 0%, 100%, 0.8)",
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const boxInner = {
  backgroundColor: "#fff",
  width: "318px",
  height: "150px",
  border: "1px solid #d3d3d3",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const button = {
  display: "inline-block",
  backgroundColor: "#222",
  color: " #fff",
  fontWeight: 700,
  marginTop: "12px",
  padding: " 8px 20px",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "#222",
  },
};

const ProductGraph = () => {
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const [value, setValue] = useState("1");
  const user = useRecoilValue(userAtom);
  const [listValue, setListValue] = useState("1");
  const product = useRecoilValue(productDetailAtom);
  const size = useRecoilValue(sizeAtom);

  const TABPANEL = [
    {
      value: "1",
      product: product.order_history,
      text: "체결된 거래가",
      first_title: "사이즈",
      second_title: "거래가",
      third_title: "거래일",
    },
    {
      value: "2",
      product: product.sell_history,
      text: "판매 희망가가",
      first_title: "사이즈",
      second_title: "판매 희망가",
      third_title: "수량",
    },
    {
      value: "3",
      product: product.purchase_history,
      text: "구매 희망가가",
      first_title: "사이즈",
      second_title: "구매 희망가",
      third_title: "수량",
    },
  ];

  let now = dayjs();
  const getToday = now.format("YYYY-MM-DD");
  const getMonthAgo = now.subtract(1, "M").format("YYYY-MM-DD");
  const getQuarterAgo = now.subtract(3, "M").format("YYYY-MM-DD");
  const getHalfAgo = now.subtract(6, "M").format("YYYY-MM-DD");
  const getYearAgo = now.subtract(1, "y").format("YYYY-MM-DD");

  function getDatesStartToLast(startDate, lastDate) {
    var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
    if (!(regex.test(startDate) && regex.test(lastDate)))
      return "Not Date Format";
    var result = [];
    var curDate = new Date(startDate);
    while (curDate <= new Date(lastDate)) {
      result.push(curDate.toISOString().split("T")[0]);
      curDate.setDate(curDate.getDate() + 1);
    }
    return result;
  }

  let monthAgoDate = getDatesStartToLast(getMonthAgo, getToday);
  let quarterAgoDate = getDatesStartToLast(getQuarterAgo, getToday);
  let halfDate = getDatesStartToLast(getHalfAgo, getToday);
  let yearDate = getDatesStartToLast(getYearAgo, getToday);

  const handleChange = (event, newValue) => {
    console.log(1, event, newValue);
    setValue(newValue);
  };

  const handleChangeListValue = (event, newValue) => {
    console.log(2, event, newValue);
    setListValue(newValue);
  };

  const handleSize = e => {
    setSizeState(e.target.value);
  };

  return (
    <>
      <ProductContainer>
        <div className="head">
          <InfoTitle title="시세" />
          <span>
            {size !== null && size[0].size === "ONE SIZE" ? "ONE SIZE" : null}
            {size !== null && size.length > 1 ? (
              <select
                value={sizeState !== null ? sizeState : "all"}
                onChange={handleSize}
                name="size"
                className="size_select">
                <option value="all">모든 사이즈</option>
                {size.map(item => {
                  return (
                    <option defaultValue="all" value={item.size} key={item.no}>
                      {item.size}
                    </option>
                  );
                })}
              </select>
            ) : null}
          </span>
        </div>
        {product.price_history.history_all.length === 0 ? null : (
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box>
                <TabList
                  sx={tabListStyle}
                  variant="fullWidth"
                  onChange={handleChange}
                  aria-label="lab API tabs example">
                  <Tab label="1개월" value="1" />
                  <Tab label="3개월" value="2" />
                  <Tab label="6개월" value="3" />
                  <Tab label="1년" value="4" />
                  <Tab label="전체" value="5" />
                </TabList>
              </Box>
              <Box sx={{ height: "200px" }}>
                <TabPanel sx={panelStyle} value="1">
                  <Box sx={{ height: "200px" }}>
                    <MyResponsiveLine
                      data={[
                        {
                          id: "1개월",
                          recent_price: product.recent_order_price,
                          color: "hsl(2, 100%, 53%)",
                          data: monthAgoDate.map((dates, idx) => {
                            let array = product.price_history.history_quarter
                              .map(item => {
                                return dates === item.target_date
                                  ? item.price
                                  : 0;
                              })
                              .filter(item => {
                                return item !== 0;
                              });
                            return {
                              x: dates,
                              y: array.length > 0 ? array[0] : 0,
                            };
                          }),
                        },
                      ]}
                    />
                  </Box>
                </TabPanel>
                <TabPanel sx={panelStyle} value="2">
                  <Box sx={{ height: "200px" }}>
                    <MyResponsiveLine
                      data={[
                        {
                          id: "3개월",
                          recent_price: product.recent_order_price,
                          color: "hsl(2, 100%, 53%)",
                          data: quarterAgoDate.map((dates, idx) => {
                            let array = product.price_history.history_quarter
                              .map(item => {
                                return dates === item.target_date
                                  ? item.price
                                  : 0;
                              })
                              .filter(item => {
                                return item !== 0;
                              });
                            return {
                              x: dates,
                              y: array.length > 0 ? array[0] : 0,
                            };
                          }),
                        },
                      ]}
                    />
                  </Box>
                </TabPanel>
                <TabPanel sx={panelStyle} value="3">
                  <Box sx={{ height: "200px" }}>
                    <MyResponsiveLine
                      data={[
                        {
                          id: "6개월",
                          recent_price: product.recent_order_price,
                          color: "hsl(2, 100%, 53%)",
                          data: halfDate.map((dates, idx) => {
                            let array = product.price_history.history_quarter
                              .map(item => {
                                return dates === item.target_date
                                  ? item.price
                                  : 0;
                              })
                              .filter(item => {
                                return item !== 0;
                              });
                            return {
                              x: dates,
                              y: array.length > 0 ? array[0] : 0,
                            };
                          }),
                        },
                      ]}
                    />
                  </Box>
                </TabPanel>
                <TabPanel sx={panelStyle} value="4">
                  <Box sx={{ height: "200px" }}>
                    <MyResponsiveLine
                      data={[
                        {
                          id: "1년",
                          recent_price: product.recent_order_price,
                          color: "hsl(2, 100%, 53%)",
                          data: yearDate.map((dates, idx) => {
                            let array = product.price_history.history_quarter
                              .map(item => {
                                return dates === item.target_date
                                  ? item.price
                                  : 0;
                              })
                              .filter(item => {
                                return item !== 0;
                              });
                            return {
                              x: dates,
                              y: array.length > 0 ? array[0] : 0,
                            };
                          }),
                        },
                      ]}
                    />
                  </Box>
                </TabPanel>
                <TabPanel sx={panelStyle} value="5">
                  <Box sx={{ height: "200px" }}>
                    <MyResponsiveLine
                      data={[
                        {
                          id: "전체",
                          recent_price: product.recent_order_price,
                          color: "hsl(2, 100%, 53%)",
                          data: getDatesStartToLast(
                            product.price_history.history_all[0]
                              ? product.price_history.history_all[0].target_date
                              : getToday,
                            getToday
                          ).map((dates, idx) => {
                            let array = product.price_history.history_quarter
                              .map(item => {
                                return dates === item.target_date
                                  ? item.price
                                  : 0;
                              })
                              .filter(item => {
                                return item !== 0;
                              });
                            return {
                              x: dates,
                              y: array.length > 0 ? array[0] : 0,
                            };
                          }),
                        },
                      ]}
                    />
                  </Box>
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        )}
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={listValue}>
            <Box>
              <TabList
                sx={tabListStyle}
                variant="fullWidth"
                onChange={handleChangeListValue}
                aria-label="buying list">
                <Tab label="체결 거래" value="1" />
                <Tab label="판매 입찰" value="2" />
                <Tab label="구매 입찰" value="3" />
              </TabList>
            </Box>
            <Box>
              {TABPANEL.map(item => {
                return (
                  <TabPanelWrap
                    key={item.value}
                    value={item.value}
                    product={item.product}
                    text={item.text}
                    first_title={item.first_title}
                    second_title={item.second_title}
                    third_title={item.third_title}
                  />
                );
              })}
            </Box>
          </TabContext>
        </Box>
        {user ? null : (
          <Box sx={boxStyle}>
            <Box sx={boxInner}>
              <Typography
                sx={{
                  fontSize: "14px",
                }}>
                모든 체결 거래는
                <br /> 로그인 후 확인 가능합니다.
              </Typography>
              <Button component={Link} to="/login" sx={button}>
                로그인
              </Button>
            </Box>
          </Box>
        )}
      </ProductContainer>
    </>
  );
};

export default ProductGraph;
