import React from "react";
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {productSellAtom, sizeStateAtom} from "../../../atoms/atom";
import {Button, Box} from "@mui/material";

// const Button = styled.button`
//   &:focus {
//     border: 1px solid #222;
//   }
//   text-align: center;
//   height: 50px;
//   color: #222;
//   width: 100%;
//   background-color: #fff;
//   border-radius: 10px;
//   border: 1px solid #ebebeb;
//   cursor: pointer;
//   p {
//     margin: 0;
//   }
//   .top {
//     font-size: 14px;
//   }
//   .pending {
//     color: inherit;
//   }
// `;

const button = {
    textAlign: "center",
    height: "50px",
    color: "#222",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "1px solid #ebebeb",
    '&.is-active': {
        border: "2px solid black",
        fontWeight: '700'
    },
    '& > h4' : {
        display: 'contents',
        fontSize: '12px'
    },
    '._price.sell': {
        color: '#31b46e'
    },
    '._price.buy' : {
        color: '#f15746'
    }
};

const SizeButton = ({onClick, size, reg_datetime, price, value, state, isSell, no}) => {
    const sizeState = useRecoilValue(sizeStateAtom);

    return (
        <Button
            sx={button}
            autoFocus={sizeState && sizeState.size === size}
            onClick={onClick}
            className={sizeState && sizeState.size === size ? 'is-active' : ''}
            no={no}
            value={value}>
            {size}
            <br/>
            <h4 className={price ? (isSell ? '_price sell' : '_price buy') : '_state'}>{price ? price.toLocaleString() : state}</h4>
        </Button>
    );
};

export default SizeButton;
