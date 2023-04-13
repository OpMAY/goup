import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PointTabel from './PointTabel';
import Modal from '@mui/material/Modal';
import { axiosGetFunction } from '../../../module/CustomAxios';
import { useRecoilState, useRecoilStatem } from "recoil";
import { tokenAtom, userAtom } from '../../../atoms/atom'




const Block = styled.div`
  .point_title{
    display: flex;
    align-items: center;
    .title{
      color: #000;
      font-weight: bold;
      font-size: 24px;
    }
    .circle{
      display: inline-flex;
      margin: 0;
      padding: 0;
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }
  }
  .point_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 50px;
    padding: 30px;
    border: 1px solid #ebebeb;
    border-radius: 15px;
    background-color: #fafafa;
    
    .point_list{
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;

      li{
        position: relative;
        &:first-child{
          padding-right: 100px;
        }
        &:last-child{
          padding-left: 100px;
          &::after{
            content: "";
            display: block;
            width: 1px;
            background-color: #ebebeb;
            position: absolute;
            top:0;
            bottom:0;
            left: 0;
          }
        }
      }

      .point_subtitle{
        color: rgba(34,34,34,.5);
        font-size: 13px;
        margin: 0;
      }
      .point_num{
        font-size: 24px;
        color: #222;
      }
    }
  }
  .btn_box{
    text-align: center;
    .save_btn{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 120px;
      height: 42px;
      background-color: #222;
      color: #fff;
      border: 0;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`
const ModalBlock = styled.div`
  width: 448px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24;
  z-index: 9;
  background-color: #fff;
  .title{
    padding: 20px 50px;
    font-size: 18px;
    text-align: center;
    color: #000;
    font-weight: bold;
  }
  .modal_body{
    padding: 4px 32px 0;
    .modal_input_box{
      padding: 10px 0 14px;
      &:first-child{
        padding-top: 0;
      }
      .input_title{
        font-size: 13px;
        color: #222;
        margin: 0;
      }
      .modal_input{
        width: 100%;
        border: 0;
        border-bottom: 1px solid #ccc;
        outline: none;
        padding: 8px 0;
        font-size: 15px;
  
        &:focus{
          border-bottom: 1px solid #000;
        }
      }
    }
    .description{
      font-size: 12px;
      color: rgba(34,34,34,.5);
      margin: 0;
    }
  }
  .btn_box{
    text-align: center;
    padding: 24px 32px 32px;
    .btn{
      min-width: 120px;
      height: 42px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 700;
      border-radius: 10px;

      &.btn_back{
        background-color: #fff;
        border: 1px solid #ccc;
        color: #000;
      }
      &.btn_save{
        background-color: #222;
        color: #fff;
        border: 0;
        margin-left: 6px;
      }
    }
  }
`
const Point = () => {
  const [open, setOpen] = React.useState(false);
  const [token, setToken] = useRecoilState(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    axiosGetFunction(`/api/kream/my/point/${user}`, {}, token, setToken).then((res) => {
      console.log(res);
    })
  }, [])
  console.log(user.toString())
  return (
    <Block>
      <div className='point_title'>
        <h3 className='title'>포인트</h3>
      </div>
      <div className='point_box'>
        <ul className='point_list'>
          <li>
            <p className='point_subtitle'>사용 가능한 포인트</p>
            <strong className='point_num'>0P</strong>
          </li>
          <li>
            <p className='point_subtitle'>이번달 소멸예정 포인트</p>
            <strong className='point_num'>0P</strong>
          </li>
        </ul>
        <div className='btn_box'>
          <button type='button' className='save_btn' onClick={handleOpen}>+ 포인트 적립하기 </button>
        </div>
      </div>
      <PointTabel></PointTabel>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBlock>
          <h3 className='title'>포인트 적립</h3>
          <div className='modal_body'>
            <div className='modal_input_box '>
              <h4 className='input_title'>이름</h4>
              <input type="text" placeholder='수령인의 이름' className='modal_input'></input>
            </div>
            <p className='description'>
              • 유효기간이 지난 쿠폰 코드는 등록이 불가합니다.<br />
              • 쿠폰에 따라 발급 수량 및 계정당 사용 횟수가 제한될 수 있습니다.
            </p>
          </div>
          <div className='btn_box'>
            <button className='btn btn_back' onClick={() => setOpen(false)}>취소</button>
            <button className='btn btn_save'>저장하기</button>
          </div>
        </ModalBlock>
      </Modal>
    </Block>
  )
}

export default Point