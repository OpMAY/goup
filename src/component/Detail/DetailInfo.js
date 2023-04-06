import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Inner } from "../../common/js/style";
import ColumTop from "./ColumTop";
import ProjectInfoWrap from "./ProjectInfoWrap";
import DeliveryWrap from "./DeliveryWrap";
import { BsArrowRight } from "react-icons/bs";
import ProductGraph from "./ProductGraph";
import { Box } from "@mui/material";
import ConfirmWrap from "./ConfirmWrap";
import PointGuide from "./PointGuide";
import MeditationNotice from "./MeditationNotice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  sizeAtom,
  productAtom,
  sizeStateAtom,
  productDetailAtom,
  paramAtom,
  tokenAtom,
  userAtom,
} from "../../atoms/atom";
import { axiosGetFunction } from "../../module/CustomAxios";

const Container = styled.div`
  .content_top {
    max-width: 1280px;
    overflow: hidden;
    padding: 30px 40px 120px;
    margin: 0 auto;
    .blind {
      overflow: hidden;
      height: 1px;
      width: 1px;
    }
    .column_bind {
      position: relative;
      &:after {
        content: "";
        clear: both;
        display: block;
      }
      .column {
        width: 50%;
        &:first-child {
          float: left;
          padding-right: 3.334%;
          &:before {
            position: absolute;
            content: "";
            width: 1px;
            background-color: rgba(34, 34, 34, 0.1);
            left: 50%;
            bottom: 0;
            top: 0;
          }
        }
        &:nth-child(2) {
          position: relative;
          float: right;
          padding-left: 3.334%;
        }
        .spread {
          height: 560px;
          position: static;
          background-color: transparent;
        }
      }
      .column_fixed {
      }
      .column_right {
      }
    }
  }
  .content_bottom {
    background-color: yellow;
    height: 800px;
  }
`;

const ColumnBox = styled.div`
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  .swiper {
    .swiper-wrapper {
      .swiper-slide {
        position: relative;
        .item_inner {
          .product_image {
            height: 560px;
            width: 560px;
            background-color: rgb(246, 238, 237);
            background-image: url("/images/img0.png");
            overflow: hidden;
            position: relative;
          }
        }
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

const DetailInfo = () => {
  const productDetail = useRecoilValue(productDetailAtom);
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const [size, setSize] = useRecoilState(sizeAtom);
  const param = useRecoilValue(paramAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const user = useRecoilValue(userAtom);
  const [ScrollY, setScrollY] = useState(0);
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  };

  // 로그인이 되어 있으면 사이즈가 생김// 로그아웃이면 사이즈 안 들어옴.
  useEffect(() => {
    axiosGetFunction(
      `/api/kream/product/size/` + param,
      { user_no: true },
      token,
      setToken
    ).then(res => {
      // console.log("size", res.data.data.sizes);
      // console.log("sizeState", res.data.data.sizes[0].size);
      setSize(res.data.data.sizes);
      res.data.data.sizes[0].size === "ONE SIZE" &&
        setSizeState(res.data.data.sizes[0].size);
    });
  }, []);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  },[]);

  return (
    <Container>
      <div className="content content_top">
        <h2 className="blind">상품 상세</h2>
        <div className="column_bind">
          <div className="column column_fixed column_left">
            <div className="spread">{/* stay empty */}</div>
            <ColumnBox
              className="column_box"
              position={ScrollY < 1430 ? "fixed;" : "absolute;"}
              top={ScrollY < 1430 ? "140px;" : "auto;"}
              bottom={ScrollY < 1430 ? "auto;" : "0px;"}>
              <Swiper
                pagination={{ clickable: true }}
                navigation={true}
                effect="fade"
                modules={[EffectFade, Pagination, Navigation]}>
                {productDetail.product.images.map(item => (
                  <SwiperSlide key={item.name}>
                    <div className="item_inner">
                      <div className="product_image"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
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
            </ColumnBox>
          </div>
          <div className="column column_right">
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
                {user ? <ProductGraph /> : <h1>로그인해야 볼 수 있습니다</h1>}
                <ConfirmWrap />
                <PointGuide />
                <MeditationNotice />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content content_bottom">밑에 내용</div>
    </Container>
  );
};

export default DetailInfo;
