import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2';
import ShoplItem from './ShopItem';
const ListBlock = styled.div`
  width: 100%;
`

const arr = [
  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
]

const ShopList = () => {
  return (
    <ListBlock>
      <Grid container spacing={2}>
        {arr.map(() =>(
          <Grid xs={3}>
            <ShoplItem />
          </Grid>
        ))}
      </Grid>
    </ListBlock>
  )
}

export default ShopList