import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import {Grid, Typography, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import {TfiClose} from "react-icons/tfi";
import {BiCheck} from "react-icons/bi";
import {useRecoilState, useRecoilValue} from "recoil";
import {userAddressAtom} from "../../../atoms/atom";
import {Hr} from "../../../common/js/style";
import TwoButton from "../AddAddressModal/TwoButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";

const RecipeInfoModal = ({receiptInfo, setReceiptInfo}) => {
    const [open, setOpen] = useState(false);
    const [receipt, setReceipt] = useState(null);
    const [value, setValue] = useState(receiptInfo && receiptInfo.cash_receipt_type !== null ? receiptInfo.cash_receipt_type : 'NONE');
    const handleOpen = () => {
        setReceipt(receiptInfo);
        setValue(receiptInfo && receiptInfo.cash_receipt_type !== null ? receiptInfo.cash_receipt_type : 'NONE');
        setOpen(true);
    };
    const handleClose = (save) => {
        if (!save) {
            setReceipt(receiptInfo);
            setOpen(false);
        } else {
            if ((receiptInfo.cash_receipt_type === 'CARD' && receiptInfo.cr_card_number.length <= 0 )|| (receiptInfo.cash_receipt_type === 'PHONE' && receiptInfo.cr_phone_number.length <= 0)) {
                alert('정보를 올바르게 입력해주세요.')
            } else {
                setReceiptInfo(receipt);
                setOpen(false);
            }
        }
    };

    const button = {
        border: "1px solid #d3d3d3",
        borderRadius: "10px",
        color: "rgba(34,34,34,0.8)",
        height: "36px",
        padding: "0",
    };

    const subtext = {
        fontSize: "12px",
        padding: "4px 0",
    };

    const header = {
        borderTopRadius: "16px",
    };

    const text = {
        height: "60px",
        fontSize: "18px",
        fontWeight: 700,
        padding: "20px 50px",
        textAlign: "center",
    };

    const style = {
        borderRadius: "16px",
        bgcolor: "#fff",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 448,
        boxShadow: 24,
    };

    return (
        <>
            <div>
                <Button sx={button} className="button" onClick={handleOpen}>
                    <Typography sx={subtext}>변경</Typography>
                </Button>
                <Modal
                    open={open}
                    onClose={() => {
                        handleClose(false)
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Box className="close_button">
                            <IconButton
                                aria-label="close"
                                onClick={() => {
                                    handleClose(false)
                                }}
                                sx={{
                                    position: "absolute",
                                    right: 8,
                                    top: 8,
                                    color: theme => theme.palette.grey[500],
                                }}>
                                <TfiClose size={24}></TfiClose>
                            </IconButton>
                        </Box>
                        <Box sx={header} className="header">
                            <Typography sx={text}>현금영수증 정보</Typography>
                        </Box>
                        <Box
                            sx={{
                                margin: "0 20px",
                                height: "410px",
                            }}>
                            <Typography sx={{fontSize: "13px"}}>
                                현금영수증은 판매 거래 시 발생하는 수수료에 대해 '정산완료' 후
                                7일 이내에 건별로 발급됩니다. ‘미신청' 선택 시 자진발급으로
                                처리됩니다.
                            </Typography>
                            <Box sx={{marginY: "10px"}}>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        형태
                                    </InputLabel>
                                    <NativeSelect
                                        sx={{marginY: "16px"}}
                                        defaultValue={value}
                                        onChange={(e) => {
                                            setReceipt(prevState => {
                                                return {...prevState, cash_receipt_type: e.target.options[e.target.options.selectedIndex].value, cr_phone_number: '', cr_card_number: ''}
                                            })
                                            setValue(e.target.options[e.target.options.selectedIndex].value)
                                        }}
                                        inputProps={{
                                            name: "형태",
                                            id: "uncontrolled-native",
                                        }}>
                                        <option value='NONE'>미신청</option>
                                        <option value='PHONE'>개인소득공제(휴대폰)</option>
                                        <option value='CARD'>개인소득공제(현금영수증카드)</option>
                                    </NativeSelect>
                                    {
                                        value !== 'NONE' ? value === 'PHONE' ?
                                            <TextField
                                                id="filled-required"
                                                sx={{margin: "16px 0"}}
                                                label="휴대폰 번호"
                                                variant="standard"
                                                fullWidth
                                                placeholder="휴대폰 번호를 입력하세요."
                                                InputLabelProps={{
                                                    shrink: true,
                                                    sx: {color: "#222", fontWeight: "700"},
                                                }}
                                                value={receipt !== null ? receipt.cr_phone_number : ''}
                                                onChange={(e) => setReceipt(prevState => {
                                                    return {
                                                        ...prevState,
                                                        cr_phone_number: e.target.value,
                                                        cr_card_number: ''
                                                    }
                                                })}
                                                autoFocus
                                            />
                                            : <TextField
                                                id="filled-required"
                                                sx={{margin: "16px 0"}}
                                                label="카드 번호"
                                                variant="standard"
                                                fullWidth
                                                placeholder="카드 번호를 입력하세요."
                                                InputLabelProps={{
                                                    shrink: true,
                                                    sx: {color: "#222", fontWeight: "700"},
                                                }}
                                                value={receipt !== null ? receipt.cr_card_number : ''}
                                                onChange={(e) => {
                                                    console.log(receipt, e.target.value);
                                                    setReceipt(prevState => {
                                                        return {
                                                            ...prevState,
                                                            cr_card_number: e.target.value,
                                                            cr_phone_number: ''
                                                        }
                                                    }
                                                )}}
                                                autoFocus
                                            /> : null
                                    }
                                </FormControl>
                            </Box>
                            <TwoButton
                                handleClose={() => {
                                    handleClose(false)
                                }}
                                onConfirm={() => {
                                    handleClose(true)
                                }}
                                solid="저장하기"
                                padding={value === 'NONE' ? '184px 0 0' : '104px 0 0'}
                                disabled={false}
                            />
                        </Box>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default RecipeInfoModal;
