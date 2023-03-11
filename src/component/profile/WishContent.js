import React from "react";
import { Grid } from "@mui/material";
import MyListTitle from "./MyListTitle";
import WishItem from "./WishItem";

const WishContent = () => {
  return (
    <>
      <MyListTitle title="wish" name="관심 상품" more={WISH_ITEMS.length >= 1 ? true : false} />
      <Grid container rowSpacing="20px" columnSpacing={3}>
        {WISH_ITEMS.map((item, _) => (
          <Grid item key={item} xs={3} sx={{ marginBottom: "20px" }}>
            <WishItem />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WishContent;

const WISH_ITEMS = [1, 2, 3, 4, 5];
