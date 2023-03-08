import styled from 'styled-components';
import { useState } from 'react';
import BookMarkModal from '../../component/modal/BookMarkModal';
import Button from '@mui/material/Button';
import '../css/custom.css';

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
  background-color: #000;
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

const buttonStyle = {
  position: 'absolute',
  minWidth: "25px",
  height: "25px",
  backgroundColor: "#fff",
  bottom: "10px",
  right: "10px",
  padding: "0",
  borderRadius: '50px',
  "&:hover": {
    backgroundColor: '#fff'
  }
}
export const MainItem = ({p}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <MainItems>
        <MainItemImage url={p.images[0].url}>
          <Button sx={buttonStyle} onClick={handleOpen}></Button>
        </MainItemImage>
        {/* <img alt="Main Test Images" src="/images/img0.png"/> */}
        <div className='productInfo'>
          <em>{p.title}</em>
          <p className='name'>상세</p>
          <div className='price'>
            <strong>금액</strong>
            <p>즉시 구매가</p>
          </div>
        </div>
      </MainItems>
      <BookMarkModal 
      open={open}
      setOpen={setOpen}
      handleClose={handleClose}
      />
    </>
  )
}

const CardItem = styled.div` 
  flex: 0 0 19%;
  p{
    margin: 8px 0;
    text-align: center;
  }
`
const CardImage = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-color: #000;
  background-size: contain;
  background-position: center;
  height: 100px;
  border-radius: 15px;
`
export const Card = ({item}) => {
  return(
    <CardItem>
      <CardImage url={item.url}></CardImage>
      <p>{item.title}</p>
    </CardItem>
  )
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
  return(
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