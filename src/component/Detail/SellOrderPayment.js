import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SelectProductItem from "./SelectProductItem";
import {Hr} from "../../common/js/style";
import {Box, Stack, Typography} from "@mui/material";
// import { RiArrowRightSLine } from "react-icons/ri";
import {TabContext} from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import OrderButton from "./OrderButton";
import AddressChangeModal from "../modal/AddressChangeModal";
import {
    checkAtom,
    paramAtom,
    priceStateAtom,
    productDetailAtom,
    sizeAtom,
    sizeStateAtom,
    tokenAtom,
    userAddressAtom,
    userAtom,
    userPointAtom,
    wishPriceAtom,
} from "../../atoms/atom";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import DeliveryIconBox from "./DeliveryIconBox";
import CheckArea from "./CheckArea";
import {axiosGetFunction} from "../../module/CustomAxios";
import DeliveryRequireModal from "../modal/DeliveryRequireModal";
import AddAddressModal from "../modal/AddAddressModal";
import RecipeInfoModal from "../modal/RecipeInfoModal";
import {useNavigate} from "react-router-dom";

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
        backgroundColor: "#41b979",
        color: "#fff",
        fontWeight: 700,
        height: "20px",
    },
};

const tabStyle = {
    color: "#fff",
};

const OrderContainer = styled.div`
  background-color: #fff;

  .wrapper {
    padding: 32px 32px 0;
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

      p {
        margin: 0;
        font-size: 13px;
        color: rgba(34, 34, 34, 0.5);
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

  span {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 700;
    color: #31b46e;

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
    color: #222;

    th {
      text-align: left;
      font-weight: normal;
      color: rgba(34, 34, 34, 0.5);
    }

    td {
      width: 568px;
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
        backgroundColor: "#ebebeb",
    },
    "&:focus": {
        border: "1px solid #222",
    },
    "&.is-active": {
        border: "2px solid black",
        fontWeight: '700'
    }
};

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
    font-size: 13px;
    color: rgba(34, 34, 34, 0.5);
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

const SellOrderPayment = () => {
    const [value, setValue] = useState("1");
    const [waitDate, setWaitDate] = useState(30);
    const [finalPage, setFinalPage] = useState(false);
    const user = useRecoilValue(userAtom);
    const [token, setToken] = useRecoilState(tokenAtom);
    const size = useRecoilValue(sizeAtom);
    const sizeState = useRecoilValue(sizeStateAtom);
    const priceState = useRecoilValue(priceStateAtom);
    const productDetail = useRecoilValue(productDetailAtom);
    const param = useRecoilValue(paramAtom);
    const [userAddress, setUserAddress] = useRecoilState(userAddressAtom);
    const [userPoint, setUserPoint] = useRecoilState(userPointAtom);
    const [wishPrice, setWishPrice] = useRecoilState(wishPriceAtom);
    const setCheck = useSetRecoilState(checkAtom);
    const navigate = useNavigate();
    const [directPrice, setDirectPrice] = useState(null);
    const [directReversePrice, setDirectReversePrice] = useState(null);
    const [resendAddress, setResendAddress] = useState(null);
    const [userAccount, setUserAccount] = useState(null);


    useEffect(() => {
        setWishPrice('');
        if (productDetail === null && sizeState === null) {
            if (param !== null) {
                navigate(`/product/${param}`, {replace: true});
            } else {
                navigate(`/shop`, {replace: true});
            }
        } else {
            if (priceState !== null) {
                setValue("2");
            }

            axiosGetFunction(`/api/kream/product/size/detail/${sizeState.no}`, {}, token, setToken).then(res => {
                setDirectPrice(res.data.data.sell.price);
                setDirectReversePrice(res.data.data.purchase.price);
            })

            axiosGetFunction(`/api/kream/my/account/${user}`, {}, token, setToken).then((res) => {
                setUserAccount(res.data.data.accountInfo)
            })

            axiosGetFunction(
                `/api/kream/my/address/${user}`,
                {},
                token,
                setToken
            ).then(res => {
                const arr = res.data.data.address
                if (arr.length > 0) {
                    const idx = arr.findIndex(x => x._default_address);
                    const default_add = arr[idx]
                    arr.splice(idx, 1);
                    arr.unshift(default_add)
                    setResendAddress(default_add);
                } else {
                    setResendAddress(null);
                }
                setUserAddress(arr)
            });
            axiosGetFunction(
                `/api/kream/my/point/${user}`,
                {},
                token,
                setToken
            ).then(res => {
                setUserPoint(res.data.data.point);
            });
        }
    }, []);

    const checkInit = () => {
        const c = [];
        for (let i = 0; i < CHECK_TEXT.length; i++) {
            c.push(false);
        }
        setCheck(c);
    }

    const handleChange = (event, newValue) => {
        console.log(1, event, newValue);
        setValue(newValue);
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

    function addComma(e) {
        let value = e.target.value;
        value = Number(value.replaceAll(',', ''));
        return value.toLocaleString('ko-KR');
    }

    const resultPurchase = () => {
        let filtered = [];
        let result = "-";
        if (size !== null) {
            filtered = size.filter(item => {
                return sizeState.size === item.size;
            });
            if (filtered.length > 0) {
                result = filtered[0].price !== null ? filtered[0].price + '원' : "-";
            }
        }
        return result;
    };

    return (
        <>
            {
                productDetail !== null ? <OrderContainer>
                    <div className="wrapper">
                        <SelectProductItem/>
                        <Box
                            sx={{
                                height: "1px",
                                width: "100%",
                                backgroundColor: "#ebebeb",
                                mt: "32px",
                            }}></Box>
                    </div>
                    {!finalPage ? (
                        <Box sx={{padding: "0 32px 32px"}}>
                            <Stack flexDirection="row">
                                <Box sx={BoxStyle}>
                                    <Typography sx={subText}>즉시 구매가</Typography>
                                    <Typography>{directReversePrice
                                        ? directReversePrice.toLocaleString() + '원'
                                        : "-"}</Typography>
                                </Box>
                                <Box sx={BoxStyle}>
                                    <Typography sx={subText}>즉시 판매가</Typography>
                                    <Typography>
                                        {directPrice
                                            ? directPrice.toLocaleString() + '원'
                                            : "-"}
                                    </Typography>
                                </Box>
                            </Stack>
                            <TabContext value={value}>
                                <TabList
                                    sx={tabListStyle}
                                    variant="fullWidth"
                                    TabIndicatorProps={{hidden: true}}
                                    onChange={handleChange}
                                    aria-label="lab API tabs example">
                                    <Tab sx={tabStyle} label="판매 입찰" value="1"/>
                                    <Tab sx={tabStyle} label="즉시 판매" value="2"
                                         disabled={directPrice === null}/>
                                </TabList>
                                {/* </Box> */}
                                <Box>
                                    <TabPanel sx={panelStyle} value="1">
                                        <Box>
                                            <Box>
                                                <PriceInputBox>
                                                    <Typography sx={subTitle}>판매 희망가</Typography>
                                                    <span>
                                                        <input
                                                            onChange={event => {
                                                                if (!isNaN(event.target.value.replaceAll(',', '') * 1)) {
                                                                    const n = Number(event.target.value.replaceAll(',', ''));
                                                                    if (n > 9999999) {
                                                                        alert('구매가는 1000만원을 넘길 수 없습니다.');
                                                                        event.preventDefault();
                                                                    } else {
                                                                        setWishPrice(addComma(event));
                                                                    }
                                                                } else {
                                                                    event.preventDefault();
                                                                }
                                                            }}
                                                            onBlur={(e) => {
                                                                const n = Number(e.target.value.replaceAll(',', ''));
                                                                if (directPrice && n <= directPrice) {
                                                                    setWishPrice('')
                                                                    setValue('2');
                                                                }
                                                            }}
                                                            required
                                                            autoComplete="off"
                                                            value={wishPrice}
                                                            placeholder="희망가 입력"
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
                                            <Box sx={{backgroundColor: "#fff"}}>
                                                <Stack direction="column" sx={{py: "32px"}}>
                                                    <Typography sx={subTitle}>입찰 마감기한</Typography>
                                                    <Typography sx={{fontSize: "15px"}}>
                                                        {waitDate}일 {getToday(waitDate)}
                                                    </Typography>
                                                    {/* 클릭하면, */}
                                                    <Stack
                                                        onChange={handleChangeButton}
                                                        sx={{mt: "7px"}}
                                                        direction="row"
                                                        justifyContent="space-between">

                                                        <Button
                                                            onClick={() => {
                                                                setWaitDate(1);
                                                            }}
                                                            className={waitDate === 1 ? 'is-active' : ''}
                                                            sx={dateButton}>
                                                            1일
                                                        </Button>
                                                        <Button
                                                            onClick={() => {
                                                                setWaitDate(3);
                                                            }}
                                                            className={waitDate === 3 ? 'is-active' : ''}
                                                            sx={dateButton}>
                                                            3일
                                                        </Button>
                                                        <Button
                                                            onClick={() => {
                                                                setWaitDate(7);
                                                            }}
                                                            className={waitDate === 7 ? 'is-active' : ''}
                                                            sx={dateButton}>
                                                            7일
                                                        </Button>
                                                        <Button
                                                            onClick={() => {
                                                                setWaitDate(30);
                                                            }}
                                                            className={waitDate === 30 ? 'is-active' : ''}
                                                            sx={dateButton}>
                                                            30일
                                                        </Button>
                                                        <Button
                                                            onClick={() => {
                                                                setWaitDate(60);
                                                            }}
                                                            className={waitDate === 60 ? 'is-active' : ''}
                                                            sx={dateButton}>
                                                            60일
                                                        </Button>
                                                    </Stack>
                                                </Stack>
                                            </Box>
                                            <Stack direction="row" justifyContent="space-between">
                                                <Typography sx={subTitle}>총 결제금액</Typography>
                                                <Typography
                                                    sx={{fontSize: "16px", color: "rgba(34,34,34,.5)"}}>
                                                    {wishPrice !== null && wishPrice !== '' && wishPrice * 1 !== 0 ? wishPrice + '원' : '가격을 입력하세요.'}
                                                </Typography>
                                            </Stack>
                                            <OrderButton
                                                onClick={() => {
                                                    const c = [];
                                                    for (let i = 0; i < CHECK_TEXT.length + 1; i++) {
                                                        c.push(false);
                                                    }
                                                    setCheck(c);
                                                    setFinalPage(!finalPage);
                                                }}
                                                type="sell_step3"
                                                input={!(wishPrice !== '' && wishPrice * 1 !== 0)}
                                            />
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value="2" sx={panelStyle}>
                                        <Box>
                                            <Box>
                                                <PriceInputBox>
                                                    <Typography sx={subTitle}>즉시 판매가</Typography>
                                                    <span>{priceState !== null ? priceState + '원' : '-'}</span>
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
                                            <Hr margin="32px 0 16px"/>
                                            <Stack direction="row" justifyContent="space-between">
                                                <Typography sx={subTitle}>정산금액</Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "20px",
                                                        fontWeight: 700,
                                                        color: "#31b46e",
                                                    }}>
                                                    {priceState !== null ? priceState + '원' : '-'}
                                                </Typography>
                                            </Stack>
                                            <OrderButton
                                                onClick={() => {
                                                    const c = [];
                                                    for (let i = 0; i < CHECK_TEXT.length + 1; i++) {
                                                        c.push(false);
                                                    }
                                                    setCheck(c);
                                                    setWishPrice(directPrice.toLocaleString())
                                                    setFinalPage(!finalPage);
                                                }}
                                                type="sell_step4"
                                            />
                                        </Box>
                                    </TabPanel>
                                </Box>
                            </TabContext>
                        </Box>
                    ) : (
                        <>
                            <Box sx={{padding: "0 32px 32px"}}>
                                <div className="section account_box">
                                    <div className="section_title">
                                        <h3>판매 정산 계좌</h3>
                                    </div>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography sx={{fontSize: "14px", padding: "0"}}>
                                            등록된 판매 정산 계좌가 없습니다.
                                            <br/>새 계좌번호를 추가해주세요!
                                        </Typography>
                                        <Button
                                            sx={{
                                                backgroundColor: "#000",
                                                color: "#fff",
                                                fontSize: "12px",
                                                fontWeight: "700",
                                                padding: "0 16px",
                                                borderRadius: "10px",
                                                height: "36px",
                                            }}>
                                            계좌 추가
                                        </Button>
                                    </Stack>
                                </div>
                            </Box>
                            <Box sx={{padding: "0 32px 32px"}}>
                                <div className="section delivery_box">
                                    <div className="section_title">
                                        <h3>반송 주소</h3>
                                        <AddAddressModal setParamAddress={setResendAddress}/>
                                    </div>
                                    {
                                        resendAddress ? <>
                                                <div className="delivery_info">
                                                    <table>
                                                        <tr>
                                                            <th>받는 분</th>
                                                            <td>{resendAddress.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>연락처</th>
                                                            <td>{resendAddress.phone_number}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>배송 주소</th>
                                                            <td>{`${resendAddress.address} ${resendAddress.address_detail}`}</td>
                                                        </tr>
                                                    </table>
                                                    <AddressChangeModal paramAddress={resendAddress}
                                                                        setParamAddress={setResendAddress}/>
                                                </div>
                                                <DeliveryRequireModal/>
                                            </>
                                            : <h4 style={{
                                                textAlign: 'center',
                                                color: 'rgba(34, 34, 34, 0.7)',
                                                fontSize: '14px'
                                            }}>주소가 등록되어 있지 않습니다. 주소를 등록해 주세요.</h4>
                                    }
                                    <div className="section_title">
                                        <h3>발송 방법</h3>
                                    </div>
                                    <DeliveryIconBox order="true" title="택배발송" side="선불" sub="착불 발송 시 정산금액에서 차감"/>
                                </div>
                            </Box>
                            <Box sx={{padding: "32px 32px"}}>
                                <div className="section final_info_box">
                                    <div className="section_title">
                                        <h3>최종 주문 정보</h3>
                                    </div>
                                    <PriceInputBox>
                                        <Typography sx={subTitle}>정산금액</Typography>
                                        <span>{(Number(wishPrice.replaceAll(',', '')) - 9000).toLocaleString()}원</span>
                                    </PriceInputBox>
                                    <FinalInfoTable>
                                        <tr>
                                            <th>즉시 판매가</th>
                                            <td>{wishPrice.toLocaleString()}원</td>
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
                                            <td>선불·판매자 부담</td>
                                        </tr>
                                    </FinalInfoTable>
                                </div>
                            </Box>
                            <Box sx={{padding: "0 32px 32px"}}>
                                <div className="section account_box">
                                    <div className="section_title">
                                        <h3>현금 영수증 정보</h3>
                                    </div>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Box sx={{color: "rgba(34,34,34,.5)"}}>
                                            <Stack direction="row">
                                                <Typography sx={{fontSize: "13px"}}>형태</Typography>
                                                <Typography sx={{fontSize: "14px", marginLeft: "40px"}}>
                                                    미신청
                                                </Typography>
                                            </Stack>
                                            <Typography sx={{fontSize: "14px"}}>
                                                판매 거래 시 수수료에 대해 건별로 현금영수증을 발급합니다.
                                            </Typography>
                                        </Box>
                                        <RecipeInfoModal/>
                                    </Stack>
                                </div>
                            </Box>
                            <Box sx={{padding: "32px 32px"}}>
                                <div className="section payment_box">
                                    <div className="section_title">
                                        <h3>패널티 결제 방법</h3>
                                    </div>
                                    <h5 style={{textAlign: 'center'}}>결제 미구현</h5>
                                </div>
                            </Box>
                            <Box sx={{padding: "32px 32px"}}>
                                <CheckContainer>
                                    {CHECK_TEXT.map((item, id) => (
                                        <CheckArea
                                            no={id}
                                            key={id}
                                            title={item.title}
                                            content={item.content}
                                        />
                                    ))}
                                    <CheckArea title="구매 조건을 모두 확인하였으며, 거래 진행에 동의합니다"/>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography sx={subTitle}>정산금액</Typography>
                                        <Typography
                                            sx={{fontSize: "20px", color: "#31b46e", fontWeight: 700}}>
                                            {(Number(wishPrice.replaceAll(',', '')) - 9000).toLocaleString()}원
                                        </Typography>
                                    </Stack>
                                    <OrderButton type="buy_step2"/>
                                </CheckContainer>
                            </Box>
                        </>
                    )}
                </OrderContainer> : null
            }
        </>

    );
};

export default SellOrderPayment;

const CHECK_TEXT = [
    {
        title:
            "거래가 체결되면 일요일 · 공휴일을 제외하고 48시간 내에 KREAM으로 발송을 완료한 후, 발송 정보를 정확히 입력해야 합니다.",
        content:
            "착불 배송 시 판매 금액에서 차감 정산하며, 미정산 시 별도 고지없이 해당 금액을 결제 시도할 수 있습니다.",
    },
    {
        title:
            "송장 번호 미기재·오입력 시 입고가 진행되지 않으며, 발송 후 5일(일요일·공휴일 제외) 내 미도착은 허위 정보 입력으로 간주하여 미입고 페널티를 부과합니다.",
        content:
            "앱 알림 해제, 알림톡 차단, 전화번호 변경 후 미등록 시에는 거래 진행 상태 알림을 받을 수 없으며 이로 인한 거래 실패는 판매자의 책임입니다.",
    },
    {
        title: "검수 기준과 페널티 및 이용 정책을 다시 한번 확인하였습니다.",
        content:
            "이용정책 위반 시, 판매 금액의 최대 15.0%의 페널티가 부과됩니다. 페널티 회피 시 이후 거래가 제한되며 별도 고지없이 해당 금액을 결제 시도할 수 있습니다. 이용정책 보기",
    },
    {
        title:
            "‘바로 판매하기’ 를 선택하시면 즉시 거래가 체결되며, 단순 변심이나 실수에 의한 취소가 불가능합니다.",
    },
    {
        title: "판매 조건을 모두 확인하였으며, 거래 진행에 동의합니다.",
    },
];
