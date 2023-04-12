import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import BookmarkItem from "./BookmarkItem";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  productDetailAtom,
  userAtom,
  // sizeStateAtom,
} from "../../../atoms/atom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const tabListStyle = {
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
};
const tabStyle = {
  padding: "0px",
};

const tableCellHead = {
  color: "rgba(34,34,34,.5)",
  padding: "0",
  fontSize: "12px",
};

const tableCell = {
  border: "none",
  padding: "5px 0",
  lineHeight: "17px",
  // "&>*:nth-child(2)": { fontWeight: 700 },
};

const DetailMoreBidModal = () => {
  const [value, setValue] = useState("1");
  const [getUser, setUser] = useRecoilState(userAtom);
  const [open, setOpen] = useState(false);
  const product = useRecoilValue(productDetailAtom);
  // const sizeState = useRecoilValue(sizeStateAtom);

  const handleChange = (event, newValue) => {
    console.log(1, event, newValue);
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const header = {
    borderTopRadius: "16px",
  };

  const text = {
    height: "60px",
    fontSize: "18px",
    fontWeight: 700,
    padding: "20px 50px",
    textAlign: "center",
  };

  const style = {
    borderRadius: "16px",
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 480,
    boxShadow: 24,
  };

  const panelStyle = {
    padding: "0",
    height: "320px",
    // overflowY: product.order_history.length > 10 ? "scroll" : "none",
  };

  const MoreButton = styled(Link)`
    text-decoration: none;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #d3d3d3;
    padding: 0 25px;
    color: rgba(34, 34, 34, 0.8);
    display: flex;
    line-height: 42px;
    font-size: 14px;
    justify-content: center;
    .btn_text {
      box-sizing: border-box;
      text-align: center;
    }
    .wish_count {
      font-weight: 600;
    }
  `;
  //
  return (
    <div>
      <MoreButton
        to={getUser ? "#" : "/login"}
        className="btn_wish"
        onClick={handleClickOpen}>
        <span className="btn_text">입찰 내역 더보기</span>
      </MoreButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box className="close_button">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: theme => theme.palette.grey[500],
              }}>
              <TfiClose size={24}></TfiClose>
            </IconButton>
          </Box>
          <Box sx={header} className="header">
            <Typography sx={text}>시세</Typography>
          </Box>
          <BookmarkItem sizeExist="true" />
          <Box
            sx={{
              margin: "8px 28px 32px",
              height: "373px",
              // overflowX: "hidden",
            }}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box>
                  <TabList
                    sx={tabListStyle}
                    variant="fullWidth"
                    onChange={handleChange}
                    aria-label="buying list">
                    <Tab sx={tabStyle} label="체결 거래" value="1" />
                    <Tab sx={tabStyle} label="판매 입찰" value="2" />
                    <Tab sx={tabStyle} label="구매 입찰" value="3" />
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
                            {product.order_history.map((item, idx) => (
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
                                  {item.price}
                                </TableCell>
                                <TableCell sx={tableCell} align="right">
                                  {item.reg_datetime.year}/
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
                            {product.sell_history.map((item, idx) => (
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
                                  {item.price}
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
                        sx={{
                          boxShadow: "none",
                          padding: "20px 0",
                        }}
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
                            {product.sell_history.map((item, idx) => (
                              <TableRow key={idx}>
                                <TableCell
                                  sx={tableCell}
                                  component="th"
                                  scope="row">
                                  {item.size}
                                </TableCell>
                                <TableCell sx={tableCell} align="right">
                                  {item.price}
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
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DetailMoreBidModal;
