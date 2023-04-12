import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import {axiosGetFunction} from "../../module/CustomAxios";
import {useRecoilState, useRecoilValue} from "recoil";
import {bannerAtom, tokenAtom} from "../../atoms/atom";

const FirstImage = styled.div`
  height: 480px;
  background-color: green;
`;

const SecondImage = styled.div`
  height: 480px;
  background-color: red;
`;
const ThirdImage = styled.div`
  height: 480px;
  background-color: pink;
`;

const BannerImageDiv = styled.div`
  height: 480px;
  background-image: url("${props => props.img}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: ${props => props.color};
`

const BannerSwiper = () => {
    const banners = useRecoilValue(bannerAtom);
    return (
        <>
            <Swiper
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{clickable: true}}>
                <>
                    {
                        banners && banners.length > 0 ? banners.map(item => (
                            <SwiperSlide key={item.no}>
                                <BannerImageDiv color={item.bg_color} img={item.banner_image.url}></BannerImageDiv>
                            </SwiperSlide>
                        )) : null
                    }
                </>
            </Swiper>
        </>
    );
};

export default BannerSwiper;
