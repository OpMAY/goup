import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import InfoTitle from "./InfoTitle";
import { RiArrowDownSLine } from "react-icons/ri";
import MultipleSelect from "./MultiSizeSelect";
import MyResponsiveLine from "./MyResponsiveLine";

const ProductContainer = styled.div`
  height: 300px;
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

const ProductGraph = () => {
  const [value, setValue] = useState("1");
  const [size, setSize] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSize = e => {
    console.log(e.target.value);
    setSize(e.target.value);
  };

  return (
    <ProductContainer>
      <MyResponsiveLine />
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
          <TabPanel value="1">
            {size}
            <MyResponsiveLine />
          </TabPanel>
          <TabPanel value="2">{size}333333Ite</TabPanel>
          <TabPanel value="3">{size}33333333Item Three</TabPanel>
          <TabPanel value="4">{size}2222Item Two</TabPanel>
          <TabPanel value="5">{size}33333333Item Three</TabPanel>
        </TabContext>
      </Box>
    </ProductContainer>
  );
};

export default ProductGraph;

const SIZE_OPTION = [240, 245, 250, 255, 260];
