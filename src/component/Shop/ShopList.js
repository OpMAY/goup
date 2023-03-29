import React, { useEffect } from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2';
import ShoplItem from './ShopItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productAtom,loadingAtom } from '../../atoms/atom';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Loding from './Loding';

const ListBlock = styled.div`
  width: 100%;
  position: relative;
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
  const [loading, setLoading] = useRecoilState(loadingAtom);

  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(Math.floor(window.scrollY))
      if(Math.floor(window.scrollY) >= 540){
        setLoading(true)
      }else{
        setLoading(false)
      }
    })
  })
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
      {
        loading ? <Loding/> :  null
      }
    </ListBlock>
  )
}

export default ShopList