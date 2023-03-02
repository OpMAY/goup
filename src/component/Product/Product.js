import React from 'react'
import BannerSwiper from './BannerSwiper'
// react tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// common style
import { Inner } from '../../common/js/style';
import ProductItem from './ProductItem';
import FocusList from './FocusList';
import Banner from './Banner';

const Product = () => {
  return (
    <>
    <Tabs>
			<Inner padding="0 40px;">
				<TabList>
					<Tab>추천</Tab>
					<Tab>남성</Tab>
					<Tab>여성</Tab>
				</TabList>
			</Inner>

			<TabPanel>
				{/* swiper */}
				<BannerSwiper />
				<Inner padding="0 40px;">
					<ProductItem  title={'Just Dropped'} subTitle={'발매 상품'}/>
					<FocusList title={'Brand Focus'} subTitle={'추천 브랜드'}></FocusList>
				</Inner>
				<Banner />
				<Inner padding="0 40px;">
					<ProductItem  title={'Most Popular'} subTitle={'인기 상품'}/>
				</Inner>
			</TabPanel>
			<TabPanel>
					<h2>남성</h2>
			</TabPanel>
			<TabPanel>
					<h2>여성</h2>
			</TabPanel>
    </Tabs>
    </>
  )
}

export default Product