import React, {useState, useEffect} from "react";
import {Grid, Typography, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import {TfiClose} from "react-icons/tfi";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TwoButton from "../AddAddressModal/TwoButton";
import PostCode from "../../../module/PostCode";
import {
    axiosGetFunction,
    axiosPostFunction,
    axiosPutFunction,
} from "../../../module/CustomAxios";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {tokenAtom, userAddressAtom, userAtom} from "../../../atoms/atom";

const PutAddressModal = ({setParamAddress, addressInfo}) => {
    const [open, setOpen] = useState(false);
    const [userAddress, setUserAddress] = useRecoilState(userAddressAtom);
    const [token, setToken] = useRecoilState(tokenAtom);
    const user = useRecoilValue(userAtom);
    const [address, setAddress] = useState({
        user_no: user,
        name: addressInfo.name,
        no: addressInfo.no,
        phone_number: addressInfo.phone_number,
        zip_code: addressInfo.zip_code,
        address: addressInfo.address,
        address_detail: addressInfo.address_detail,
        isDefault: addressInfo._default_address,
    });

    const resetAddAddressModal = () => {
        const reset = {
            user_no: user,
            name: addressInfo.name,
            no: addressInfo.no,
            phone_number: addressInfo.phone_number,
            zip_code: addressInfo.zip_code,
            address: addressInfo.address,
            address_detail: addressInfo.address_detail,
            isDefault: addressInfo._default_address,
        };
        setAddress(reset);
    };

    const handleOpen = () => {
        resetAddAddressModal();
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const addAddress = () => {
        address._default_address = address.isDefault;
        axiosPutFunction(
            "/api/kream/my/address/" + user,
            address,
            false,
            token,
            setToken
        ).then(res => {
            if (res.data.status) {
                const temp = [...userAddress];
                const idx = temp.findIndex(x => x.no === address.no);
                temp[idx] = res.data.data.address;
                if (address._default_address) {
                    const temp2 = temp.map(item => {
                        if (item.no !== address.no) {
                            return {...item, _default_address: false, isDefault: false}
                        } else {
                            return item
                        }
                    });
                    const idx2 = temp2.findIndex(x => x.no === address.no);
                    const defaultAddr = temp2[idx2];
                    temp2.splice(idx2, 1);
                    temp2.unshift(defaultAddr);
                    setUserAddress(temp2)
                } else {
                    setUserAddress(temp);
                }
                handleClose()
            } else {
                alert("주소를 수정하지 못했습니다.");
            }
        });
    };

    const button = {
        display: "inline-flex",
        height: "34px",
        backgroundColor: "#fff",
        alignItems: "center",
        color: "rgba(34, 34, 34, 0.8)",
        border: "1px solid #d3d3d3",
        fontSize: "12px",
        borderRadius: "10px",
        cursor: "pointer",
    };

    const subtext = {
        fontSize: "13px",
        color: "rgba(34, 34, 34, 0.5)",
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
        width: 520,
        boxShadow: 24,
    };

    return (
        <>
            <div>
                <Button sx={button} className="button" onClick={handleOpen}>
                    <Typography sx={subtext}>수정</Typography>
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Box className="close_button">
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
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
                            <Typography sx={text}>배송지 수정</Typography>
                        </Box>
                        <Box
                            sx={{
                                margin: "0px 32px",
                            }}>
                            <TextField
                                id="filled-required"
                                sx={{margin: "16px 0"}}
                                label="이름"
                                variant="standard"
                                fullWidth
                                placeholder="수령인의 이름"
                                InputLabelProps={{
                                    shrink: true,
                                    sx: {color: "#222", fontWeight: "700"},
                                }}
                                value={address.name}
                                onChange={e =>
                                    setAddress(prevState => {
                                        return {...prevState, name: e.target.value};
                                    })
                                }
                                autoFocus
                            />
                            <TextField
                                id="filled-required"
                                sx={{margin: "16px 0"}}
                                label="휴대폰 번호"
                                variant="standard"
                                fullWidth
                                placeholder="-없이 입력"
                                InputLabelProps={{
                                    shrink: true,
                                    sx: {color: "#222", fontWeight: "700"},
                                }}
                                value={address.phone_number}
                                onChange={e =>
                                    setAddress(prevState => {
                                        return {...prevState, phone_number: e.target.value};
                                    })
                                }
                            />
                            {/* <Stack direction="row" alignItems="center"> */}
                            <TextField
                                id="filled-required"
                                sx={{margin: "16px 0"}}
                                label="우편번호"
                                variant="standard"
                                fullWidth
                                placeholder="우편 번호를 검색하세요"
                                InputLabelProps={{
                                    shrink: true,
                                    sx: {color: "#222", fontWeight: "700"},
                                }}
                                inputProps={{
                                    readOnly: true,
                                }}
                                value={address.zip_code}
                                InputProps={{
                                    endAdornment: <PostCode setAddress={setAddress}/>,
                                }}
                            />
                            <TextField
                                id="filled-required"
                                sx={{margin: "16px 0"}}
                                label="주소"
                                variant="standard"
                                fullWidth
                                placeholder="우편 번호 검색 후, 자동입력 됩니다"
                                InputLabelProps={{
                                    shrink: true,
                                    sx: {color: "#222", fontWeight: "700"},
                                }}
                                inputProps={{
                                    readOnly: true,
                                }}
                                value={address.address}
                            />
                            <TextField
                                id="filled-required"
                                sx={{margin: "16px 0"}}
                                label="상세 주소"
                                variant="standard"
                                fullWidth
                                placeholder={
                                    address.address
                                        ? "건물, 아파트, 동/호수 입력"
                                        : "우편 번호 검색 후 입력 가능합니다."
                                }
                                value={address.address_detail}
                                InputLabelProps={{
                                    shrink: true,
                                    sx: {color: "#222", fontWeight: "700"},
                                }}
                                inputProps={
                                    !address.address
                                        ? {
                                            readOnly: true,
                                        }
                                        : {}
                                }
                                onChange={e =>
                                    setAddress(prevState => {
                                        return {...prevState, address_detail: e.target.value};
                                    })
                                }
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={address.isDefault}
                                        onChange={e =>
                                            setAddress(prevState => {
                                                return {...prevState, isDefault: e.target.checked};
                                            })
                                        }
                                    />
                                }
                                label="기본 배송지로 설정"
                                sx={{
                                    "& .MuiSvgIcon-root": {fontSize: 28, color: "#222"},
                                    color: "#222",
                                    "& .MuiTypography-root": {fontSize: 13},
                                }}
                            />
                            <TwoButton
                                handleClose={handleClose}
                                onConfirm={addAddress}
                                solid="저장하기"
                                padding="32px"
                                disabled={
                                    !(
                                        address.name &&
                                        address.phone_number &&
                                        address.zip_code &&
                                        address.address
                                    )
                                }
                            />
                        </Box>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default PutAddressModal;
