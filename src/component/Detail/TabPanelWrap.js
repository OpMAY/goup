import React from "react";
import { TabPanel } from "@mui/lab";
import EmptyOrder from "./EmptyOrder";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DetailMoreBidModal from "../modal/DetailMoreBidModal";

const panelStyle = {
  padding: "0",
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

const TabPanelWrap = ({
  value,
  product,
  text,
  first_title,
  second_title,
  third_title,
}) => {
  const tabCellLoop = () => {
    const newArr = [];
    for (let i = 0; i < 5 - product.length; i++) {
      newArr.push(
        <TableRow
          key={i}
          sx={{
            "&:last-child td, &:last-child th": {
              border: 0,
            },
          }}>
          <TableCell sx={tableCell} align="left">
            -
          </TableCell>
          <TableCell sx={tableCell} align="right">
            -
          </TableCell>
          <TableCell sx={tableCell} align="right">
            -
          </TableCell>
        </TableRow>
      );
    }
    return newArr;
  };

  return (
    <TabPanel value={value} sx={panelStyle}>
      {product.length === 0 ? (
        <EmptyOrder text={text} />
      ) : (
        <>
          <Box>
            <TableContainer
              sx={{ boxShadow: "none", padding: "20px 0" }}
              component={Paper}>
              <Table size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={tableCellHead} align="left">
                      {first_title}
                    </TableCell>
                    <TableCell sx={tableCellHead} align="right">
                      {second_title}
                    </TableCell>
                    <TableCell sx={tableCellHead} align="right">
                      {third_title}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product.length > 5
                    ? product.slice(0, 5).map((item, idx) => (
                        <TableRow
                          key={idx}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}>
                          <TableCell sx={tableCell} component="th" scope="row">
                            {item.size}
                          </TableCell>
                          <TableCell sx={tableCell} align="right">
                            {item.price.toLocaleString()}
                          </TableCell>
                          {third_title === "수량" ? (
                            <TableCell sx={tableCell} align="right">
                              {item.count}
                            </TableCell>
                          ) : (
                            <TableCell sx={tableCell} align="right">
                              {item.reg_datetime.year}/
                              {item.reg_datetime.monthValue}/
                              {item.reg_datetime.dayOfMonth}
                            </TableCell>
                          )}
                        </TableRow>
                      ))
                    : product.map((item, idx) => (
                        <TableRow
                          key={idx}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}>
                          <TableCell sx={tableCell} component="th" scope="row">
                            {item.size}
                          </TableCell>
                          <TableCell sx={tableCell} align="right">
                            {item.price.toLocaleString()}
                          </TableCell>
                          {third_title === "수량" ? (
                            <TableCell sx={tableCell} align="right">
                              {item.count}
                            </TableCell>
                          ) : (
                            <TableCell sx={tableCell} align="right">
                              {item.reg_datetime.year}/
                              {item.reg_datetime.monthValue}/
                              {item.reg_datetime.dayOfMonth}
                            </TableCell>
                          )}
                        </TableRow>
                      ))}
                  {tabCellLoop()}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <DetailMoreBidModal />
        </>
      )}
    </TabPanel>
  );
};

export default TabPanelWrap;
