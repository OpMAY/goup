import React, { useEffect } from 'react'
import { Inner } from '../../common/js/style';
import ProductItem from './ProductItem';
import FocusList from './FocusList';
import Banner from './Banner';
import BannerSwiper from './BannerSwiper'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { bannerAtom, mainItemAtom, tokenAtom, typeAtom, userAtom } from "../../atoms/atom";
import { axiosGetFunction } from "../../module/CustomAxios";
import SizeModal from "../Shop/SizeModal";
import { useState } from 'react';


const Home = () => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const setBanner = useSetRecoilState(bannerAtom);
  const [mainItem, setMainItem] = useRecoilState(mainItemAtom);
  const user = useRecoilValue(userAtom);
  const [droppedProducts, setDropp] = useState()
  const [type, setType] = useRecoilState(typeAtom);
  useEffect(() => {
    const header = { user_no: user };
      console.log(header)
    axiosGetFunction('/api/kream/main', user !== null? {user_no : user} : {}, token, setToken, header).then((res) => {
      console.log(res);
      const obj = {};
      obj.droppedProducts = res.data.data.recent_products;
      obj.popularProducts = res.data.data.popular_products;
      obj.recommendBrands = res.data.data.brands;
      setMainItem(obj);
      setBanner(res.data.data.banners);
    })
  }, [])
  return (
    <>
      {/* swiper */}
      <BannerSwiper />
      <Inner padding="0 40px;">
        <ProductItem title={'Just Dropped'} subTitle={'발매 상품'} type='dropped' items={mainItem.droppedProducts} />
        <FocusList title={'Brand Focus'} subTitle={'추천 브랜드'} borderTop="1px solid #ccc" items={mainItem.recommendBrands}></FocusList>
      </Inner>
      <Banner />
      <Inner padding="0 40px;">
        <ProductItem title={'Most Popular'} subTitle={'인기 상품'} type='popular' items={mainItem.popularProducts} />
      </Inner>
      <SizeModal />
    </>
  )
}

export default Home