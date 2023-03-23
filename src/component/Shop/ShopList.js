import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2';
import ShoplItem from './ShopItem';
import { useRecoilValue } from 'recoil';
import { productAtom } from '../../atoms/atom';
const ListBlock = styled.div`
  width: 100%;
`
const ShopSolt = styled.div`
  display: flex;
  justify-content: space-between;
  item-align: center;
`

const ShopList = () => {
  const product = useRecoilValue(productAtom)
  return (
    <ListBlock>
      <ShopSolt>
        <div className='item_name'>
          <p>상품 {product !== null ? product.length : 0}</p>
        </div>
        <div className='item_solt'>
          <p>인기순 아이콘</p>
        </div>
      </ShopSolt>
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