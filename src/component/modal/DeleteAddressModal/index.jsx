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
    axiosDeleteFunction,
    axiosPutFunction,
} from "../../../module/CustomAxios";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {tokenAtom, userAddressAtom, userAtom} from "../../../atoms/atom";

const DeleteAddressModal = ({setParamAddress, addressInfo}) => {
    const [open, setOpen] = useState(false);
    const [token, setToken] = useRecoilState(tokenAtom);
    const user = useRecoilValue(userAtom);
    const [address, setAddress] = useState({
        name: addressInfo.name,
        no: addressInfo.no,
        phone_number: addressInfo.phone_number,
        zip_code: addressInfo.zip_code,
        address: addressInfo.address,
        address_detail: addressInfo.address_detail,
        isDefault: addressInfo._default_address,
    });

    const handleDelete = () => {
        if (address.isDefault) {
            alert('기본 배송지는 삭제할 수 없습니다.');
        } else {
            axiosDeleteFunction(
                "/api/kream/my/address/" + addressInfo.no,
                address,
                false,
                token,
                setToken
            ).then(res => {
                console.log("delete res", res.data.data.status);
            });
        }
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

    return (
        <>
            <div>
                <Button sx={button} className="button" onClick={handleDelete}>
                    <Typography sx={subtext}>삭제</Typography>
                </Button>
            </div>
        </>
    );
};

export default DeleteAddressModal;
