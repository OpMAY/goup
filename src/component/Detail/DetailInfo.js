import React from "react";
import styled from "styled-components";
import { Inner } from "../../common/js/style";
import ColumTop from "./ColumTop";
import ProjectInfoWrap from "./ProjectInfoWrap";
import DeliveryWrap from "./DeliveryWrap";
import { BsArrowRight } from "react-icons/bs";
import ProductGraph from "./ProductGraph";
import ConfirmWrap from "./ConfirmWrap";
import PointGuide from "./PointGuide";
import MeditationNotice from "./MeditationNotice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRecoilValue } from "recoil";
import { productAtom, productDetailAtom } from "../../atoms/atom";

const LeftSection = styled.div`
  flex-direction: column;
  flex: 1;
  padding-right: 39.5px;
  .product_image {
    background-color: yellow;
  }
`;

const RightSection = styled.div`
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  height: 800px;
  border-left: 1px solid #ebebeb;
  padding-left: 39.5px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const BannerBox = styled.div`
  margin-top: 20px;
  a {
    background-color: rgb(39, 39, 39);
    display: flex;

    height: 80px;
    justify-content: center;
    img {
    }
  }
`;

const LeftInfo = styled.div`
  .product_image_container {
    width: 560px;
    .swiper {
      .swiper-slide {
        .product_image {
          background-repeat: no-repeat;
          background-size: contain;
          height: 560px;
          background-color: transparent;
        }
      }
      .swiper-pagination {
        display: flex;
        max-width: 528px;
        margin: 0 16px 20px;
        span {
          height: 2px;
          background-color: #222;
          flex: 1;
          border-radius: 0;
          margin: 0;
        }
      }
      .swiper-button-prev {
        &:after {
          font-size: 24px;
          color: rgba(34, 34, 34, 0.2);
        }
      }
      .swiper-button-next {
        &:after {
          font-size: 24px;
          color: rgba(34, 34, 34, 0.2);
        }
      }
    }
  }
  .alert_box {
    display: flex;
    align-items: center;
    padding: 12px;
    margin-top: 20px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgb(0 0 0 / 12%);
    .content {
      font-size: 12px;
      .title {
        display: flex;
        span {
          background-color: #ff8824;
          color: #fff;
          line-height: 12px;
          font-weight: 600;
          margin-right: 4px;
          padding: 3px 5px 2px;
          border-radius: 2px;
        }
        p {
          margin: 0;
          font-size: 13px;
          font-weight: 600;
        }
      }
      .detail {
        margin-top: 4px;
        color: rgba(34, 34, 34, 0.5);
      }
    }
    .arrow_icon {
      margin-left: auto;
      width: 25px;
      height: 21px;
    }
  }
`;

const DetailContainer = styled.div`
  display: flex;
`;

const DetailInfo = () => {
  const productDetail = useRecoilValue(productDetailAtom);
  console.log("DetailInfo", productDetail);

  return (
    <>
      <Inner padding="30px 40px 120px;">
        <DetailContainer>
          <LeftSection>
            <LeftInfo>
              <div className="product_image_container">
                <Swiper
                  pagination={{ clickable: true }}
                  navigation={true}
                  effect="fade"
                  modules={[EffectFade, Pagination, Navigation]}>
                  {productDetail.product.images.map((item, id) => (
                    <SwiperSlide key={item.name}>
                      <div
                        className="product_image"
                        style={{
                          backgroundImage: `url(${item.url})`,
                        }}></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="alert_box">
                <div className="content">
                  <div className="title">
                    <span>주의</span>
                    <p>판매 거래 주의사항</p>
                  </div>
                  <div className="detail">반드시 보유한 상품만 판매하세요.</div>
                </div>
                <span className="arrow_icon">
                  <BsArrowRight size={25}></BsArrowRight>
                </span>
              </div>
            </LeftInfo>
          </LeftSection>
          <RightSection>
            <div>
              <ColumTop />
              <ProjectInfoWrap />
              <DeliveryWrap />
              <BannerBox>
                <a href="?">
                  <img
                    src="https://ssl.pstatic.net/melona/libs/1432/1432951/13d10eb0c9e6e7bab3d5_20230227190423038.jpg"
                    alt="`banner_image"
                  />
                </a>
              </BannerBox>
              <div>
                <ProductGraph />
                <ConfirmWrap />
                <PointGuide />
                <MeditationNotice />
              </div>
            </div>
          </RightSection>
        </DetailContainer>
      </Inner>
    </>
  );
};

export default DetailInfo;
