import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

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

const BannerSwiper = () => {
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
        pagination={{ clickable: true }}>
        <SwiperSlide>
          <SecondImage>1111</SecondImage>
        </SwiperSlide>
        <SwiperSlide>
          <FirstImage>2222</FirstImage>
        </SwiperSlide>
        <SwiperSlide>
          <ThirdImage>33333</ThirdImage>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSwiper;
