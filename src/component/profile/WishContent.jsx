import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MyListTitle from "./MyListTitle";
import WishItem from "./WishItem";
import EmptyContent from "./Buying/EmptyContent";

const WishContent = () => {
  const [isEmpty, setIsEmpty] = useState(WISH_ITEMS ? false : true);

  useEffect(() => {
    WISH_ITEMS.length === 0 && setIsEmpty(true);
  }, [isEmpty]);

  return (
    <>
      <MyListTitle
        title="wish"
        name="관심 상품"
        more={!isEmpty ? true : false}
      />
      {isEmpty ? (
        <div>
          <EmptyContent text="추가하신 관심 상품이 없습니다." shopButton={true}/>
        </div>
      ) : (
        <Grid container rowSpacing="20px" columnSpacing={3}>
          {WISH_ITEMS.map((item, _) => (
            <Grid item key={item} xs={3} sx={{ marginBottom: "20px" }}>
              <WishItem />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default WishContent;

const WISH_ITEMS = [];
