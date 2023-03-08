import React from 'react'
import styled from 'styled-components';
import { Inner } from '../../common/js/style';
import FilterSide from '../../component/Shop/FilterSide';
import ShopList from '../../component/Shop/ShopList';
const ShopBlock = styled.div`
  display: flex;
`
const ItemAll = () => {
  return (
    <Inner padding="0 40px;">
      <ShopBlock>
        <FilterSide />
        <ShopList />
      </ShopBlock>
    </Inner>
  )
}

export default ItemAll