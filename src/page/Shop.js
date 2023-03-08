import React from 'react'
import { Inner, Title} from '../common/js/style'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ItemAll from '../component/Shop/ItemAll';

const shopTab ={
  "background-color": '#fff',
  position: 'sticky',
  top: '103px'

}


const Shop = () => {
  return (
    <>
      <Title>Shop</Title>
      <Tabs>
        <TabList style={shopTab}>
          <Inner padding="0 40px;">
            <Tab>전체</Tab>
          </Inner>
        </TabList>
        <TabPanel>
          <ItemAll />
        </TabPanel>
      </Tabs>
      
    </>
  )
}

export default Shop