import React, { useState } from "react";
import styled from "@emotion/styled";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import InfoTitle from "./InfoTitle";
import MyResponsiveLine from "./MyResponsiveLine";
import {
  Box,
  Tab,
  Typography,
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DetailMoreBidModal from "../modal/DetailMoreBidModal";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  productDetailAtom,
  userAtom,
  sizeAtom,
  sizeStateAtom,
} from "../../atoms/atom";
import { Link } from "react-router-dom";

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
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
};


const tableCellHead = {
  color: "rgba(34,34,34,.5)",
  padding: "0 0 9px",
  fontSize: "12px",
};

const tableCell = {
  border: "none",
  padding: "9px 0 0",
};

const ProductGraph = () => {
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const [value, setValue] = useState("1");
  const user = useRecoilValue(userAtom);
  const [listValue, setListValue] = useState("1");
  const product = useRecoilValue(productDetailAtom);
  const size = useRecoilValue(sizeAtom);
  console.log(88, size);

  function getToday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  }

  function getMonthAgo() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + date.getMonth()).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }

  function getThreeMonthAgo() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() - 2)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }

  let monthDate = getDatesStartToLast(getMonthAgo(), getToday()); // 한 달치 날짜 보여줌 // 임시!~~~~~~~~
  let quarterDate = getDatesStartToLast("2023-01-01", getToday()); // 한 달치 날짜 보여줌 // 임시!~~~~~~~~
  let halfDate = getDatesStartToLast("2022-10-01", getToday()); // 한 달치 날짜 보여줌 // 임시!~~~~~~~~
  let yearDate = getDatesStartToLast("2022-04-01", getToday()); // 한 달치 날짜 보여줌 // 임시!~~~~~~~~
  let allDate = getDatesStartToLast("2022-04-01", getToday()); // 한 달치 날짜 보여줌 // 임시!~~~~~~~~

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
            <select onChange={handleSize} name="size" className="size_select">
              <option className="default_option" value="all" defaultValue>
                {sizeState ? sizeState.size : "모든 사이즈"}
              </option>
              {size &&
                size[0].size !== "ONE SIZE" &&
                size.map((item, id) => (
                  <option key={id} value={item.size}>
                    {item.size !== null ? item.size : "모든 사이즈"}
                  </option>
                ))}
            </select>
          </span>
        </div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
              {/* 1 */}
              <TabPanel sx={panelStyle} value="1">
                <Box sx={{ height: "200px" }}>
                  <MyResponsiveLine
                    data={[
                      {
                        id: "1개월",
                        recent_price: product.recent_order_price,
                        color: "hsl(2, 100%, 53%)",
                        data: monthDate.map((dates, idx) => {
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
              {/* 3 */}
              <TabPanel sx={panelStyle} value="2">
                <Box sx={{ height: "200px" }}>
                  <MyResponsiveLine
                    data={[
                      {
                        id: "3개월",
                        recent_price: product.recent_order_price,
                        color: "hsl(2, 100%, 53%)",
                        data: quarterDate.map((dates, idx) => {
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
              {/* 6 */}
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
              {/* 1년 */}
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
              {/* all */}
              <TabPanel sx={panelStyle} value="5">
                <Box sx={{ height: "200px" }}>
                  <MyResponsiveLine
                    data={[
                      {
                        id: "전체",
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
            </Box>
          </TabContext>
        </Box>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={listValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
              <TabPanel value="1" sx={panelStyle}>
                <Box>
                  <TableContainer
                    sx={{ boxShadow: "none", padding: "20px 0" }}
                    component={Paper}>
                    <Table size="small" aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={tableCellHead} align="left">
                            사이즈
                          </TableCell>
                          <TableCell sx={tableCellHead} align="right">
                            거래가
                          </TableCell>
                          <TableCell sx={tableCellHead} align="right">
                            거래일
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {product.order_history.slice(0, 5).map((item, idx) => (
                          <TableRow
                            key={idx}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}>
                            <TableCell
                              sx={tableCell}
                              component="th"
                              scope="row">
                              {item.size}
                            </TableCell>
                            <TableCell sx={tableCell} align="right">
                              {item.price.toLocaleString()}
                            </TableCell>
                            <TableCell sx={tableCell} align="right">
                              {item.reg_datetime.year}/{" "}
                              {item.reg_datetime.monthValue}/
                              {item.reg_datetime.dayOfMonth}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </TabPanel>
              <TabPanel value="2" sx={panelStyle}>
                <Box>
                  <TableContainer
                    sx={{ boxShadow: "none", padding: "20px 0" }}
                    component={Paper}>
                    <Table size="small" aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={tableCellHead} align="left">
                            사이즈
                          </TableCell>
                          <TableCell sx={tableCellHead} align="right">
                            판매 희망가
                          </TableCell>
                          <TableCell sx={tableCellHead} align="right">
                            수량
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {product.sell_history.slice(0, 5).map((item, idx) => (
                          <TableRow
                            key={idx}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}>
                            <TableCell
                              sx={tableCell}
                              component="th"
                              scope="row">
                              {item.size}
                            </TableCell>
                            <TableCell sx={tableCell} align="right">
                              {item.price.toLocaleString()}
                            </TableCell>
                            <TableCell sx={tableCell} align="right">
                              {item.count}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </TabPanel>
              <TabPanel value="3" sx={panelStyle}>
                <Box>
                  <TableContainer
                    sx={{ boxShadow: "none", padding: "20px 0" }}
                    component={Paper}>
                    <Table size="small" aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={tableCellHead} align="left">
                            사이즈
                          </TableCell>
                          <TableCell sx={tableCellHead} align="right">
                            구매 희망가
                          </TableCell>
                          <TableCell sx={tableCellHead} align="right">
                            수량
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {product.purchase_history
                          .slice(0, 5)
                          .map((item, idx) => (
                            <TableRow key={idx}>
                              <TableCell
                                sx={tableCell}
                                component="th"
                                scope="row">
                                {item.size}
                              </TableCell>
                              <TableCell sx={tableCell} align="right">
                                {item.price.toLocaleString()}
                              </TableCell>
                              <TableCell sx={tableCell} align="right">
                                {item.count}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </TabPanel>
            </Box>
          </TabContext>
        </Box>
        <DetailMoreBidModal />
        {user ? null : <Box
          sx={{
            backgroundColor: "hsla(0, 0%, 100%, 0.8)",
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "318px",
              height: "150px",
              border: "1px solid #d3d3d3",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <Typography
              sx={{
                fontSize: "14px",
              }}>
              모든 체결 거래는
              <br /> 로그인 후 확인 가능합니다.
            </Typography>
            <Button
              component={Link}
              to="/login"
              sx={{
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
              }}>
              로그인
            </Button>
          </Box>
        </Box>}
      </ProductContainer>
    </>
  );
};

export default ProductGraph;
