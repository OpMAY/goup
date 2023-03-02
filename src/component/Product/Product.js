import React from 'react'
import BannerSwiper from './BannerSwiper'
// react tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// common style
import { Inner } from '../../common/js/style';
import ProductItem from './ProductItem';

const Product = () => {
  return (
    <>
    <Tabs>
			<Inner>
				<TabList>
					<Tab>추천</Tab>
					<Tab>남성</Tab>
					<Tab>여성</Tab>
					<Tab>기획전</Tab>
				</TabList>
			</Inner>

			<TabPanel>
				{/* swiper */}
				<BannerSwiper />
				<Inner>
					<ProductItem  title={'Just Dropped'} subTitle={'발매 상품'}/>
				</Inner>
			</TabPanel>
			<TabPanel>
					<h2>남성</h2>
			</TabPanel>
			<TabPanel>
					<h2>여성</h2>
			</TabPanel>
			<TabPanel>
					<h2>기획전</h2>
			</TabPanel>
    </Tabs>
    </>
  )
}

export default Product