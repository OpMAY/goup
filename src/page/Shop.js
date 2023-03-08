import React from 'react'
import { Inner } from '../common/js/style'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FilterSide from '../component/Shop/FilterSide';
import ShopList from '../component/Shop/ShopList';
import styled from 'styled-components'

const ShopBlock = styled.div`
  display: flex;
`


const Shop = () => {
  return (
    <>
      <h2>Shop</h2>
    <Tabs>
      <TabList>
        <Inner>
          <Tab></Tab>
        </Inner>
      </TabList>
    </Tabs>
      <TabPanel>
          
      </TabPanel>
      <Inner padding="0 40px;">
        <ShopBlock>
          <FilterSide />
          <ShopList />
        </ShopBlock>
      </Inner>
    </>
  )
}

export default Shop