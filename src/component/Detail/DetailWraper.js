import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";

const LayerSizeList = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  z-index: 1;
  bottom: -283px;
  .layer_container {
    background-color: #fff;
    position: relative;
    width: 176px;
    top: 0px;
    a {
    }
    .layer_header {
      h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        min-height: 60px;
        text-align: center;
        padding: 18px 50px 20px;
        margin: 0;
      }
    }
    .layer_content {
      border: 1px solid #d3d3d3;
      border-radius: 10px;
      margin: 0;
      padding: 0;

      box-sizing: border-box;
      position: relative;
      top: 0;
      ul {
        list-style-position: outside;
        padding: 0;
        margin: 0;
        li {
          display: list-item;
          text-align: left;
          list-style-type: none;
          list-style-position: outside;
          a {
            font-size: 14px;
            padding: 10px 15px 12px;
            position: relative;
            text-align: left;
            display: block;
            svg {
              position: absolute;
              right: 12px;
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
`;

const WrapSales = styled.div`
  .tab_area {
    .tab_list {
      display: flex;
      box-sizing: border-box;
      border-radius: 10px;
      background-color: #f4f4f4;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: list-item;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0%;
        margin: 2;
        text-align: left;
        a {
          font-size: 13px;
          padding: 7px 0 9px;
          line-height: 16px;
          text-align: center;
          border-radius: 8px;
          background-color: #f4f4f4;
          color: rgba(34, 34, 34, 0.8);
          text-decoration: none;
        }
      }
    }
  }
`;

const DetailWrap = styled.div`
  .product_sales_graph {
    position: relative;
    color: #222;
  }
  // 구매하기전 확인!
  .buying_check {
  }
`;

const SalesTitle = styled.div`
  display: flex;
  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    padding: 40px 0 20px;
    margin: 0;
  }
  .sales_filter {
    position: relative;
    margin-left: auto;
    padding: 40px 0 20px;
    .filter_unit {
      position: relative;
      vertical-align: top;
      display: inline-block;
      button {
        color: rgba(34, 34, 34, 0.8);
        align-items: center;
        appearance: none;
        background-attachment: scroll;
        background-clip: border-box;
        background-color: #ffffff;
        background-origin: padding-box;
        border: 0;
        display: inline-flex;
        font-size: 13px;
        justify-content: center;
        outline-style: none;
        text-align: center;
        text-shadow: none;
        vertical-align: middle;
        cursor: pointer;
        span {
          line-height: 24px;
          position: relative;
          text-align: center;
          text-shadow: none;
          vertical-align: top;
        }
      }
    }
  }
`;

const DetailWraper = () => {
  const [toggle, setToggle] = useState(false);
  const handleSizeButton = () => {
    setToggle(!toggle);
  };
  return (
    <DetailWrap>
      <div className="product_sales_graph">
        <SalesTitle>
          <h3>시세</h3>
          <div className="sales_filter">
            <div className="filter_unit">
              <button onClick={handleSizeButton} className="btn btn_select on">
                <span>모든 사이즈</span>
                <RiArrowDownSLine size={24}></RiArrowDownSLine>
              </button>
              {toggle ? (
                <LayerSizeList>
                  <div className="layer_container">
                    <a className="btn_layer_close">
                      {/* <svg>
                                <use></use>
                                </svg> */}
                    </a>
                    {/* <div className="layer_header">
                                <h2> 사이즈 선택</h2>
                              </div> */}
                    <div className="layer_content">
                      <ul className="size_list">
                        <li className="size_item">
                          <a>
                            모든 사이즈
                            <svg>
                              <BsCheck size={24}></BsCheck>
                            </svg>
                            {/* <svg>
                                <use></use>
                                </svg> */}
                          </a>
                        </li>
                        <li className="size_item">
                          <a>
                            XS
                            {/* <svg>
                                <use></use>
                                </svg> */}
                          </a>
                        </li>
                        <li className="size_item">
                          <a>
                            S
                            {/* <svg>
                                <use></use>
                                </svg> */}
                          </a>
                        </li>
                        <li className="size_item">
                          <a>
                            M
                            {/* <svg>
                                <use></use>
                                </svg> */}
                          </a>
                        </li>
                        <li className="size_item">
                          <a>
                            L
                            {/* <svg>
                                <use></use>
                                </svg> */}
                          </a>
                        </li>
                        <li className="size_item">
                          <a>
                            XL
                            {/* <svg>
                                <use></use>
                                </svg> */}
                          </a>
                        </li>
                        <li className="size_item">
                          <a>
                            XXL
                            {/* <svg>
                                <use></use>
                                </svg> */}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </LayerSizeList>
              ) : (
                <></>
              )}
            </div>
          </div>
        </SalesTitle>
        <WrapSales>
          <div className="tab_area">
            <ul className="tab_list">
              <li>
                <a href="#" className="item_link">
                  1개월
                </a>
              </li>
              <li>
                <a href="#" className="item_link">
                  3개월
                </a>
              </li>
              <li>
                <a href="#" className="item_link">
                  6개월
                </a>
              </li>
              <li>
                <a href="#" className="item_link">
                  1년
                </a>
              </li>
              <li>
                <a href="#" className="item_link">
                  전체
                </a>
              </li>
            </ul>
            <div id="sales_panel1">
              <div className="graph">
                <canvas></canvas>
              </div>
            </div>
          </div>
        </WrapSales>
        <div className="wrap_bids">
          <div className="tab_area">
            <ul className="tab_list">
              <li>
                <a>체결 거래</a>
              </li>
              <li>
                <a>판매 입찰</a>
              </li>
              <li>
                <a>구매 입찰</a>
              </li>
            </ul>
            <div id="panel1">
              <div className="table_wrap">
                <table>
                  <caption>
                    <span className="blind">데이터 테이블</span>
                  </caption>
                  <colgroup>
                    <col></col>
                  </colgroup>
                  <thead>
                    <thead>
                      <tr>
                        <th>사이즈</th>
                        <th>거래가</th>
                        <th>거래일</th>
                      </tr>
                    </thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>L</td>
                      <td>404,000원</td>
                      <td>2/11/11</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>404,000원</td>
                      <td>2/11/11</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>404,000원</td>
                      <td>2/11/11</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>404,000원</td>
                      <td>2/11/11</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>404,000원</td>
                      <td>2/11/11</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="?" className="btn outlinegray"></a>
            </div>
            <div id="panel2">
              <div className="table_wrap">
                <table>
                  <caption>
                    <span className="blind">데이터 테이블</span>
                  </caption>
                  <colgroup>
                    <col></col>
                  </colgroup>
                  <thead>
                    <thead>
                      <tr>
                        <th>사이즈</th>
                        <th>판매 희망가</th>
                        <th>수량</th>
                      </tr>
                    </thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>L</td>
                      <td>404,000원</td>
                      <td>2/11/11</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>404,000원</td>
                      <td>2/11/11</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>404,000원</td>
                      <td>2/11/11</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>404,000원</td>
                      <td>2/11/11</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>404,000원</td>
                      <td>2/11/11</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="?" className="btn outlinegray">
                입찰 내역 더보기
              </a>
            </div>
            <div id="panel3">
              <div className="table_wrap">
                <table>
                  <caption>
                    <span className="blind">데이터 테이블</span>
                  </caption>
                  <colgroup>
                    <col></col>
                  </colgroup>
                  <thead>
                    <thead>
                      <tr>
                        <th>사이즈</th>
                        <th>구매 희망가</th>
                        <th>수량</th>
                      </tr>
                    </thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XXL</td>
                      <td>404,000원</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>404,000원</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>404,000원</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>404,000원</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>404,000원</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="?" className="btn outlinegray">
                입찰 내역 더보기
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="buying_check"></div>
    </DetailWrap>
  );
};

export default DetailWraper;
