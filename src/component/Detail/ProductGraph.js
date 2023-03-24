import React, { useState } from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import InfoTitle from "./InfoTitle";
import MyResponsiveLine from "./MyResponsiveLine";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DetailMoreBidModal from "../modal/DetailMoreBidModal";

const ProductContainer = styled(Box)`
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      padding-top: 10px;
      .size-select {
        width: 140px;
        border: none;
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
  // height: "36px",
};
const tabStyle = {
  // padding: "7px 0 9px",
  // height:"36px"
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbr22d", 356, 16.0, 49, 3.9),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbrssead", 356, 16.0, 49, 3.9),
  createData("Gingsserbr22d", 356, 16.0, 49, 3.9),
  createData("Cupcdffake", 305, 3.7, 67, 4.3),
  createData("Gingesfsdfrbread", 356, 16.0, 49, 3.9),
  createData("Gingersdfsdbr22d", 356, 16.0, 49, 3.9),
];

const ProductGraph = () => {
  const [value, setValue] = useState("1");
  const [listValue, setListValue] = useState("1");
  const [size, setSize] = useState("");

  const handleChange = (event, newValue) => {
    console.log(1, event, newValue);
    setValue(newValue);
  };

  const handleChangeListValue = (event, newValue) => {
    console.log(2, event, newValue);
    setListValue(newValue);
  };

  const handleSize = e => {
    console.log(e.target.value);
    setSize(e.target.value);
  };

  return (
    <ProductContainer>
      {/* <MyResponsiveLine /> */}
      <div className="head">
        <InfoTitle title="시세" />
        <span>
          <select onChange={handleSize} name="size" className="size-select">
            <option value="all" defaultValue>
              모든 사이즈
            </option>
            {SIZE_OPTION.map((itemSize, id) => (
              <option key={id} value={itemSize}>
                {itemSize}
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
              <Tab sx={tabStyle} label="1개월" value="1" />
              <Tab sx={tabStyle} label="3개월" value="2" />
              <Tab sx={tabStyle} label="6개월" value="3" />
              <Tab sx={tabStyle} label="1년" value="4" />
              <Tab sx={tabStyle} label="전체" value="5" />
            </TabList>
          </Box>
          <Box sx={{ height: "200px" }}>
            <TabPanel sx={panelStyle} value="1">
              <Box sx={{ height: "200px" }}>
                <MyResponsiveLine />
              </Box>
            </TabPanel>
            <TabPanel value="2" sx={panelStyle}>
              <Box sx={{ height: "200px" }}>
                <MyResponsiveLine />
              </Box>
            </TabPanel>
            <TabPanel value="3" sx={panelStyle}>
              <Box sx={{ height: "200px" }}>
                <MyResponsiveLine />
              </Box>
            </TabPanel>
            <TabPanel value="4" sx={panelStyle}>
              <Box sx={{ height: "200px" }}>
                <MyResponsiveLine />
              </Box>
            </TabPanel>
            <TabPanel value="5" sx={panelStyle}>
              <Box sx={{ height: "200px" }}>
                <MyResponsiveLine />
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
                      {rows.slice(0,5).map(row => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}>
                          <TableCell sx={tableCell} component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell sx={tableCell} align="right">
                            {row.calories}
                          </TableCell>
                          <TableCell sx={tableCell} align="right">
                            {row.fat}
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
                          거래일
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.slice(0,5).map(row => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}>
                          <TableCell sx={tableCell} component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell sx={tableCell} align="right">
                            {row.calories}
                          </TableCell>
                          <TableCell sx={tableCell} align="right">
                            {row.fat}
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
                          거래일
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.slice(0,5).map(row => (
                        <TableRow key={row.name}>
                          <TableCell sx={tableCell} component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell sx={tableCell} align="right">
                            {row.calories}
                          </TableCell>
                          <TableCell sx={tableCell} align="right">
                            {row.fat}
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
    </ProductContainer>
  );
};

export default ProductGraph;

const SIZE_OPTION = [240, 245, 250, 255, 260];
