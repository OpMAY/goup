import React, {useState, useEffect} from "react";
import {Grid, Typography, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import {TfiClose} from "react-icons/tfi";
import {BiCheck} from "react-icons/bi";
import {useRecoilState, useRecoilValue} from "recoil";
import {
    tokenAtom,
    userAddressAtom, userAtom,
} from "../../../atoms/atom";
import {Hr} from "../../../common/js/style";
import {axiosGetFunction} from "../../../module/CustomAxios";

const AddressChangeModal = ({deliveryAddress, setDeliveryAddress}) => {
    const [open, setOpen] = useState(false);
    const [userAddress, setUserAddress] = useRecoilState(userAddressAtom);
    const [token, setToken] = useRecoilState(tokenAtom);
    const [addressCheck, setAddressCheck] = useState([]);
    const user = useRecoilValue(userAtom)
    const handleOpen = () => {
        axiosGetFunction(
            `/api/kream/my/address/${user}`,
            {},
            token,
            setToken
        ).then(res => {
            const d = res.data.data.address;
            if (d.length <= 0) {
                setDeliveryAddress(null);
            } else {
                const check = [true];
                for (let i = 1; i < d.length; i++) {
                    check.push(false);
                }
                setAddressCheck(check);
                const index = d.findIndex(x => x.zip_code === deliveryAddress.zip_code);
                d.splice(index, 1);
                d.unshift(deliveryAddress);
                setUserAddress(d);
                setOpen(true);
            }
        });
    };
    const handleClose = () => {
        setOpen(false);
    };

    const changeCheck = (idx) => {
        setDeliveryAddress(userAddress[idx]);
        handleClose();
    }

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
        width: 520,
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
                            <Typography sx={text}>주소록</Typography>
                        </Box>
                        <Box
                            sx={{
                                margin: "0px 20px 80px",
                                height: "480px",
                            }}>
                            {userAddress.map((address, idx) => (
                                <>
                                    <Stack
                                        onClick={(e) => changeCheck(idx)}
                                        sx={{cursor: 'pointer', padding: '8px 0'}}
                                        key={address.no}
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="space-between">
                                        <Box sx={{fontSize: "14px", maxWidth: '90%'}}>
                                            <Box component="span" sx={{fontWeight: "700"}}>
                                                {address.name}
                                            </Box>
                                            {
                                                address._default_address ? <Box component="span" sx={{
                                                    display: 'inline-block',
                                                    verticalAlign: 'top',
                                                    lineHeight: '14px',
                                                    marginTop: '0',
                                                    marginLeft: '4px',
                                                    padding: '3px 6px',
                                                    fontSize: '12px',
                                                    letterSpacing: '-.06px',
                                                    borderRadius: '10px',
                                                    backgroundColor: '#f4f4f4',
                                                    boxSizing: 'border-box'
                                                }}>
                                                    기본 배송지
                                                </Box> : null
                                            }
                                            <Typography sx={{fontSize: "14px"}}>
                                                {address.phone_number}
                                            </Typography>
                                            <Typography sx={{fontSize: "14px"}}>
                                                ({address.zip_code}){address.address} {address.address_detail}
                                            </Typography>
                                        </Box>
                                        {
                                            addressCheck[idx] ? <BiCheck size="24"></BiCheck> : null
                                        }
                                    </Stack>
                                    <Hr/>
                                </>
                            ))}
                        </Box>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default AddressChangeModal;
