import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SelectProductItem from "./SelectProductItem";
import { Hr } from "../../common/js/style";
import { Box, Stack, Typography } from "@mui/material";
// import { RiArrowRightSLine } from "react-icons/ri";
import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import OrderButton from "./OrderButton";
import {
  productDetailAtom,
  sizeAtom,
  sizeStateAtom,
  tokenAtom,
  userAtom,
  orderToggleAtom,
  wishPriceAtom,
  userPointAtom,
  userAddressAtom,
} from "../../atoms/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import DeliveryIconBox from "./DeliveryIconBox";
import CheckArea from "./CheckArea";
import { axiosGetFunction } from "../../module/CustomAxios";
import DeliveryRequireModal from "../modal/DeliveryRequireModal";
import AddressChangeModal from "../modal/AddressChangeModal";
import AddAddressModal from "../modal/AddAddressModal";

const panelStyle = {
  padding: "0",
};

const tabListStyle = {
  backgroundColor: "#f4f4f4",
  borderRadius: "80px",
  "& button": {
    borderRadius: 50,
    color: "#222",
    fontSize: "14px",
  },

  "& button.Mui-selected": {
    backgroundColor: "#ef6253",
    color: "#fff",
    fontWeight: 700,
    height: "20px",
  },
};

const tabStyle = {
  color: "#fff",
  // padding: "7px 0 9px",
  // height:"36px"
};

// const tableCellHead = {
//   color: "rgba(34,34,34,.5)",
//   padding: "0 0 9px",
//   fontSize: "12px",
// };

// const tableCell = {
//   border: "none",
//   padding: "9px 0 0",
// };

const OrderContainer = styled.div`
  background-color: #fff;
  /* border: 1px solid pink; */
  .wrapper {
    padding: 32px 32px 0;
    /* background-color: yellow; */
  }
  .section {
    .section_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      margin-top: 15px;
      h3 {
        font-size: 18px;
        font-weight: 700;
        color: #222;
      }
    }
    .final_info_box {
      table {
        margin: 0;
        tr {
          line-height: 24px;
          th {
            padding: 0;
            padding-right: 24px;
            text-align: left;
            font-size: 13px;
            color: rgba(34, 34, 34, 0.5);
            font-weight: normal;
          }
          td {
            padding: 0;
            font-size: 14px;
          }
        }
      }
    }
    .delivery_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      table {
        tr {
          line-height: 24px;
          th {
            padding: 0;
            padding-right: 24px;
            text-align: left;
            font-size: 13px;
            color: rgba(34, 34, 34, 0.5);
            font-weight: normal;
          }
          td {
            padding: 0;
            font-size: 14px;
          }
        }
      }
      a {
        padding: 0 14px;
        border: 1px solid #d3d3d3;
        color: rgba(34, 34, 34, 0.8);
        font-size: 12px;
        border-radius: 10px;
        height: 34px;
        line-height: 34px;
        text-decoration: none;
      }
    }
  }
`;

const BoxStyle = {
  textAlign: "center",
  padding: "28px 22px",
  flexGrow: 1,
  // backgroundColor: "green",
  // border: "1px solid red",
  // mx: "32px",
};

const subText = {
  fontSize: "12px",
  color: "rgba(34,34,34,.5)",
};

const PriceInputBox = styled.dl`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #ebebeb;
  /* dt {
    color: "#222";
    font-weight: 700;
    font-size: "14px";
  } */
  span {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 700;
    color: #f15746;
    input {
      max-width: 200px;
      font-size: 24px;
      line-height: 26px;
      cursor: text;
      color: #222;
      border: 0;
      direction: rtl;
      outline: none;
      font-weight: 700;
      ::placeholder {
        font-weight: 700;
        opacity: 0.5;
        font-size: 20px;
      }
    }
  }
`;

const FinalInfoTable = styled.table`
  display: block;
  font-size: 13px;

  tr {
    /* display: block; */
    color: #222;
    th {
      text-align: left;
      font-weight: normal;
      color: rgba(34, 34, 34, 0.5);
    }
    td {
      width: 540px;
      text-align: right;
    }
  }
`;
const subTitle = {
  color: "#222",
  fontWeight: 700,
  fontSize: "14px",
  pb: "16px",
};

const dateButton = {
  border: "1px solid #d3d3d3",
  color: "inherit",
  width: "124px",
  borderRadius: "12px",
  height: "42px",
  "&:hover": {
    border: "1px solid #d3d3d3",
    // color: "gray",
    backgroundColor: "#ebebeb",
  },
  "&:focus": {
    border: "1px solid #222",
    // color: "gray",
    // backgroundColor: "#ebebeb",
  },
};
const PaymentContainerBid = styled.div`
  div {
    .front {
      font-size: 15px;
    }
    .back {
      font-size: 12px;
      color: rgba(34, 34, 34, 0.5);
      padding-left: 8px;
    }
  }
  p {
    font-size: 13px;
  }
`;

const PaymentContainerBuy = styled.div`
  div {
    margin-top: 12px;
    .front {
      font-size: 15px;
    }
    .back {
      font-size: 12px;
      color: rgba(34, 34, 34, 0.5);
      padding-left: 8px;
    }
  }
  p {
    font-size: 15px;
  }
  .normalPay {
    font-weight: 700;
  }
`;

const CheckContainer = styled.div`
  .notice {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    padding-bottom: 40px;
    .strong {
      color: #f15746;
    }
  }
  hr {
    margin: 20px 0 0;
    border: 1px solid #222;
  }
`;

const OrderPayment = () => {
  const [value, setValue] = useState("1");
  const [orderPageState, setOrderPageState] = useRecoilState(orderToggleAtom);
  const [waitDate, setWaitDate] = useState(30);
  const [finalPage, setFinalPage] = useState(false);
  const user = useRecoilValue(userAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  // const [listValue, setListValue] = useState("1");
  const size = useRecoilValue(sizeAtom);
  const sizeState = useRecoilValue(sizeStateAtom);
  const productDetail = useRecoilValue(productDetailAtom);
  const [userAddress, setUserAddress] = useRecoilState(userAddressAtom);
  const [userPoint, setUserPoint] = useRecoilState(userPointAtom);
  const [wishPrice, setWishPrice] = useRecoilState(wishPriceAtom);
  // console.log("1-1-1-1-1-1-1", wishPrice, userPoint);
  console.log("🧧🎑🎑🎐🎐🎐🎏🎏", userAddress);
  // console.log(
  //   "오더페이먼트!!!!!!!!!!",
  //   productDetail,
  //   "사이즈--->",
  //   sizeState,
  //   size,
  //   "waitDate",
  //   waitDate
  // );

  useEffect(() => {
    axiosGetFunction(
      `/api/kream/my/address/` + 1,
      { user_no: user },
      token,
      setToken
    ).then(res => {
      setUserAddress(res.data.data.address);
    });
    axiosGetFunction(
      `/api/kream/my/point/` + 1,
      { user_no: user },
      token,
      setToken
    ).then(res => {
      setUserPoint(res.data.data.point);
    });
  }, []);

  const handleChange = (event, newValue) => {
    console.log(1, event, newValue);
    setOrderPageState(newValue);
  };
  const handleChangeButton = e => {
    console.log(e);
  };

  function getToday(waitDate) {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + (waitDate + date.getDate())).slice(-2);
    if (day > 30) {
      console.log(month, day, waitDate, day - waitDate, Number(month));
      return year + "/" + (Number(month) + 1) + "/" + (day - waitDate);
    } else {
      return year + "/" + month + "/" + day;
    }
  }

  const resultPurchase = () => {
    let filtered = [];
    let result = "-";
    if (size !== null) {
      filtered = size.filter(item => {
        return sizeState === item.size;
      });
      if (filtered.length > 0) {
        result = filtered[0].price !== null ? filtered[0].price : "-";
      }
    }
    return result;
  };
  // const handleChangeListValue = (event, newValue) => {
  //   console.log(2, event, newValue);
  //   setListValue(newValue);
  // };

  // const handleSize = e => {
  //   console.log(e.target.value);
  //   // setSize(e.target.value);
  // ;

  return (
    <OrderContainer>
      <div className="wrapper">
        <SelectProductItem />
        <Box
          sx={{
            height: "1px",
            width: "100%",
            backgroundColor: "#ebebeb",
            mt: "32px",
          }}></Box>
      </div>
      {!finalPage ? (
        <Box sx={{ padding: "0 32px 32px" }}>
          <Stack flexDirection="row">
            <Box sx={BoxStyle}>
              <Typography sx={subText}>즉시 구매가</Typography>
              <Typography>{resultPurchase()}원</Typography>
            </Box>
            <Box sx={BoxStyle}>
              <Typography sx={subText}>즉시 판매가</Typography>
              <Typography>
                {productDetail.direct_sell_price
                  ? productDetail.direct_sell_price.toLocaleString()
                  : "-"}
              </Typography>
            </Box>
          </Stack>
          <TabContext value={orderPageState}>
            {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
            <TabList
              sx={tabListStyle}
              variant="fullWidth"
              TabIndicatorProps={{ hidden: true }}
              onChange={handleChange}
              aria-label="lab API tabs example">
              <Tab sx={tabStyle} label="구매 입찰" value="1" />
              <Tab sx={tabStyle} label="즉시 구매" value="2" />
            </TabList>
            {/* </Box> */}
            <Box>
              <TabPanel sx={panelStyle} value="1">
                <Box>
                  <Box>
                    <PriceInputBox>
                      <Typography sx={subTitle}>구매 희망가</Typography>
                      <span>
                        <input
                          onChange={event => {
                            setWishPrice(event.target.value);
                          }}
                          placeholder="희망가 입력"
                          required
                          autoComplete="off"
                          value={wishPrice}
                          pattern="^\d{0,8}(\.\d{1,4})?$"
                        />
                        원
                      </span>
                    </PriceInputBox>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "rgba(34,34,34,.5)",
                        paddingTop: "4px",
                      }}>
                      총 결제금액은 다음 화면에서 계산됩니다.
                    </Typography>
                  </Box>
                  <Box sx={{ backgroundColor: "#fff" }}>
                    <Stack direction="column" sx={{ py: "32px" }}>
                      <Typography sx={subTitle}>입찰 마감기한</Typography>
                      <Typography sx={{ fontSize: "15px" }}>
                        {waitDate}일 {getToday(waitDate)}
                      </Typography>
                      {/* 클릭하면, */}
                      <Stack
                        onChange={handleChangeButton}
                        sx={{ mt: "7px" }}
                        direction="row"
                        justifyContent="space-between">
                        {/* <ButtonGroup
                      fullWidth
                      size="large"
                      aria-label="outlined primary button group"> */}
                        <Button
                          onClick={() => {
                            setWaitDate(1);
                          }}
                          sx={dateButton}>
                          1일
                        </Button>
                        <Button
                          onClick={() => {
                            setWaitDate(3);
                          }}
                          sx={dateButton}>
                          3일
                        </Button>
                        <Button
                          onClick={() => {
                            setWaitDate(7);
                          }}
                          sx={dateButton}>
                          7일
                        </Button>
                        <Button
                          onClick={() => {
                            setWaitDate(30);
                          }}
                          sx={dateButton}>
                          30일
                        </Button>
                        <Button
                          onClick={() => {
                            setWaitDate(60);
                          }}
                          sx={dateButton}>
                          60일
                        </Button>
                        {/* </ButtonGroup> */}
                      </Stack>
                    </Stack>
                  </Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography sx={subTitle}>총 결제금액</Typography>
                    <Typography
                      sx={{ fontSize: "16px", color: "rgba(34,34,34,.5)" }}>
                      다음 화면에서 확인
                    </Typography>
                  </Stack>
                  <OrderButton
                    onClick={() => {
                      setFinalPage(!finalPage);
                    }}
                    type="buy_step3"
                  />
                </Box>
              </TabPanel>
              <TabPanel value="2" sx={panelStyle}>
                <Box>
                  <Box>
                    <PriceInputBox>
                      <Typography sx={subTitle}>즉시 구매가</Typography>
                      <span>121,111 원</span>
                    </PriceInputBox>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "rgba(34,34,34,.5)",
                        paddingTop: "4px",
                      }}>
                      총 결제금액은 다음 화면에서 계산됩니다.
                    </Typography>
                  </Box>
                  <Hr margin="32px 0 16px" />
                  <Stack direction="row" justifyContent="space-between">
                    <Typography sx={subTitle}>총 결제금액</Typography>
                    <Typography
                      sx={{ fontSize: "16px", color: "rgba(34,34,34,.5)" }}>
                      다음 화면에서 확인
                    </Typography>
                  </Stack>
                  <OrderButton
                    onClick={() => {
                      setFinalPage(!finalPage);
                    }}
                    type="buy_step4"
                  />
                </Box>
              </TabPanel>
            </Box>
          </TabContext>
        </Box>
      ) : (
        <>
          <Box sx={{ padding: "0 32px 32px" }}>
            <div className="section delivery_box">
              <div className="section_title">
                <h3>배송 주소</h3>
                <AddAddressModal/>
              </div>
              <div className="delivery_info">
                <table>
                  <tr>
                    <th>받는 분</th>
                    <td>{userAddress[0].name}</td>
                  </tr>
                  <tr>
                    <th>연락처</th>
                    <td>{userAddress[0].phone_number}</td>
                  </tr>
                  <tr>
                    <th>배송 주소</th>
                    <td>{userAddress[0].address_detail}</td>
                  </tr>
                </table>
                <AddressChangeModal />
              </div>
              <DeliveryRequireModal />
              <div className="section_title">
                <h3>배송 방법</h3>
              </div>
              <DeliveryIconBox
                order="false"
                title="택배발송"
                side="선불"
                sub="착불 발송 시 정산금액에서 차감"
              />
            </div>
            {/* <div className="check_box"></div> */}
          </Box>
          <Box sx={{ padding: "32px 32px" }}>
            <div className="section point_box">
              <div className="section_title">
                <h3>포인트</h3>
              </div>
              <Button
                sx={{
                  color: "rgba(34, 34, 34, 0.3)",
                  border: "1px solid #ebebeb",
                  margin: "0",
                  width: "636px",
                  padding: "20px 12px",
                  textAlign: "left",
                  display: "block",
                  marginTop: "12px",
                  borderRadius: "10px",
                }}>
                결제 시점에 최대 사용
              </Button>
              <br />
              <Box
                component="span"
                sx={{ fontSize: "14px", color: "rgba(34,34,34,.5)" }}>
                보유 포인트
              </Box>
              <Box component="span" sx={{ marginLeft: "8px" }}>
                {userPoint.point}P
              </Box>
            </div>
          </Box>
          <Box sx={{ padding: "32px 32px" }}>
            <div className="section final_info_box">
              <div className="section_title">
                <h3>최종 주문 정보</h3>
              </div>
              <PriceInputBox>
                <Typography sx={subTitle}>총 결제금액</Typography>
                <span>{Number(wishPrice) + 9000 + 3000}원</span>
              </PriceInputBox>
              <FinalInfoTable>
                <tr>
                  <th>구매 희망가</th>
                  <td>{wishPrice}</td>
                </tr>
                <tr>
                  <th>포인트</th>
                  <td>-</td>
                </tr>
                <tr>
                  <th>검수비</th>
                  <td>무료</td>
                </tr>
                <tr>
                  <th>수수료</th>
                  <td>9,000</td>
                </tr>
                <tr>
                  <th>배송비</th>
                  <td>3,000</td>
                </tr>
                <tr className="bid_final_date">
                  <th>입찰 마감 기한</th>
                  <td>서울 강남구 ㅇㅇㅇ ㅇㅇㅇ동</td>
                </tr>
              </FinalInfoTable>
            </div>
          </Box>
          <Box sx={{ padding: "32px 32px" }}>
            <div className="section payment_box">
              <div className="section_title">
                <h3>결제 방법</h3>
              </div>
              {/* {"구매입찰" && <PaymentContainerBid>
                <div>
                  <span className="front">카드 간편결제</span>
                  <span className="back">일시불</span>
                </div>
                <Button
                  sx={{
                    color: "rgba(34, 34, 34, 0.3)",
                    border: "1px solid #ebebeb",
                    margin: "0",
                    width: "636px",
                    padding: "20px 12px",
                    textAlign: "left",
                    display: "block",
                    marginTop: "12px",
                    borderRadius: "10px",
                  }}>
                  카드를 등록해주세요
                </Button>
                <p>
                  구매 입찰은 일시불만 지원하며, 카드사 홈페이지나 앱에서 분할
                  납부로 변경 가능합니다. 단, 카드사별 정책에 따라 분할 납부
                  변경 시 수수료가 발생할 수 있습니다.
                </p>
              </PaymentContainerBid>} */}
              {"즉시구매" && (
                <PaymentContainerBuy>
                  <p>계좌 간편결제</p>
                  <Button
                    sx={{
                      color: "rgba(34, 34, 34, 0.3)",
                      border: "1px solid #ebebeb",
                      margin: "0",
                      width: "636px",
                      padding: "20px 12px",
                      textAlign: "left",
                      display: "block",
                      marginTop: "12px",
                      borderRadius: "10px",
                    }}>
                    계좌를 등록해주세요
                  </Button>
                  <div>
                    <span className="front">카드 간편결제</span>
                    <span className="back">일시불</span>
                  </div>
                  <Button
                    sx={{
                      color: "rgba(34, 34, 34, 0.3)",
                      border: "1px solid #ebebeb",
                      margin: "0",
                      width: "636px",
                      padding: "20px 12px",
                      textAlign: "left",
                      display: "block",
                      marginTop: "12px",
                      borderRadius: "10px",
                    }}>
                    카드를 등록해주세요
                  </Button>
                  <div>
                    <span className="front">일반 결제</span>
                    <span className="back">일시불</span>
                  </div>
                  <Button
                    sx={{
                      color: "#222",
                      border: "1px solid #ebebeb",
                      margin: "0",
                      width: "636px",
                      padding: "20px 12px",
                      textAlign: "left",
                      display: "block",
                      marginTop: "12px",
                      borderRadius: "10px",
                    }}>
                    신용카드
                  </Button>
                </PaymentContainerBuy>
              )}
            </div>
          </Box>
          <Box sx={{ padding: "32px 32px" }}>
            <CheckContainer>
              {CHECK_TEXT.map((item, id) => (
                <CheckArea
                  no={id}
                  key={id}
                  title={item.title}
                  content={item.content}
                />
              ))}
              {/* <CheckArea status={false} />
      <CheckArea />
      <CheckArea />
      <CheckArea /> */}
              <CheckArea title="구매 조건을 모두 확인하였으며, 거래 진행에 동의합니다" />
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={subTitle}>총 결제금액</Typography>
                <Typography
                  sx={{ fontSize: "20px", color: "#f15746", fontWeight: 700 }}>
                  {Number(wishPrice) + 9000 + 3000}원
                </Typography>
              </Stack>
              <OrderButton type="buy_step2" />
            </CheckContainer>
          </Box>
        </>
      )}
    </OrderContainer>
  );
};

export default OrderPayment;

const CHECK_TEXT = [
  {
    title:
      "판매자의 판매거부, 배송지연, 미입고 등의 사유가 발생할 경우, 거래가 취소될 수 있습니다.",
    content:
      "앱 알림 해제, 알림톡 차단, 전화번호 변경 후 미등록 시에는 거래 진행 상태 알림을 받을 수 없습니다.",
  },
  {
    title:
      "창고 보관을 선택한 경우, 구매자에게 배송되지 않고 KREAM 창고에 보관됩니다.",
    content:
      "검수 합격 후 보관이 완료되면 창고 이용료(현재 첫 30일 무료)가 결제됩니다.",
  },
  {
    title:
      "‘바로 결제하기’ 를 선택하시면 즉시 결제가 진행되며, 단순 변심이나 실수에 의한 취소가 불가능합니다.",
    content:
      "본 거래는 개인간 거래로 전자상거래법(제17조)에 따른 청약철회(환불, 교환) 규정이 적용되지 않습니다.",
  },
];
