import React, { useEffect } from "react";
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

// const DetailContainer = styled.div`
//   /* display: flex; */
//   position: relative;
//   .left_section {
//     /* flex-direction: column; */
//     /* flex: 1; */
//     /* width: 50%; */
//     float: left;
//     padding-right: 3.334%;
//     .left_info {
//       position: static;
//       .product_image_container {
//         width: 50%;
//         position: fixed;
//         .swiper {
//           z-index: 0;
//           .swiper-wrapper {
//             z-index: 0;
//             .swiper-slide {
//               .product_image {
//                 /* width: 560px; */
//                 background-repeat: no-repeat;
//                 background-size: contain;
//                 height: 560px;
//                 background-color: transparent;
//               }
//             }
//           }
//           .swiper-pagination {
//             display: flex;
//             max-width: 528px;
//             margin: 0 16px 20px;
//             span {
//               height: 2px;
//               background-color: #222;
//               flex: 1;
//               border-radius: 0;
//               margin: 0;
//             }
//           }
//           .swiper-button-prev {
//             &:after {
//               font-size: 24px;
//               color: rgba(34, 34, 34, 0.2);
//             }
//           }
//           .swiper-button-next {
//             &:after {
//               font-size: 24px;
//               color: rgba(34, 34, 34, 0.2);
//             }
//           }
//         }
//       }
//       .alert_box {
//         display: flex;
//         align-items: center;
//         padding: 12px;
//         margin-top: 20px;
//         border: 1px solid #ebebeb;
//         border-radius: 10px;
//         box-shadow: 0 2px 6px rgb(0 0 0 / 12%);
//         .content {
//           font-size: 12px;
//           .title {
//             display: flex;
//             span {
//               background-color: #ff8824;
//               color: #fff;
//               line-height: 12px;
//               font-weight: 600;
//               margin-right: 4px;
//               padding: 3px 5px 2px;
//               border-radius: 2px;
//             }
//             p {
//               margin: 0;
//               font-size: 13px;
//               font-weight: 600;
//             }
//           }
//           .detail {
//             margin-top: 4px;
//             color: rgba(34, 34, 34, 0.5);
//           }
//         }
//         .arrow_icon {
//           margin-left: auto;
//           width: 25px;
//           height: 21px;
//         }
//       }
//     }
//   }
//   .right_section {
//     /* flex-direction: column; */
//     /* flex: 1; */
//     /* overflow-y: scroll; */
//     /* height: 800px; */
//     float: right;
//     width: 50%;
//     /* position: relative; */
//     border-left: 1px solid #ebebeb;
//     padding-left: 3.334%;
//     ::-webkit-scrollbar {
//       display: none;
//     }
//     .banner_box {
//       margin-top: 20px;
//       a {
//         background-color: rgb(39, 39, 39);
//         display: flex;

//         height: 80px;
//         justify-content: center;
//         img {
//         }
//       }
//     }
//   }
// `;

const Div = styled.div`
  padding: 30px 40px 120px;
  overflow: hidden;
  max-width: 1280px;
  margin: 0 auto;
  .column_bind {
    /* height: 2000px; */
    /* display: flex; */
    position: relative;
    .left_section {
      /* flex-direction: column; */
      /* flex: 1; */
      width: 50%;
      float: left;
      padding-right: 3.334%;
      .left_info {
        position: static;
        .product_image_container {
          /* width: 50%; */
          /* position: fixed; */
          .swiper {
            /* z-index: 0; */
            /* position: relative; */
            /* position: fixed; */
            .swiper-wrapper {
              z-index: -1;
              /* position: relative; */
              .swiper-slide {
                /* position: relative; */
                .product_image {
                  /* position: absolute; */
                  /* width: 560px; */
                  background-repeat: no-repeat;
                  background-size: contain;
                  height: 560px;
                  background-color: transparent;
                }
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
      }
    }
    .right_section {
      /* flex-direction: column; */
      /* flex: 1; */
      /* overflow-y: scroll; */
      /* height: 800px; */
      float: right;
      width: 50%;
      /* position: relative; */
      border-left: 1px solid #ebebeb;
      padding-left: 3.334%;
      ::-webkit-scrollbar {
        display: none;
      }
      .banner_box {
        margin-top: 20px;
        a {
          background-color: rgb(39, 39, 39);
          display: flex;

          height: 80px;
          justify-content: center;
          img {
          }
        }
      }
    }
  }
`;

const DetailInfo = () => {
  const productDetail = useRecoilValue(productDetailAtom);
  console.log("DetailInfo", productDetail);
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const [size, setSize] = useRecoilState(sizeAtom);
  const param = useRecoilValue(paramAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const user = useRecoilValue(userAtom);

  // 로그인이 되어 있으면 사이즈가 생김// 로그아웃이면 사이즈 안 들어옴.
  useEffect(() => {
    axiosGetFunction(
      `/api/kream/product/size/` + param,
      { user_no: 1 },
      token,
      setToken
    ).then(res => {
      console.log("size", res.data.data.sizes);
      console.log("sizeState", res.data.data.sizes[0].size);
      setSize(res.data.data.sizes);
      res.data.data.sizes[0].size === "ONE SIZE" &&
        setSizeState(res.data.data.sizes[0].size);
    });
  }, []);

  const Container = styled.div`
    .content_top {
      border: 2px solid green;
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
        border: 2px solid red;
        &:after {
          content: "";
          clear: both;
          display: block;
        }
        .column {
          width: 50%;
          border: 2px solid blue;
          &:first-child {
            float: left;
            padding-right: 3.334%;
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
            border: 1px dotted orange;
          }
          .column_box {
            position: fixed;
            top: 130px;
            /* width 가 반응형으로 움직이니까 560으로 고정 안 해도 된다. */
            .swiper {
              .swiper-wrapper {
                /* position: static; */
                .swiper-slide {
                  position: relative;
                  .item_inner {
                    .product_image {
                      border: 1px solid black;
                      /* background-repeat: no-repeat; */
                      /* background-size: contain; */
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
          }
        }
        .column_fixed {
        }
        .column_right {
          height: 2000px;
          background-color: green;
        }
      }
    }
    .content_bottom {
      background-color: yellow;
      height: 800px;
    }
  `;
  console.log(111, size, sizeState);
  return (
    <Container>
      <div className="content content_top">
        <h2 className="blind">상품 상세</h2>
        <div className="column_bind">
          <div className="column column_fixed column_left">
            <div className="spread">{/* stay empty */}</div>
            <div className="column_box">
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
            </div>
          </div>
          <div className="column column_right">b</div>
        </div>
      </div>
      <div className="content content_bottom">밑에 내용</div>
    </Container>
  );
};

export default DetailInfo;
