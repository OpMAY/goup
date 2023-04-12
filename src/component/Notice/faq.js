import React from "react";
import { Tab, Tabs, Grid, Box, Button, Typography, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Faq = () => {
  const gridItem = {
    border: "1px solid #ebebeb",
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container className="size_container">
          <Grid item xs={4} sx={gridItem}>
            1
          </Grid>
          <Grid item xs={4} sx={gridItem}>
            1
          </Grid>
          <Grid item xs={4} sx={gridItem}>
            1
          </Grid>
          <Grid item xs={4} sx={gridItem}>
            1
          </Grid>
          <Grid item xs={4} sx={gridItem}>
            1
          </Grid>
          <Grid item xs={4} sx={gridItem}>
            1
          </Grid>
        </Grid>
        {/* <TableContainer >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{height:"75px"}}>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ebebeb" }} align="center">
                  전체
                </TableCell>
                <TableCell sx={{ border: "1px solid #ebebeb" }} align="center">
                  이용정책
                </TableCell>
                <TableCell sx={{ border: "1px solid #ebebeb" }} align="center">
                  공통
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{height:"75px"}}>
              <TableRow>
                <TableCell
                  sx={{ border: "1px solid #ebebeb" }}
                  align="center"
                  component="th"
                  scope="row">
                  구매
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid #ebebeb" }}
                  align="center"
                  component="th"
                  scope="row">
                  판매
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer> */}
      </Box>
    </>
  );
};

export default Faq;
