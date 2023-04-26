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

const AccountRegisterModal = ({buttonTitle, userAccount, setUserAccount}) => {
    const [open, setOpen] = useState(false);
    const [account, setAccount] = useState(null);
    const origin = {...userAccount};
    const handleOpen = () => {
        setAccount(userAccount);
        setOpen(true);
    };
    const handleClose = (save) => {
        if (save) {
            setUserAccount(account);
        }
        setOpen(false);
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

    const names = [
        "신한은행",
        "국민은행",
        "IBK기업은행",
        "카카오뱅크",
        "하나은행",
        "우리은행",
        "부산은행",
        "농협은행",
        "대구은행",
    ];

    return (
        <>
            <div>
                <Button sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "700",
                    padding: "0 16px",
                    borderRadius: "10px",
                    height: "36px",
                }} className="button" onClick={handleOpen}>
                    <Typography sx={subtext}>{buttonTitle}</Typography>
                </Button>
                <Modal
                    open={open}
                    onClose={() => {handleClose(false)}}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Box className="close_button">
                            <IconButton
                                aria-label="close"
                                onClick={() => {handleClose(false)}}
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
                            <Typography sx={text}>계좌 정보</Typography>
                        </Box>
                        <Box
                            sx={{
                                margin: "0 20px",
                                height: "410px",
                            }}>
                            <Typography sx={{fontSize: "13px"}}>
                                해당 계좌 정보는 해당 판매 내역에만 저장되는 내용으로 회원님의 정보는 수정되지 않습니다.
                            </Typography>
                            <Box sx={{marginY: "16px"}}>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        은행명
                                    </InputLabel>
                                    <NativeSelect
                                        sx={{marginY: "16px"}}
                                        defaultValue={account !== null ? account.bank_name : names[0]}
                                        inputProps={{
                                            name: "은행명",
                                            id: "uncontrolled-native",
                                        }}
                                        onChange={(e) => {
                                            setAccount(prevState => {
                                                return {...prevState, bank_name: names[e.target.options.selectedIndex]}
                                            })
                                        }}
                                    >
                                        {
                                            names.map(item => (
                                                <option value={item}>{item}</option>
                                            ))
                                        }
                                    </NativeSelect>
                                    <TextField
                                        id="filled-required"
                                        sx={{margin: "16px 0"}}
                                        label="계좌 번호"
                                        variant="standard"
                                        fullWidth
                                        placeholder="계좌 번호를 입력하세요."
                                        InputLabelProps={{
                                            shrink: true,
                                            sx: {color: "#222", fontWeight: "700"},
                                        }}
                                        value={account !== null ? account.account_number : ''}
                                        onChange={(e) => setAccount(prevState => {
                                            return {...prevState, account_number: e.target.value}
                                        })}
                                        autoFocus
                                    />
                                    <TextField
                                        id="filled-required"
                                        sx={{margin: "16px 0"}}
                                        label="예금주"
                                        variant="standard"
                                        fullWidth
                                        placeholder="예금주를 입력하세요."
                                        InputLabelProps={{
                                            shrink: true,
                                            sx: {color: "#222", fontWeight: "700"},
                                        }}
                                        value={account !== null ? account.account_name : ''}
                                        onChange={(e) => setAccount(prevState => {
                                            return {...prevState, account_name: e.target.value}
                                        })}
                                        autoFocus
                                    />
                                </FormControl>
                            </Box>
                            <TwoButton
                                handleClose={() => {handleClose(false)}}
                                onConfirm={() => {handleClose(true)}}
                                solid="저장하기"
                                padding="52px 0 0"
                                disabled={false}
                            />
                        </Box>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default AccountRegisterModal;
