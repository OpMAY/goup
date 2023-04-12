import React, {useState, useEffect} from "react";
import {Grid, Typography, Stack, Checkbox} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import {TfiClose} from "react-icons/tfi";
import {useRecoilState, useRecoilValue} from "recoil";
import {checkAtom, userAddressAtom} from "../../../atoms/atom";

const CheckingModal = () => {
    const [open, setOpen] = useState(false);
    const userAddress = useRecoilValue(userAddressAtom);
    const [check, setCheck] = useRecoilState(checkAtom);

    const handleOpen = (e) => {
        if (e.target.checked){
            setOpen(true);
        } else {
            const o = [...check];
            o[0] = e.target.checked;
            setCheck(o);
        }
    };
    const handleClose = (c) => {
        if (c) {
            const o = [...check];
            o[0] = true;
            setCheck(o);
        }
        setOpen(false);
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
        width: 440,
        boxShadow: 24,
    };

    return (
        <>
            <div>
                <Checkbox
                    checked={check[0]}
                    sx={{
                        "& .MuiSvgIcon-root": {fontSize: 28},
                        color: "#ebebeb",
                        "&.Mui-checked": {
                            color: "black",
                        },
                    }}
                    onClick={handleOpen}></Checkbox>
                <Modal
                    open={open}
                    onClose={() => handleClose(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Box className="close_button">
                            <IconButton
                                aria-label="close"
                                onClick={() => handleClose(false)}
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
                            <Typography sx={text}>상품 특이사항 안내</Typography>
                        </Box>
                        <Box
                            sx={{
                                margin: "0 36px 32px",
                            }}>
                            <Typography
                                sx={{
                                    borderBottom: "2px solid #222",
                                    fontSize: "25px",
                                    fontWeight: "700",
                                    paddingBottom: "20px",
                                    marginBottom: "20px",
                                }}>
                                보유한 상품만 거래되는 것이 <br/>
                                원칙입니다.
                            </Typography>
                            <Typography
                                sx={{fontSize: "14px", fontWeight: "700", marginY: "20px"}}>
                                반드시 보유한 상품만 거래하세요.
                            </Typography>
                            <Typography sx={{fontSize: "14px", marginY: "20px"}}>
                                판매자는 거래 체결 후, 48시간 이내(일,공휴일 제외)에 상품을
                                발송하여야 합니다.
                            </Typography>
                            <Typography sx={{fontSize: "14px", marginY: "20px"}}>
                                보유한 상품이 아니거나, 즉시 발송이 불가능한 경우의 사전 거래
                                체결은 발송지연, 미입고 등으로
                                <font style={{color: "#F15746"}}>페널티 15%</font>가 부과되며
                                향후 거래가 제한될 수 있습니다.
                            </Typography>
                            <Typography sx={{fontSize: "14px", marginY: "20px"}}>
                                구매자는 조기 거래 체결 시, 판매자의 상품 미보유 혹은 정식 발매
                                제품과 상이한 모델, 가품 등으로 인한 거래 실패 가능성이 있으므로
                                주의가 필요합니다.
                            </Typography>
                            <Button
                                onClick={() => handleClose(true)}
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: "#222",
                                    color: "#fff",
                                    height: "52px",
                                    marginTop: "20px",
                                    fontSize: "16px",
                                    borderRadius: "14px",
                                    "&:hover": {
                                        backgroundColor: "#222",
                                    },
                                }}>
                                동의 후 계속
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default CheckingModal;
