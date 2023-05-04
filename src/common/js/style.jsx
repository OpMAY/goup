import styled from 'styled-components';
import React, { useState } from 'react';
import BookMarkModal from '../../component/modal/BookMarkModal';
import Button from '@mui/material/Button';
import '../css/custom.css';
import { Link, useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalOpenAtom, modalProductAtom, sizeAtom, tokenAtom, userAtom } from "../../atoms/atom";
import { axiosGetFunction } from "../../module/CustomAxios";

export const Inner = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: ${props => props.padding};
  box-sizing: border-box;
  border-top: ${props => props.bordertop};
`
// MainItems
const MainItems = styled.div`
  flex: 0 0 auto;
  position: relative;
  margin-top: 16px;
  .productInfo{
    padding: 9px 0 0;
  }
  em{
    display: inline-block;
    font-size: 14px;
    font-style: normal;
    padding-bottom: 2px;
    font-weight: 700;
  }
  .name{
    font-size: 14px;
    margin: 4px 0 0 0
  }
  .price{
    padding: 7px 0 0;
    strong{
      font-size: 15px;
    }
    p{
      font-size: 11px;
      margin: 0;
      color: rgba(34,34,34,.5); 
    }
  }
  
`
const MainItemImage = styled.div`
  position: relative;
  width: 294px;
  height: 294px;
  background-image: url(${props => props.url});
  background-size: contain;
  background-color: ${props => props.color};
  background-position: center;
  border-radius: 15px;

  .bookMark{
    width: 25px;
    height: 25px;
    border: 1px solid #555;
    position: absolute;
    right:10px;
    bottom: 10px;
    border-radius: 50px;
    background-color: #fff;
  }
`

const LinkStyle = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
`

const buttonStyle = {
  position: 'absolute',
  minWidth: "25px",
  height: "25px",
  backgroundColor: 'transparent',
  bottom: "10px",
  right: "10px",
  padding: "0",
  borderRadius: '50px',
  color: '#000',
}
export const MainItem = ({ p }) => {
  const setOpen = useSetRecoilState(modalOpenAtom);
  const setModalProduct = useSetRecoilState(modalProductAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const setSizes = useSetRecoilState(sizeAtom);
  const [getUser, setGetUser] = useRecoilState(userAtom);
  const navigate = useNavigate();
  const modalOpen = (no) => {
    if (getUser === null) {
      navigate('/login');
    } else {
      axiosGetFunction('/api/kream/product/size/' + no + '?user_no=' + 1, {}, token, setToken).then((res) => {
        setSizes(res.data.data.sizes);
        setModalProduct(res.data.data.product);
        setOpen(true);
      });
    }
  }
  return (
    <>
      <MainItems>
        <LinkStyle to={`/product/${p.no}`}></LinkStyle>
        <MainItemImage color={p.brand.color} url={p.image.url}>
          <LinkStyle to={`/product/${p.no}`}></LinkStyle>
          <Button sx={buttonStyle} onClick={() => { modalOpen(p.no) }}>
            {
              p._wish ? <BookmarkIcon /> : <BookmarkBorderIcon />
            }
          </Button>
        </MainItemImage>
        {/* <img alt="Main Test Images" src="/images/img0.png"/> */}
        <div className='productInfo'>
          <em>{p.brand.name}</em>
          <p className='name' style={{ maxWidth: '294px' }}>{p.name}</p>
          <div className='price'>
            <strong>{addComma(p.price)}원</strong>
            <p>즉시 구매가</p>
          </div>
        </div>
      </MainItems>
    </>
  )
}

const CardItem = styled.div` 
  flex: 0 0 19%;
  cursor: pointer;
  position: relative;
  p{
    margin: 8px 0;
    text-align: center;
  }
`
const CardImage = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-color: ${props => props.color};
  background-size: contain;
  background-position: center;
  height: 100px;
  border-radius: 15px;
`


export const Card = ({ item }) => {
  return (
    <CardItem>
      <LinkStyle to={`/shop?brands=${item.no}`}></LinkStyle>
      <CardImage url={item.image.url} color={item.color}></CardImage>
      <p>{item.name}</p>
    </CardItem>
  )
}

function addComma(number) {
  let len;
  let point;
  let str;
  if (number !== null) {
    const number_string = number + '';
    point = number_string.length % 3;
    len = number_string.length;
    str = number_string.substring(0, point);
    while (point < len) {
      if (str !== '') str += ',';
      str += number_string.substring(point, point + 3);
      point += 3;
    }
  } else {
    str = '- '
  }
  return str;
}

const GenderItem = styled.div`
  margin: 40px 0 0 0;
  .imgBox{
    height: 100px;
    background-image: url("https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #ccc;
    border-radius: 15px;

    
  }
  .name{
    margin-bottom: 0;
    text-align: center;
  }
`

export const GenderList = () => {
  return (
    <GenderItem>
      <div className='imgBox'></div>
      <p className='name'>test</p>
    </GenderItem>
  )
}

// border top / bottom 
export const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #ccc;
  margin: ${props => props.margin}
`

// Title
export const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
`