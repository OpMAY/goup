import React from 'react'
import { Inner, GenderList, Hr } from '../../common/js/style'
import ProductItem from './ProductItem';
import Grid from '@mui/material/Unstable_Grid2';

const Man = () => {
  return (
    <>
      <Inner padding="0 40px;" bordertop={0}>
        <Grid container spacing={2}>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
        </Grid>
        <Hr margin="56px 0 40px;"></Hr>
        <Grid container spacing={2}>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
          <Grid xs={2.4}>
            <GenderList></GenderList>
          </Grid>
        </Grid>
        {/* ToDo: SnS Box */}
      </Inner>
    </>
  )
}

export default Man