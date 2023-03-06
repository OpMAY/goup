import React from 'react'
import { Inner } from '../../common/js/style';
import ProductItem from './ProductItem';
import FocusList from './FocusList';
import Banner from './Banner';
import BannerSwiper from './BannerSwiper'


const Home = () => {
  return (
    <>
      {/* swiper */}
      <BannerSwiper />
        <Inner padding="0 40px;">
          <ProductItem  title={'Just Dropped'} subTitle={'발매 상품'}/>
          <FocusList title={'Brand Focus'} subTitle={'추천 브랜드'} borderTop="1px solid #ccc"></FocusList>
        </Inner>
        <Banner />
        <Inner padding="0 40px;">
          <ProductItem  title={'Most Popular'} subTitle={'인기 상품'}/>
        </Inner>
    </>
  )
}

export default Home