import React from 'react'
import BtnGrop from './BtnGrop'
import styled from 'styled-components'

const BLock = styled.div`
  
`
const PaymentInfo = styled.div`
  &.payment{
    border-bottom: 1px solid #d3d3d3;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0 29px; 
  border-bottom: 2px solid #000;
  .delete{
    display: inline-flex;
    height: 34px;
    align-items: center;
    padding: 0 14px;
    font-size: 12px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #000;
  }
  .card_info{
    display: flex;
    align-items: center;

    .card_name{
      display:flex;
      min-width 52px;
      height: 39px;
      align-items: center;
      justify-content: center;
      border: 1px solid #ebebeb;
      border-radius: 5px;

      .name{
  
      }
    }
    .card_num{
      margin-left: 15px;
      .num{
        font-size: 14px;
        margin: 0;
      }
      .chip{
        height: 20px;
        display: inline-flex;
        background-color: #bbb;
        color: #fff;
        font-size: 12px;
        align-items: center;
        padding:0 6px;
        border-radius: 15px;
        font-weight: 700;
        margin-top: 2px;
      }
    }
  }
  
  
`
const Payment = () => {
  return (
    <BLock>
      <BtnGrop />
      <PaymentInfo>
        <div className='card_info'>
          <div className='card_name'>
            <span className='name'>삼성</span>
          </div>
          <div className='card_num'>
            <p className='num'>0000-0000-0000-0000</p>
            <div className='chip'>
              <span>기본 결제</span>
            </div>
          </div>
        </div>
        <div className='bnt_box'>
          <button type='button' className='delete'>삭제</button>
        </div>
      </PaymentInfo>
      <PaymentInfo className='payment'>
        <div className='card_info'>
          <div className='card_name'>
            <span className='name'>삼성</span>
          </div>
          <div className='card_num'>
            <p className='num'>0000-0000-0000-0000</p>
            <div className='chip'>
              <span>기본 결제</span>
            </div>
          </div>
        </div>
        <div className='bnt_box'>
          <button type='button' className='delete'>삭제</button>
        </div>
      </PaymentInfo>
    </BLock>
  )
}

export default Payment