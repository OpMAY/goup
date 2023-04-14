import React from 'react';
import {useDaumPostcodePopup} from "react-daum-postcode";
import {postcodeScriptUrl} from "react-daum-postcode/lib/loadPostcode";
import Button from "@mui/material/Button";


const PostCode = ({setAddress}) => {
    const open = useDaumPostcodePopup(postcodeScriptUrl);
    const handleComplete = (data) => {
        console.log(data)
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        setAddress(prevState => {
            return {...prevState, address : fullAddress, zip_code: data.zonecode}
        })
        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    };

    const handleClick = () => {
        open({onComplete: handleComplete});
    };

    return (
        <Button
            sx={{
                borderRadius: "10px",
                border: "1px solid #d3d3d3",
                height: "34px",
                color: "rgba(34,34,34,.8)",
                fontSize: "12px",
                position: "absolute",
                right: "0",
                bottom: "6px",
            }}
            onClick={handleClick}
        >
            우편번호
        </Button>
    );
}

export default PostCode;
