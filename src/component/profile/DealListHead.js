import React from "react";
import { Stack, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const GridItem = styled(Stack)`
  text-align: center;
  padding-top: 18px;
  height: 96px;
  .title {
    font-size: 13px;
    color: rgba(34, 34, 34, 0.8);
  }
  .content {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    margin-top: 2px;
  }
  a {
    text-decoration: none;
    color: #222;
  }
`;

const DealListHead = ({ title }) => {
  return (
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid item xs={3} position="relative">
        <GridItem direction="column">
          <Link to={`/my/${title}`}>
            <Typography className="title">전체</Typography>
            <Typography
              className="content"
              sx={{ color: `${title === "buying" ? "#f15746" : "#31b46e"}` }}>
              0
            </Typography>
          </Link>
        </GridItem>
      </Grid>

      <Grid item xs={3}>
        <GridItem direction="column">
          <Link to={`/my/${title}`}>
            <Typography className="title">판매대기</Typography>
            <Typography className="content">0</Typography>
          </Link>
        </GridItem>
      </Grid>

      <Grid item xs={3}>
        <GridItem direction="column">
          <Link to={`/my/${title}`}>
            <Typography className="title">판매 중</Typography>
            <Typography className="content">0</Typography>
          </Link>
        </GridItem>
      </Grid>

      <Grid item xs={3}>
        <GridItem direction="column">
          <Link to={`/my/${title}`}>
            <Typography className="title">종료</Typography>
            <Typography className="content">0</Typography>
          </Link>
        </GridItem>
      </Grid>
    </Grid>
  );
};

export default DealListHead;
