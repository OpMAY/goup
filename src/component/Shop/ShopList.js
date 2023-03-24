import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2';
import ShoplItem from './ShopItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productAtom } from '../../atoms/atom';
import ImportExportIcon from '@mui/icons-material/ImportExport';

const ListBlock = styled.div`
  width: 100%;
`
const ShopSolt = styled.div`
  display: flex;
  justify-content: space-between;
  item-align: center;
  .item_solt{
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

const ShopList = () => {
  const [product, setProduct] = useRecoilState(productAtom)
  return (
    <ListBlock>
      <ShopSolt>
        <p>상품 {product !== null ? product.length : 0}</p>
        <div className='item_solt'>
          <p>인기순 </p>
          <ImportExportIcon/>
        </div>
      </ShopSolt>
      <Grid container spacing={2}>
        {
          product !== null ? product.map((v, i) =>(
            <Grid xs={3} key={i}>
              <ShoplItem product={v} idx={i}/>
            </Grid>
          )) : null
        }
      </Grid>
    </ListBlock>
  )
}

export default ShopList