import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2';
import ShoplItem from './ShopItem';
import { useRecoilValue } from 'recoil';
import { productAtom } from '../../atoms/atom';
const ListBlock = styled.div`
  width: 100%;
`


const ShopList = () => {
  const product = useRecoilValue(productAtom)
  return (
    <ListBlock>
      <Grid container spacing={2}>
        {
          product !== null ? product.map((v, i) =>(
            <Grid xs={3} key={i}>
              <ShoplItem product={v}/>
            </Grid>
          )) : null
        }
      </Grid>
    </ListBlock>
  )
}

export default ShopList