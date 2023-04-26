import React from "react";
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {productSellAtom, sizeStateAtom} from "../../../atoms/atom";
import {Button, Box} from "@mui/material";

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

const redButton = {
  textAlign: "center",
  height: "50px",
  color: "#f15746",
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "10px",
  border: "1px solid #ebebeb",
};


const SizeButton = ({onClick, size, reg_datetime, price, value, state, isSell, no, red}) => {
    const sizeState = useRecoilValue(sizeStateAtom);
    console.log(sizeState)
    return (
        <Button
            sx={red ? redButton : button}
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
